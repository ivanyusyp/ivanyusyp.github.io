const btn = document.createElement("button");
btn.setAttribute("class", "change-color-btn");
btn.style.width = "200px";
btn.style.height = "50px";
btn.style.background = "rgba(0,0,0,0.2)"
btn.style.fontSize = "20px";
btn.style.color = "gray";
document.body.appendChild(btn);
btn.innerText = "click";
