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
  let theModal = null;

  switch (whichWindow) {
    case "guitar-related-brands":
      //document.getElementById("modal-guitar-related-brands").showModal();
      theModal = document.querySelector("#modal-guitar-related-brands");
      break;

    case "virtual-trade-show-benefits":
      //document.getElementById("modal-virtual-trade-show-benefits").showModal();
      theModal = document.querySelector("#modal-virtual-trade-show-benefits");
      break;

    case "industry-specific-directory":
      //document.getElementById("modal-industry-specific-directory").showModal();
      theModal = document.querySelector("#modal-industry-specific-directory");
      break;

    case "allguitar-categories":
      //document.getElementById("modal-categories").showModal();
      theModal = document.querySelector("#modal-categories");
      break;

    case "major-brands":
      //document.getElementById("modal-major-brands").showModal();
      theModal = document.querySelector("#modal-major-brands");
      break;

    default:
      //document.getElementById("modal-guitar-related-brands").showModal();
      theModal = document.querySelector("#modal-guitar-related-brands");
      break;
  }

  if (theModal) {
    theModal.showModal();
    theModal.scrollTop = 0;
  }
}

window.onscroll = function () {
  scrollFunction();
};

let scrollTopBtn = document.querySelector("#scrollTopBtn");
let scrollTopIcon = document.querySelector("i.bi-arrow-up-square");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", topFunction);
  scrollTopBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    topFunction();
  });

  scrollTopIcon.addEventListener("click", topFunction);
  scrollTopIcon.addEventListener("touchstart", (e) => {
    e.preventDefault();
    topFunction();
  });
}

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
