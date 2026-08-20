////////////////////////////////////////////////////////
// script.js
////////////////////////////////////////////////////////

const navEl = document.querySelector(".nav");
const hamburgerEl = document.querySelector(".hamburger");

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open");
  hamburgerEl.classList.toggle("hamburger--open");
});

navEl.addEventListener("click", () => {
  navEl.classList.remove("nav--open");
  hamburgerEl.classList.remove("hamburger--open");
});

const links = document.querySelectorAll("a[data-modal]");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const whichModal = e.target.dataset.modal; // Accesses data-my-attribute
    openModalWindow(whichModal);
  });
});

const modalDialogs = document.querySelectorAll(".modal-dialog");

modalDialogs.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal-dialog")) {
      element.close();
    }
  });
});

const elementsCloseIcon = document.querySelectorAll(".close-icon");

elementsCloseIcon.forEach((element) => {
  element.addEventListener("click", () => {
    modalDialogs.forEach((element) => {
      element.close();
    });
  });
});

const elementsCloseButton = document.querySelectorAll(".dialog-close-button");

elementsCloseButton.forEach((element) => {
  element.addEventListener("click", () => {
    modalDialogs.forEach((element) => {
      element.close();
    });
  });
});

function openModalWindow(whichWindow) {
  switch (whichWindow) {
    case "guitar-related-brands":
      document.getElementById("modal-guitar-related-brands").showModal();
      break;

    case "virtual-trade-show-benefits":
      document.getElementById("modal-virtual-trade-show-benefits").showModal();
      break;

    case "industry-specific-directory":
      document.getElementById("modal-industry-specific-directory").showModal();
      break;

    case "allguitar-categories":
      document.getElementById("modal-categories").showModal();
      break;

    case "major-brands":
      document.getElementById("modal-major-brands").showModal();
      break;

    default:
      document.getElementById("modal-guitar-related-brands").showModal();
      break;
  }
}

let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollFunction();
};

document.querySelector("#scrollTopBtn")?.addEventListener("click", topFunction);

document
  .querySelector("#scrollTopBtn")
  ?.addEventListener("touchstart", topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
