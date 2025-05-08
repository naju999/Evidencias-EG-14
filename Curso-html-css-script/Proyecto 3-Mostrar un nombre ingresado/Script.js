document.getElementById("mostrar").addEventListener("click",
    function() {
     let nombre = document.getElementById("nombre").value;
     document.getElementById("saludo").textContent = "Hola, " + nombre +
    "!";
    });
    