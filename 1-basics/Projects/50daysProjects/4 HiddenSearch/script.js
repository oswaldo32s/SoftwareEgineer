const searchButtom = document.getElementById("boton");
const search = document.querySelector("main");

searchButtom.addEventListener("click", () => {
  search.classList.toggle("active");
});
