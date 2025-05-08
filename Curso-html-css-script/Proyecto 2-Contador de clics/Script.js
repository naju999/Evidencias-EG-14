let conteo = 0;
document.getElementById("contador").addEventListener("click",
function() {
 conteo++;
 document.getElementById("resultado").textContent = "Clics: " +
conteo;
});