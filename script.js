const main = document.body;
const p = document.createElement("p");
p.innerText = "Enter the Metaverse";
p.id = "status";
const btn = document.createElement("button");
btn.id = "enterBtn";
btn.innerText = "Enter";
main.append(p, btn);

function replaceWithH1(element) {
  const h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";
  h1.id = "status";
  element.replaceWith(h1);
}

const button = document.getElementById("enterBtn");
const para=document.getElementById("status");
button.addEventListener("click", function () {
  replaceWithH1(para);
});
