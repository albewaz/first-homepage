{
const init = () => {
  removeHeader();
}

const removeHeader = () => {
  const przycisk = document.querySelector(".button");
  const naglowek = document.querySelector(".header");

  przycisk.addEventListener("click", () => {
    naglowek.remove();
  });
}

init();
}