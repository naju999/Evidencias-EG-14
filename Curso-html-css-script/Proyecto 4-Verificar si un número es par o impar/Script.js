document.getElementById("verificar").addEventListener("click",
function() {
 let numero = parseInt(document.getElementById("numero").value);
 let mensaje = (numero % 2 === 0) ? "Es par" : "Es impar";
 document.getElementById("resultado").textContent = mensaje;
});
