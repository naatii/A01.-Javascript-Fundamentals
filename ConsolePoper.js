// Elemento donde se mostrarán los mensajes de consola y errores
const consoleDiv = document.getElementById("consoleOutput");

// Redefinir console.log para mostrarlo en el HTML
(function () {
  const originalLog = console.log;
  console.log = function (...args) {
    originalLog.apply(console, args); // Muestra en la consola del navegador
    appendMessageToConsole("log", args);
  };

  const originalError = console.error;
  console.error = function (...args) {
    originalError.apply(console, args); // Muestra en la consola del navegador
    appendMessageToConsole("error", args);
  };
  const originalTable = console.error;
  console.table = function (...args) {
    originalError.apply(console, args); // Muestra en la consola del navegador
    appendMessageToConsole("table", args);
  };
})();

// Capturar errores no contemplados en el JS usando window.onerror
window.onerror = function (message, source, lineno, colno, error) {
  const errorMessage = `Error: ${message} at ${source}:${lineno}:${colno}`;
  appendMessageToConsole("error", [errorMessage]);
  return false; // Para asegurarse de que el error también aparezca en la consola del navegador
};

// Función auxiliar para añadir mensajes al div de salida de consola
function appendMessageToConsole(type, args) {
  const message = document.createElement("p");
  message.textContent = `[${type.toUpperCase()}] ${args.join(" ")}`;
  message.style.color = type === "error" ? "red" : "black"; // Colorear errores en rojo
  consoleDiv.appendChild(message);
}

// Error no previsto (error de ejecución)
function generarError() {
  throw new Error("¡Error inesperado!");
}
