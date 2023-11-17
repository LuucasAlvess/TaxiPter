const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    clearInterval(interval);

    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    // Defina a cor de fundo diretamente para preto
    button.style.backgroundColor = "var(--text-dark)";

    button.blur(); // Remove o foco do botão
    startInterval(); // Reinicie o intervalo após cada clique
  });
});


function startInterval() {
  interval = setInterval(() => {
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  }, 4000);
}

// Inicie o intervalo pela primeira vez
startInterval();
