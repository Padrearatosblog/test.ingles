/*
  Generador escalable para test.ingles.

  Uso:
    node tools/generate-question-bank.js

  Requisitos para OCR automatico:
    - Instalar Tesseract OCR y tener el comando `tesseract` en PATH.

  Si no hay OCR disponible, el script no inventa contenido: crea un reporte
  en data/ocr-review.json con las imagenes pendientes de revisar.
*/

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const imgDir = path.join(root, "img");
const dataDir = path.join(root, "data");
const outputFile = path.join(root, "js", "question-bank.js");
const reviewFile = path.join(dataDir, "ocr-review.json");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function hasTesseract() {
  try {
    execFileSync("tesseract", ["--version"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function listImages() {
  if (!fs.existsSync(imgDir)) return [];
  return fs.readdirSync(imgDir)
    .filter((file) => /\.(jpe?g|png|webp|tif|tiff)$/i.test(file))
    .map((file) => path.join(imgDir, file));
}

function runOcr(imagePath) {
  const text = execFileSync("tesseract", [imagePath, "stdout", "-l", "eng"], {
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 8
  });

  return text
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function classifySection(text) {
  const lower = text.toLowerCase();
  if (lower.includes("functional language")) return "Functional Language";
  if (lower.includes("vocabulary")) return "Vocabulary";
  if (lower.includes("grammar")) return "Grammar";
  if (lower.includes("reading")) return "Reading";
  if (lower.includes("complete")) return "Complete sentences";
  if (lower.includes("match")) return "Match phrases";
  return "Review";
}

function buildReviewOnlyBank(images, reason) {
  return {
    meta: {
      project: "test.ingles",
      generatedFrom: images.map((image) => path.relative(root, image).replace(/\\/g, "/")),
      generatedBy: "tools/generate-question-bank.js",
      note: "OCR no disponible o lectura insuficiente. No se generan preguntas inventadas.",
      reviewItems: images.map((image) => ({
        source: path.relative(root, image).replace(/\\/g, "/"),
        section: "OCR",
        reason
      }))
    },
    vocabulary: [],
    questions: []
  };
}

function parseQuestionsConservatively(ocrEntries) {
  const reviewItems = [];

  for (const entry of ocrEntries) {
    reviewItems.push({
      source: entry.source,
      section: classifySection(entry.text),
      reason: "OCR extraido, pero el parser automatico conservador requiere revision para confirmar opciones y respuestas correctas."
    });
  }

  return {
    meta: {
      project: "test.ingles",
      generatedFrom: ocrEntries.map((entry) => entry.source),
      generatedBy: "tools/generate-question-bank.js",
      note: "OCR extraido. Las preguntas no confirmadas quedan fuera del test hasta revisar respuestas correctas.",
      reviewItems
    },
    vocabulary: [],
    questions: []
  };
}

function writeBank(bank) {
  const js = `window.EXAM_QUESTION_BANK = ${JSON.stringify(bank, null, 2)};\n`;
  fs.writeFileSync(outputFile, js, "utf8");
}

function main() {
  ensureDir(dataDir);
  const images = listImages();

  if (!images.length) {
    const bank = buildReviewOnlyBank([], "No se encontraron imagenes en la carpeta img.");
    writeBank(bank);
    fs.writeFileSync(reviewFile, JSON.stringify(bank.meta.reviewItems, null, 2), "utf8");
    return;
  }

  if (!hasTesseract()) {
    const bank = buildReviewOnlyBank(images, "No se encontro Tesseract OCR en PATH.");
    writeBank(bank);
    fs.writeFileSync(reviewFile, JSON.stringify(bank.meta.reviewItems, null, 2), "utf8");
    return;
  }

  const ocrEntries = images.map((image) => ({
    source: path.relative(root, image).replace(/\\/g, "/"),
    text: runOcr(image)
  }));

  fs.writeFileSync(path.join(dataDir, "ocr-output.json"), JSON.stringify(ocrEntries, null, 2), "utf8");

  const bank = parseQuestionsConservatively(ocrEntries);
  writeBank(bank);
  fs.writeFileSync(reviewFile, JSON.stringify(bank.meta.reviewItems, null, 2), "utf8");
}

main();
