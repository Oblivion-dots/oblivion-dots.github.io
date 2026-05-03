const installText = "bash <(curl -sSL https://raw.githubusercontent.com/Oblivion-dots/Oblivion-installer/main/main.sh)";
const el = document.getElementById("type");
const state = document.getElementById("copyState");
let i = 0;

function type() {
  if (i < installText.length) {
    el.textContent += installText[i++];
    setTimeout(type, 20);
  }
}

function copyInstall() {
  navigator.clipboard.writeText(installText);
  state.textContent = " ✓ copied";
  setTimeout(() => state.textContent = "", 1200);
}

window.addEventListener("load", type);
