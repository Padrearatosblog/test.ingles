const vocabulary = [
  { word: "carrier", meaning: "transportista", explanation: "Empresa o persona que transporta la mercancía.", example: "The carrier will deliver the pallets tomorrow." },
  { word: "shipper", meaning: "remitente", explanation: "Persona o empresa que envía la mercancía.", example: "The shipper prepared the export documents." },
  { word: "freight", meaning: "mercancía / carga", explanation: "Productos transportados por carretera, barco, avión o tren.", example: "The freight arrived at the warehouse this morning." },
  { word: "warehouse", meaning: "almacén", explanation: "Lugar donde se guardan productos antes de venderlos o enviarlos.", example: "The goods are stored in the warehouse." },
  { word: "goods in", meaning: "entrada de mercancía", explanation: "Zona o proceso donde se recibe mercancía.", example: "Please take the boxes to goods in." },
  { word: "goods out", meaning: "salida de mercancía", explanation: "Zona o proceso donde salen los pedidos preparados.", example: "The order is ready in goods out." },
  { word: "dispatch", meaning: "enviar / despachar", explanation: "Enviar un pedido desde el almacén al cliente.", example: "We dispatch online orders every afternoon." },
  { word: "consignee", meaning: "destinatario", explanation: "Persona o empresa que recibe la mercancía.", example: "The consignee must sign the delivery note." },
  { word: "container", meaning: "contenedor", explanation: "Unidad grande usada para transportar carga.", example: "The container is waiting at the port." },
  { word: "in stock", meaning: "en stock", explanation: "Disponible en almacén para vender o enviar.", example: "This model is in stock." },
  { word: "out of stock", meaning: "agotado", explanation: "No disponible en ese momento.", example: "The blue jackets are out of stock." },
  { word: "bulk", meaning: "al por mayor", explanation: "Comprar o mover grandes cantidades.", example: "We buy paper in bulk." },
  { word: "label", meaning: "etiquetar", explanation: "Poner una etiqueta con información del producto o envío.", example: "Label every box before dispatch." },
  { word: "weigh", meaning: "pesar", explanation: "Medir el peso de un producto o paquete.", example: "Weigh the parcel before shipping it." },
  { word: "pallet", meaning: "palé", explanation: "Base de madera o plástico para mover mercancía.", example: "Put the boxes on a pallet." },
  { word: "forklift", meaning: "carretilla elevadora", explanation: "Vehículo para levantar y mover palés.", example: "Only trained staff can drive the forklift." },
  { word: "wooden crate", meaning: "caja de madera", explanation: "Caja resistente para proteger productos.", example: "The machine parts are in a wooden crate." },
  { word: "conveyor belt", meaning: "cinta transportadora", explanation: "Sistema que mueve productos de un punto a otro.", example: "The boxes move along the conveyor belt." },
  { word: "showroom", meaning: "sala de exposición", explanation: "Espacio donde se muestran productos a clientes.", example: "Customers can see the new range in the showroom." },
  { word: "order picking", meaning: "preparación de pedidos", explanation: "Proceso de recoger productos del almacén para un pedido.", example: "Order picking starts at eight o'clock." },
  { word: "expiry date", meaning: "fecha de caducidad", explanation: "Fecha límite para usar o vender un producto.", example: "Check the expiry date on the label." },
  { word: "SKU code", meaning: "código SKU", explanation: "Código único para identificar un producto.", example: "Scan the SKU code before packing." },
  { word: "handling charges", meaning: "gastos de manipulación", explanation: "Costes por preparar, mover o gestionar mercancía.", example: "Handling charges are included in the invoice." },
  { word: "cost price", meaning: "precio de coste", explanation: "Precio que paga la empresa por comprar el producto.", example: "The cost price is lower when we buy in bulk." },
  { word: "retail price", meaning: "precio de venta", explanation: "Precio final que paga el cliente.", example: "The retail price includes our profit." },
  { word: "profit", meaning: "beneficio", explanation: "Dinero que queda después de restar costes.", example: "The company made a good profit this month." },
  { word: "importer", meaning: "importador", explanation: "Empresa que compra productos de otro país.", example: "The importer received goods from France." },
  { word: "duty free", meaning: "libre de impuestos", explanation: "Sin pagar ciertos impuestos de importación o venta.", example: "Some airport products are duty free." },
  { word: "road haulage", meaning: "transporte por carretera", explanation: "Transporte de mercancía en camión.", example: "Road haulage is common for national deliveries." },
  { word: "paperwork", meaning: "documentación", explanation: "Documentos necesarios para compras, ventas o envíos.", example: "The paperwork must be complete before dispatch." }
];

const questions = [
  {
    id: 1,
    section: "Vocabulary",
    type: "multiple_choice",
    question: "Where is our freight container?",
    options: ["I don't know. I'll talk to the shipper.", "I don't know. I'll talk to the carrier.", "Both a and b."],
    correct: 2,
    translation: "¿Dónde está nuestro contenedor de mercancías?",
    hint: "Piensa en quién envía la mercancía y quién la transporta.",
    explanation: "La respuesta correcta es 'Both a and b' porque tanto el remitente como el transportista podrían tener información sobre el contenedor.",
    vocabulary: [
      { word: "freight container", meaning: "contenedor de mercancías" },
      { word: "shipper", meaning: "remitente" },
      { word: "carrier", meaning: "transportista" }
    ]
  },
  {
    id: 2,
    section: "Stock and warehousing",
    type: "word_choice",
    question: "The products are available in the warehouse. They are ____.",
    options: ["out of stock", "in stock", "duty free"],
    correct: 1,
    translation: "Los productos están disponibles en el almacén. Están ____.",
    hint: "Busca la expresión que significa disponible.",
    explanation: "'In stock' significa que el producto está disponible. 'Out of stock' significa agotado.",
    vocabulary: [{ word: "in stock", meaning: "en stock" }, { word: "warehouse", meaning: "almacén" }]
  },
  {
    id: 3,
    section: "Stock and warehousing",
    type: "word_choice",
    question: "We cannot send the order because the item is ____.",
    options: ["in stock", "out of stock", "in bulk"],
    correct: 1,
    translation: "No podemos enviar el pedido porque el artículo está ____.",
    hint: "La frase indica que no se puede enviar.",
    explanation: "'Out of stock' significa agotado, por eso no se puede enviar el pedido.",
    vocabulary: [{ word: "out of stock", meaning: "agotado" }, { word: "order", meaning: "pedido" }]
  },
  {
    id: 4,
    section: "Complete sentences",
    type: "fill_blank",
    question: "Please ____ every box before dispatch.",
    options: ["label", "profit", "retail"],
    correct: 0,
    translation: "Por favor, etiqueta cada caja antes del envío.",
    hint: "Necesitas un verbo relacionado con poner información en una caja.",
    explanation: "'Label' como verbo significa etiquetar. Las otras opciones no funcionan como acción en esta frase.",
    vocabulary: [{ word: "label", meaning: "etiquetar" }, { word: "dispatch", meaning: "envío / despachar" }]
  },
  {
    id: 5,
    section: "Complete sentences",
    type: "fill_blank",
    question: "You must ____ the parcel before shipping it.",
    options: ["weigh", "showroom", "consignee"],
    correct: 0,
    translation: "Debes pesar el paquete antes de enviarlo.",
    hint: "Antes de enviar un paquete suele calcularse su peso.",
    explanation: "'Weigh' significa pesar. Es la acción correcta antes de calcular transporte o envío.",
    vocabulary: [{ word: "weigh", meaning: "pesar" }, { word: "parcel", meaning: "paquete" }]
  },
  {
    id: 6,
    section: "Vocabulary",
    type: "multiple_choice",
    question: "Who receives the goods?",
    options: ["The consignee", "The forklift", "The pallet"],
    correct: 0,
    translation: "¿Quién recibe la mercancía?",
    hint: "Busca una persona o empresa, no un objeto de almacén.",
    explanation: "'Consignee' es el destinatario, la persona o empresa que recibe la mercancía.",
    vocabulary: [{ word: "consignee", meaning: "destinatario" }, { word: "goods", meaning: "mercancía" }]
  },
  {
    id: 7,
    section: "Choose the correct word",
    type: "word_choice",
    question: "The ____ delivers the goods by truck.",
    options: ["carrier", "retail price", "expiry date"],
    correct: 0,
    translation: "El transportista entrega la mercancía en camión.",
    hint: "La frase habla de una empresa o persona que transporta.",
    explanation: "'Carrier' significa transportista. Es quien realiza el transporte.",
    vocabulary: [{ word: "carrier", meaning: "transportista" }, { word: "truck", meaning: "camión" }]
  },
  {
    id: 8,
    section: "Choose the correct word",
    type: "word_choice",
    question: "The ____ sends the goods to the customer.",
    options: ["shipper", "conveyor belt", "cost price"],
    correct: 0,
    translation: "El remitente envía la mercancía al cliente.",
    hint: "Busca la palabra para quien envía.",
    explanation: "'Shipper' es el remitente, quien envía la mercancía.",
    vocabulary: [{ word: "shipper", meaning: "remitente" }, { word: "customer", meaning: "cliente" }]
  },
  {
    id: 9,
    section: "Stock and warehousing",
    type: "multiple_choice",
    question: "Where do employees receive new deliveries?",
    options: ["Goods in", "Goods out", "Showroom"],
    correct: 0,
    translation: "¿Dónde reciben los empleados las nuevas entregas?",
    hint: "Piensa en entrada, no salida.",
    explanation: "'Goods in' es la zona o proceso de entrada de mercancía.",
    vocabulary: [{ word: "goods in", meaning: "entrada de mercancía" }, { word: "deliveries", meaning: "entregas" }]
  },
  {
    id: 10,
    section: "Stock and warehousing",
    type: "multiple_choice",
    question: "Where are orders prepared for dispatch?",
    options: ["Goods out", "Duty free", "Importer"],
    correct: 0,
    translation: "¿Dónde se preparan los pedidos para el envío?",
    hint: "La mercancía ya sale del almacén.",
    explanation: "'Goods out' se refiere a la salida de mercancía, donde los pedidos están listos para enviarse.",
    vocabulary: [{ word: "goods out", meaning: "salida de mercancía" }, { word: "dispatch", meaning: "despachar / enviar" }]
  },
  {
    id: 11,
    section: "Vocabulary",
    type: "multiple_choice",
    question: "What machine lifts pallets in a warehouse?",
    options: ["A forklift", "A wooden crate", "A label"],
    correct: 0,
    translation: "¿Qué máquina levanta palés en un almacén?",
    hint: "Busca una máquina, no un embalaje.",
    explanation: "Una 'forklift' es una carretilla elevadora. Sirve para levantar y mover palés.",
    vocabulary: [{ word: "forklift", meaning: "carretilla elevadora" }, { word: "pallets", meaning: "palés" }]
  },
  {
    id: 12,
    section: "Vocabulary",
    type: "multiple_choice",
    question: "What do we call the base used to move many boxes together?",
    options: ["A pallet", "A showroom", "Paperwork"],
    correct: 0,
    translation: "¿Cómo llamamos a la base usada para mover muchas cajas juntas?",
    hint: "Es una base de madera o plástico.",
    explanation: "'Pallet' significa palé. Se usa para agrupar cajas y moverlas con facilidad.",
    vocabulary: [{ word: "pallet", meaning: "palé" }, { word: "boxes", meaning: "cajas" }]
  },
  {
    id: 13,
    section: "Match phrases",
    type: "match",
    question: "Which option matches 'handling charges'?",
    options: ["Gastos de manipulación", "Precio de venta", "Sala de exposición"],
    correct: 0,
    translation: "¿Qué opción corresponde a 'handling charges'?",
    hint: "Son costes añadidos por mover o preparar mercancía.",
    explanation: "'Handling charges' son gastos de manipulación, no el precio de venta.",
    vocabulary: [{ word: "handling charges", meaning: "gastos de manipulación" }]
  },
  {
    id: 14,
    section: "Match phrases",
    type: "match",
    question: "Which option matches 'retail price'?",
    options: ["Precio de coste", "Precio de venta", "Libre de impuestos"],
    correct: 1,
    translation: "¿Qué opción corresponde a 'retail price'?",
    hint: "Es el precio para el cliente final.",
    explanation: "'Retail price' es el precio de venta. 'Cost price' es el precio de coste.",
    vocabulary: [{ word: "retail price", meaning: "precio de venta" }, { word: "cost price", meaning: "precio de coste" }]
  },
  {
    id: 15,
    section: "Match phrases",
    type: "match",
    question: "Which option matches 'cost price'?",
    options: ["Precio de coste", "Beneficio", "Salida de mercancía"],
    correct: 0,
    translation: "¿Qué opción corresponde a 'cost price'?",
    hint: "Es lo que paga la empresa antes de vender.",
    explanation: "'Cost price' es el precio de coste, es decir, lo que cuesta comprar el producto.",
    vocabulary: [{ word: "cost price", meaning: "precio de coste" }]
  },
  {
    id: 16,
    section: "Choose the correct word",
    type: "word_choice",
    question: "The difference between the retail price and the cost price is the ____.",
    options: ["profit", "container", "paperwork"],
    correct: 0,
    translation: "La diferencia entre el precio de venta y el precio de coste es el beneficio.",
    hint: "Piensa en dinero ganado después de costes.",
    explanation: "'Profit' significa beneficio. Sale de restar costes al precio de venta.",
    vocabulary: [{ word: "profit", meaning: "beneficio" }, { word: "retail price", meaning: "precio de venta" }]
  },
  {
    id: 17,
    section: "Complete sentences",
    type: "fill_blank",
    question: "Check the ____ before selling food products.",
    options: ["expiry date", "forklift", "road haulage"],
    correct: 0,
    translation: "Comprueba la fecha de caducidad antes de vender productos alimentarios.",
    hint: "En alimentación, la fecha es importante.",
    explanation: "'Expiry date' es la fecha de caducidad.",
    vocabulary: [{ word: "expiry date", meaning: "fecha de caducidad" }, { word: "food products", meaning: "productos alimentarios" }]
  },
  {
    id: 18,
    section: "Complete sentences",
    type: "fill_blank",
    question: "Scan the ____ to identify the product.",
    options: ["SKU code", "bulk", "showroom"],
    correct: 0,
    translation: "Escanea el código SKU para identificar el producto.",
    hint: "Es un código de identificación.",
    explanation: "'SKU code' identifica un producto concreto dentro del inventario.",
    vocabulary: [{ word: "SKU code", meaning: "código SKU" }, { word: "scan", meaning: "escanear" }]
  },
  {
    id: 19,
    section: "Functional language",
    type: "multiple_choice",
    question: "A customer asks: 'Is this item available?' What is the best answer?",
    options: ["Yes, it is in stock.", "Yes, it is a forklift.", "Yes, it is paperwork."],
    correct: 0,
    translation: "Un cliente pregunta: '¿Está disponible este artículo?' ¿Cuál es la mejor respuesta?",
    hint: "La pregunta habla de disponibilidad.",
    explanation: "'Yes, it is in stock' responde correctamente que el artículo está disponible.",
    vocabulary: [{ word: "available", meaning: "disponible" }, { word: "in stock", meaning: "en stock" }]
  },
  {
    id: 20,
    section: "Functional language",
    type: "multiple_choice",
    question: "A supplier says: 'The item is out of stock.' What does it mean?",
    options: ["It is available now.", "It is not available now.", "It is cheaper now."],
    correct: 1,
    translation: "Un proveedor dice: 'El artículo está agotado.' ¿Qué significa?",
    hint: "Out indica fuera o sin disponibilidad.",
    explanation: "'Out of stock' significa que el producto no está disponible ahora.",
    vocabulary: [{ word: "supplier", meaning: "proveedor" }, { word: "out of stock", meaning: "agotado" }]
  },
  {
    id: 21,
    section: "True or false",
    type: "true_false",
    question: "A showroom is a place where customers can see products.",
    options: ["True", "False"],
    correct: 0,
    translation: "Una sala de exposición es un lugar donde los clientes pueden ver productos.",
    hint: "Show significa mostrar.",
    explanation: "Es verdadero. Un 'showroom' es una sala de exposición.",
    vocabulary: [{ word: "showroom", meaning: "sala de exposición" }, { word: "customers", meaning: "clientes" }]
  },
  {
    id: 22,
    section: "True or false",
    type: "true_false",
    question: "Road haulage means transport by sea.",
    options: ["True", "False"],
    correct: 1,
    translation: "Road haulage significa transporte por mar.",
    hint: "Road significa carretera.",
    explanation: "Es falso. 'Road haulage' significa transporte por carretera.",
    vocabulary: [{ word: "road haulage", meaning: "transporte por carretera" }, { word: "by sea", meaning: "por mar" }]
  },
  {
    id: 23,
    section: "Vocabulary",
    type: "multiple_choice",
    question: "Which word means 'documentation'?",
    options: ["Paperwork", "Bulk", "Pallet"],
    correct: 0,
    translation: "¿Qué palabra significa 'documentación'?",
    hint: "Es una palabra muy usada para documentos de oficina o envío.",
    explanation: "'Paperwork' significa documentación o papeleo.",
    vocabulary: [{ word: "paperwork", meaning: "documentación" }]
  },
  {
    id: 24,
    section: "Stock and warehousing",
    type: "multiple_choice",
    question: "What moves boxes automatically through a warehouse?",
    options: ["A conveyor belt", "A consignee", "A cost price"],
    correct: 0,
    translation: "¿Qué mueve cajas automáticamente por un almacén?",
    hint: "Es una cinta que transporta objetos.",
    explanation: "'Conveyor belt' significa cinta transportadora.",
    vocabulary: [{ word: "conveyor belt", meaning: "cinta transportadora" }, { word: "automatically", meaning: "automáticamente" }]
  },
  {
    id: 25,
    section: "Choose the correct word",
    type: "word_choice",
    question: "The machine parts are packed in a ____ for protection.",
    options: ["wooden crate", "profit", "duty free"],
    correct: 0,
    translation: "Las piezas de la máquina están embaladas en una caja de madera para protegerlas.",
    hint: "Busca un tipo de embalaje resistente.",
    explanation: "'Wooden crate' es una caja de madera usada para proteger mercancía.",
    vocabulary: [{ word: "wooden crate", meaning: "caja de madera" }, { word: "protection", meaning: "protección" }]
  },
  {
    id: 26,
    section: "Complete sentences",
    type: "fill_blank",
    question: "We buy packaging materials in ____ to reduce costs.",
    options: ["bulk", "consignee", "expiry date"],
    correct: 0,
    translation: "Compramos materiales de embalaje al por mayor para reducir costes.",
    hint: "La frase habla de comprar mucha cantidad.",
    explanation: "'In bulk' significa al por mayor o en grandes cantidades.",
    vocabulary: [{ word: "bulk", meaning: "al por mayor" }, { word: "reduce costs", meaning: "reducir costes" }]
  },
  {
    id: 27,
    section: "Functional language",
    type: "multiple_choice",
    question: "What should you say in a job interview if you have warehouse experience?",
    options: ["I have experience in order picking and dispatch.", "I am out of stock.", "The price is duty free."],
    correct: 0,
    translation: "¿Qué deberías decir en una entrevista si tienes experiencia en almacén?",
    hint: "Elige una frase que describa experiencia laboral real.",
    explanation: "La primera opción comunica experiencia útil en preparación de pedidos y envíos.",
    vocabulary: [{ word: "order picking", meaning: "preparación de pedidos" }, { word: "dispatch", meaning: "envío / despachar" }]
  },
  {
    id: 28,
    section: "Job interview questions",
    type: "multiple_choice",
    question: "Interviewer: 'Can you drive a forklift?' What is the best answer?",
    options: ["Yes, I have a forklift licence.", "Yes, I am a consignee.", "Yes, it is a retail price."],
    correct: 0,
    translation: "Entrevistador: '¿Sabes conducir una carretilla elevadora?' ¿Cuál es la mejor respuesta?",
    hint: "Responde sobre una habilidad o licencia.",
    explanation: "La mejor respuesta confirma la habilidad y menciona la licencia de carretilla.",
    vocabulary: [{ word: "forklift licence", meaning: "licencia de carretilla elevadora" }, { word: "interviewer", meaning: "entrevistador" }]
  },
  {
    id: 29,
    section: "Job interview questions",
    type: "multiple_choice",
    question: "Interviewer: 'Are you comfortable with paperwork?' What does paperwork mean?",
    options: ["Documents and forms", "Heavy pallets", "A transport company"],
    correct: 0,
    translation: "Entrevistador: '¿Te sientes cómodo con la documentación?' ¿Qué significa paperwork?",
    hint: "Piensa en documentos, formularios y registros.",
    explanation: "'Paperwork' significa documentación, formularios o papeleo.",
    vocabulary: [{ word: "paperwork", meaning: "documentación" }, { word: "comfortable with", meaning: "cómodo con" }]
  },
  {
    id: 30,
    section: "Job interview questions",
    type: "multiple_choice",
    question: "Which answer is best for: 'Why do you want to work in warehousing?'",
    options: ["I like organised work, stock control and preparing orders.", "I am the retail price.", "The container is out of stock."],
    correct: 0,
    translation: "¿Qué respuesta es mejor para: '¿Por qué quieres trabajar en almacén?'",
    hint: "Elige la respuesta que suena profesional en una entrevista.",
    explanation: "La primera opción es natural y profesional: habla de organización, control de stock y preparación de pedidos.",
    vocabulary: [{ word: "warehousing", meaning: "trabajo de almacén" }, { word: "stock control", meaning: "control de stock" }, { word: "preparing orders", meaning: "preparar pedidos" }]
  }
];

const state = {
  mode: "test",
  activeQuestions: questions,
  currentIndex: 0,
  selectedOption: null,
  checked: false,
  correctAnswers: 0,
  wrongAnswers: [],
  sessionWrongIds: new Set()
};

const elements = {
  views: document.querySelectorAll(".view"),
  vocabularyList: document.getElementById("vocabulary-list"),
  questionCard: document.getElementById("question-card"),
  questionSection: document.getElementById("question-section"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  errorsContent: document.getElementById("errors-content"),
  resultsCard: document.getElementById("results-card"),
  totalQuestions: document.getElementById("total-questions"),
  savedErrors: document.getElementById("saved-errors")
};

function getStoredErrorIds() {
  return JSON.parse(localStorage.getItem("englishTrainerErrors") || "[]");
}

function saveStoredErrorIds(ids) {
  localStorage.setItem("englishTrainerErrors", JSON.stringify([...new Set(ids)]));
  updateDashboardNumbers();
}

function updateDashboardNumbers() {
  elements.totalQuestions.textContent = questions.length;
  elements.savedErrors.textContent = getStoredErrorIds().length;
}

function showView(viewName) {
  elements.views.forEach((view) => view.classList.remove("view-active"));
  document.getElementById(`${viewName}-view`).classList.add("view-active");

  if (viewName === "vocabulary") renderVocabulary();
  if (viewName === "test") startTest("test");
  if (viewName === "errors") renderErrorsView();
}

function renderVocabulary() {
  elements.vocabularyList.innerHTML = vocabulary.map((item) => `
    <article class="vocab-card">
      <strong>${item.word}</strong>
      <span>${item.meaning}</span>
      <p>${item.explanation}</p>
      <em>${item.example}</em>
    </article>
  `).join("");
}

function startTest(mode, customQuestions = questions) {
  state.mode = mode;
  state.activeQuestions = customQuestions;
  state.currentIndex = 0;
  state.selectedOption = null;
  state.checked = false;
  state.correctAnswers = 0;
  state.wrongAnswers = [];
  state.sessionWrongIds = new Set();
  renderQuestion();
}

function renderQuestion() {
  const question = state.activeQuestions[state.currentIndex];
  const total = state.activeQuestions.length;
  const number = state.currentIndex + 1;

  elements.questionSection.textContent = question.section;
  elements.progressText.textContent = `Pregunta ${number} de ${total}`;
  elements.progressFill.style.width = `${(number / total) * 100}%`;

  elements.questionCard.innerHTML = `
    <div class="question-meta">
      <span class="tag">${question.section}</span>
      <span class="tag">${question.type.replace("_", " ")}</span>
    </div>
    <h3 class="question-text">${question.question}</h3>
    <ul class="options-list">
      ${question.options.map((option, index) => `
        <li>
          <button class="option-button" type="button" data-option="${index}">${option}</button>
        </li>
      `).join("")}
    </ul>
    <div class="question-actions">
      <button class="utility-button" type="button" data-action="translation">Ver traducción</button>
      <button class="utility-button" type="button" data-action="hint">Pista</button>
    </div>
    <div class="helper-box" id="translation-box" hidden>${question.translation}</div>
    <div class="helper-box" id="hint-box" hidden>${question.hint}</div>
    <div class="feedback-box" id="feedback-box" hidden></div>
    <div class="keyword-list" id="keyword-list" hidden></div>
    <div class="question-actions">
      <button class="check-button" type="button" data-action="check" disabled>Comprobar</button>
      <button class="next-button" type="button" data-action="next" hidden>Siguiente</button>
    </div>
  `;
}

function selectOption(optionIndex) {
  if (state.checked) return;
  state.selectedOption = optionIndex;

  document.querySelectorAll(".option-button").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.option) === optionIndex);
  });

  document.querySelector('[data-action="check"]').disabled = false;
}

function checkAnswer() {
  if (state.selectedOption === null || state.checked) return;

  const question = state.activeQuestions[state.currentIndex];
  const isCorrect = state.selectedOption === question.correct;
  state.checked = true;

  if (isCorrect) {
    state.correctAnswers += 1;
    if (state.mode === "errors") {
      removeError(question.id);
    }
  } else {
    state.wrongAnswers.push(question);
    state.sessionWrongIds.add(question.id);
    addError(question.id);
  }

  document.querySelectorAll(".option-button").forEach((button) => {
    const index = Number(button.dataset.option);
    button.disabled = true;
    if (index === question.correct) button.classList.add("correct");
    if (index === state.selectedOption && !isCorrect) button.classList.add("incorrect");
  });

  renderFeedback(question, isCorrect);
}

function renderFeedback(question, isCorrect) {
  const feedbackBox = document.getElementById("feedback-box");
  const keywordList = document.getElementById("keyword-list");
  const correctAnswer = question.options[question.correct];

  feedbackBox.hidden = false;
  feedbackBox.className = `feedback-box ${isCorrect ? "correct" : "incorrect"}`;
  feedbackBox.innerHTML = `
    <span class="feedback-title">${isCorrect ? "Correcto" : "Incorrecto"}</span>
    ${isCorrect ? "" : `<p><strong>Respuesta correcta:</strong> ${correctAnswer}</p>`}
    <p>${question.explanation}</p>
  `;

  keywordList.hidden = false;
  keywordList.innerHTML = `
    <strong>Vocabulario clave</strong>
    ${question.vocabulary.map((item) => `
      <div class="keyword-item">
        <strong>${item.word}</strong>
        <span>${item.meaning}</span>
      </div>
    `).join("")}
  `;

  document.querySelector('[data-action="check"]').hidden = true;
  document.querySelector('[data-action="next"]').hidden = false;
}

function nextQuestion() {
  if (state.currentIndex < state.activeQuestions.length - 1) {
    state.currentIndex += 1;
    state.selectedOption = null;
    state.checked = false;
    renderQuestion();
    return;
  }

  renderResults();
}

function renderResults() {
  const total = state.activeQuestions.length;
  const wrongCount = state.wrongAnswers.length;
  const percentage = Math.round((state.correctAnswers / total) * 100);
  const message = getResultMessage(percentage);
  const reviewWords = getReviewWords();

  elements.views.forEach((view) => view.classList.remove("view-active"));
  document.getElementById("results-view").classList.add("view-active");

  elements.resultsCard.innerHTML = `
    <span class="eyebrow">Resultado final</span>
    <h2 id="results-title">${message}</h2>
    <div class="score-number">${percentage}%</div>
    <div class="stats-grid">
      <div class="stat-card"><strong>${state.correctAnswers}</strong><span>Aciertos</span></div>
      <div class="stat-card"><strong>${wrongCount}</strong><span>Fallos</span></div>
      <div class="stat-card"><strong>${total}</strong><span>Preguntas</span></div>
    </div>
    <h3>Palabras que debes repasar</h3>
    ${reviewWords.length
      ? `<ul class="review-words">${reviewWords.map((word) => `<li>${word}</li>`).join("")}</ul>`
      : "<p>No tienes palabras pendientes de esta ronda.</p>"
    }
    <div class="hero-actions">
      <button class="primary-button" type="button" data-view="test">Repetir test</button>
      <button class="secondary-button" type="button" data-view="errors">Repasar errores</button>
      <button class="ghost-button" type="button" data-view="vocabulary">Ver vocabulario</button>
    </div>
  `;
}

function getResultMessage(percentage) {
  if (percentage >= 90) return "Excelente";
  if (percentage >= 70) return "Muy bien";
  if (percentage >= 50) return "Vas mejorando";
  return "Necesitas repasar";
}

function getReviewWords() {
  const words = state.wrongAnswers.flatMap((question) => question.vocabulary.map((item) => `${item.word} = ${item.meaning}`));
  return [...new Set(words)];
}

function addError(questionId) {
  saveStoredErrorIds([...getStoredErrorIds(), questionId]);
}

function removeError(questionId) {
  saveStoredErrorIds(getStoredErrorIds().filter((id) => id !== questionId));
}

function renderErrorsView() {
  const errorIds = getStoredErrorIds();
  const errorQuestions = questions.filter((question) => errorIds.includes(question.id));

  if (!errorQuestions.length) {
    elements.errorsContent.innerHTML = `
      <div class="empty-state">
        <h3>No hay errores guardados</h3>
        <p>Cuando falles una pregunta en el test, aparecerá aquí para que puedas repetirla.</p>
        <button class="primary-button" type="button" data-view="test">Empezar práctica</button>
      </div>
    `;
    return;
  }

  elements.errorsContent.innerHTML = `
    <div class="empty-state">
      <h3>${errorQuestions.length} pregunta${errorQuestions.length === 1 ? "" : "s"} para repasar</h3>
      <p>Este modo solo muestra tus fallos. Si aciertas, la pregunta se elimina de errores.</p>
      <button class="primary-button" type="button" data-action="start-errors">Empezar repaso</button>
    </div>
  `;
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const optionButton = event.target.closest("[data-option]");
  const actionButton = event.target.closest("[data-action]");

  if (viewButton) {
    showView(viewButton.dataset.view);
    return;
  }

  if (optionButton) {
    selectOption(Number(optionButton.dataset.option));
    return;
  }

  if (!actionButton) return;

  const action = actionButton.dataset.action;
  if (action === "translation") document.getElementById("translation-box").hidden = false;
  if (action === "hint") document.getElementById("hint-box").hidden = false;
  if (action === "check") checkAnswer();
  if (action === "next") nextQuestion();
  if (action === "start-errors") {
    const errorIds = getStoredErrorIds();
    const errorQuestions = questions.filter((question) => errorIds.includes(question.id));
    showView("test");
    startTest("errors", errorQuestions);
  }
});

updateDashboardNumbers();
renderVocabulary();
