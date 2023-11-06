function appendValue(value) {
  const resultat = document.getElementById("resultat");
  if (resultat.value === "0" || resultat.value === "Erreur") {
    resultat.value = value;
  } else {
    resultat.value += value;
  }
}

function clearResult() {
  document.getElementById("resultat").value = "";
}

function deleteChar() {
  const resultat = document.getElementById("resultat");
  resultat.value = resultat.value.slice(0, -1);
}

function calculate() {
  try {
    const resultat = document.getElementById("resultat");
    resultat.value = eval(resultat.value);
  } catch (error) {
    document.getElementById("resultat").value = "Erreur";
  }
}

// Remplacer le comportement du bouton '='
document.querySelector(".egal").addEventListener("click", calculate);
