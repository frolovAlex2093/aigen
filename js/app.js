// ScrollReveal().reveal(".word-about_item", {
//   delay: 400,
//   duration: 400,
//   interval: 50,
// });

// ScrollReveal().reveal(".about-item-1", {
//   delay: 300,
//   duration: 400,
//   interval: 50,
// });
// ScrollReveal().reveal(".about-item-2", {
//   delay: 123,
//   duration: 400,
//   interval: 50,
// });
// ScrollReveal().reveal(".about-item-3", {
//   delay: 222,
//   duration: 400,
//   interval: 50,
// });
// ScrollReveal().reveal(".about-item-4", {
//   delay: 265,
//   duration: 400,
//   interval: 50,
// });
// ScrollReveal().reveal(".about-item-5", {
//   delay: 188,
//   duration: 400,
//   interval: 50,
// });
// ScrollReveal().reveal(".about-item-6", {
//   delay: 299,
//   duration: 400,
//   interval: 50,
// });



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

const fixedBlock = document.querySelector(".sticky");
const contentBlock = document.querySelector(".word");

window.addEventListener("scroll", () => {
  if (contentBlock.getBoundingClientRect().top <= fixedBlock.offsetHeight + document.documentElement.clientWidth * 11 / 100) {
    fixedBlock.classList.remove("animate__animated");
    fixedBlock.classList.remove("animate__fadeInUp");
    fixedBlock.classList.add("animate__animated");
    fixedBlock.classList.add("animate__fadeOutUp");
  } else {
    fixedBlock.classList.remove("animate__animated");
    fixedBlock.classList.remove("animate__fadeOutUp");
    fixedBlock.classList.add("animate__animated");
    fixedBlock.classList.add("animate__fadeInUp");
  }
});


// const blocks = document.querySelectorAll('.word-about_item');
// const visibilityZone = window.innerHeight;

// let count = 0;

// function handleScroll() {
//   blocks.forEach(block => {
//     const blockTop = block.getBoundingClientRect().top;
//     const blockBottom = block.getBoundingClientRect().bottom;

//     if (blockBottom > 0 && blockTop < visibilityZone && !block.classList.contains('visible')) {
//       setTimeout(() => {
//         block.classList.add('animate__slideInUp');
//         count++;

//         if (count >= 6) {
//           window.removeEventListener('scroll', handleScroll);
//           shuffleBlocks();
//         }
//       }, 2000); // 2-second delay
//     }
//   });
// }

// window.addEventListener('scroll', handleScroll);

// function shuffleBlocks() {
//   for (let i = blocks.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
//   }

//   blocks.forEach((block, index) => {
//     block.style.top = (index * 120) + 'px'; // adjust the positioning as needed
//   });
// }