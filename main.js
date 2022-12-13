const BTN = document.createElement("button");
BTN.textContent = "Cliquez ici pour afficher Hello World";

document.body.appendChild(BTN);

BTN.addEventListener("click", (e) => {
  alert("Hello World");
});

const BTN_0 = document.createElement("button");
BTN_0.textContent = "Cliquez ici pour afficher votre nom";

document.body.appendChild(BTN_0);

BTN_0.addEventListener("click", (e) => {
  let your_name = prompt("Quel est votre nom ?");
  while (!confirm(your_name + " est bien votre nom ?")) {
    your_name = prompt("Quel est VRAIMENT votre nom ?");
  }
  alert("Vous vous appelez " + your_name);
});

document.body.style.display = "flex";
// document.body.style.alignItems = "center";
document.body.style.height = "100vh";
BTN.style.margin = "10px";
BTN.style.width = "100%";
BTN.style.height = "90%";
BTN_0.style.margin = "10px";
BTN_0.style.width = "100%";
BTN_0.style.height = "90%";
