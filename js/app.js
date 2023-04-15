const swiper = new Swiper(".swiper", {
  speed: 1000,
  spaceBetween: 100,
  effect: "fade",
  loop: true,

  autoplay: {
    delay: 2000,
  },
});

const swiper2 = new Swiper(".swiper_2", {
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 1.218,
  //slidesPerGroup: 1,
  //effect: "fade",
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 2000,
  // },
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
  fixedBlock2.classList.remove("animate__animated");
    fixedBlock2.classList.remove("animate__fadeInUp");
  fixedBlock1.classList.remove("animate__animated");
    fixedBlock1.classList.remove("animate__fadeInUp");
    fixedBlockHeader.classList.remove("animate__animated");
    fixedBlockHeader.classList.remove("animate__fadeInUp");

// меньше ниже
//первый блок 50%
  if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 20 / 100) {
    fixedBlock2.style.opacity = "50%";
  } else {
    fixedBlock2.style.opacity = "100%";
  } 

//первый блок 0
   if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 15 / 100) {
    
     fixedBlock2.style.opacity = "0%";
   } else if(contentBlock.getBoundingClientRect().top > fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 15 / 100 && contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 17 / 100) {
    fixedBlock2.style.opacity = "50%";
   }

// второй блок 50
   if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 12 / 100) {
    fixedBlock1.style.opacity = "50%";
    
  } else {
     fixedBlock1.style.opacity = "100%";
  }

//второй блок 0
  if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 10 / 100) {
    fixedBlock1.style.opacity = "0%";
    
  } else if(contentBlock.getBoundingClientRect().top > fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 10 / 100 && contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 12 / 100) {
     fixedBlock1.style.opacity = "50%";

  }
  
  //хедер 0
  if (contentBlock.getBoundingClientRect().top <= fixedBlockHeader.offsetHeight + document.documentElement.clientWidth * 2 / 100) {
    fixedBlockHeader.style.opacity = "0%";
  } else {
    fixedBlockHeader.style.opacity = "100%";

  }
});

