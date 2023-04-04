const swiper = new Swiper(".swiper", {
  speed: 1000,
  spaceBetween: 100,
  effect: "fade",
  loop: true,

  autoplay: {
    delay: 2000,
  },
});

wow = new WOW({
  boxClass: "wow",
  animateClass: "animate__slideInUp",
  offset: 0,
  mobile: true,
  live: true,
});
wow.init();

const fixedBlock1 = document.querySelector(".sticky_1");
const fixedBlock2 = document.querySelector(".sticky_2");
const fixedBlockHeader = document.querySelector(".header");
const contentBlock = document.querySelector(".word");

window.addEventListener("scroll", () => {
  if (contentBlock.getBoundingClientRect().top <= fixedBlock2.offsetHeight + document.documentElement.clientWidth * 16.6 / 100) {
    fixedBlock2.classList.remove("animate__animated");
    fixedBlock2.classList.remove("animate__fadeInUp");
    fixedBlock2.classList.add("animate__animated");
    fixedBlock2.classList.add("animate__fadeOutUp");
  } else {
    fixedBlock2.classList.remove("animate__animated");
    fixedBlock2.classList.remove("animate__fadeOutUp");
    fixedBlock2.classList.add("animate__animated");
    fixedBlock2.classList.add("animate__fadeInUp");
  }
  if (contentBlock.getBoundingClientRect().top <= fixedBlock1.offsetHeight + document.documentElement.clientWidth * 12 / 100) {
    fixedBlock1.classList.remove("animate__animated");
    fixedBlock1.classList.remove("animate__fadeInUp");
    fixedBlock1.classList.add("animate__animated");
    fixedBlock1.classList.add("animate__fadeOutUp");
  } else {
    fixedBlock1.classList.remove("animate__animated");
    fixedBlock1.classList.remove("animate__fadeOutUp");
    fixedBlock1.classList.add("animate__animated");
    fixedBlock1.classList.add("animate__fadeInUp");
  }
  if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 5 / 100) {
    fixedBlockHeader.classList.remove("animate__animated");
    fixedBlockHeader.classList.remove("animate__fadeInUp");
    fixedBlockHeader.classList.add("animate__animated");
    fixedBlockHeader.classList.add("animate__fadeOutUp");
  } else {
    fixedBlockHeader.classList.remove("animate__animated");
    fixedBlockHeader.classList.remove("animate__fadeOutUp");
    fixedBlockHeader.classList.add("animate__animated");
    fixedBlockHeader.classList.add("animate__fadeInUp");
  }
});

