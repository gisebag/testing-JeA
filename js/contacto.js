const modal = document.querySelector(".popup");
const btnCierre = document.querySelector(".cerrar");

window.onload = function() {
  let muestraPopup = sessionStorage.getItem("popupVisto");
  if (muestraPopup === "true") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
    sessionStorage.setItem("popupVisto", "true");
  }
}

btnCierre.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

