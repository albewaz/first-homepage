const usunNaglowek = () => {
  
    const przycisk = document.querySelector(".button");
    const naglowek = document.querySelector(".header");
  
    przycisk.addEventListener("click", () => {
      naglowek.remove();
    });
  
  }
  
  usunNaglowek();