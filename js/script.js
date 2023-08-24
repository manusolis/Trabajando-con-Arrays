document.addEventListener("DOMContentLoaded", (e) => {
  const strangeArray = [
    "Zero",
    function () {
      alert("Hola soy una función en un array");
    },
    22,
    null,
    "Go lang",
    undefined,
    "Cobol",
    "I'm programmer",
    -2000,
    "Hello world",
    `One is ${1}`,
    { name: "Info", lastname: "last info" },
    () => true,
    function showNumbers() {
      return "1, 2, 3, 4";
    },
    "Another String",
    ["Hola mundo!"],
    "b is a letter",
    "JavaScript",
  ];

  // De esta manera filtramos elementos de tipo string
  const stringElements = strangeArray.filter((element) => typeof element === "string");

  // En esta linea ordenamos los elementos alfabéticamente
  stringElements.sort();

  // Finalemnte mostramos los elementos en el documento HTML
  const container = document.getElementById("list");
  stringElements.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
});
