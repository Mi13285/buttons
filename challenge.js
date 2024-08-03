const buttons = document.querySelectorAll(".js-button");
console.log(buttons);
function showMassage(event) {
  alert("Кнопка нажата");
}
for (const button of buttons) {
  button.addEventListener("click", showMassage);
}
