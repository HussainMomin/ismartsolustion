

// ========================================
//   Initialize Swiper 
// ========================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// ========================================
//   typed js 
// ======================================== 
var typed = new Typed('#element', {
    strings: ['popular', 'awesome', 'incredible'],
    typeSpeed: 50,
});


// ========================================
//  animated counter number
// ========================================

   const counterNum = document.querySelectorAll(".counter-numbers");

   const speed = 200;

   counterNum.forEach((curElem) => {
     const updateNumber = () => {
       const targetNumber = parseInt(curElem.dataset.number);
       // console.log(targetNumber);
       const initialNum = parseInt(curElem.innerText);
       // console.log(initialNum);

       const incrementNumber = Math.trunc(targetNumber / speed);
       // console.log(incrementNumber);

       if (initialNum < targetNumber) {
         curElem.innerText = `${initialNum + incrementNumber}+`;
         setTimeout(updateNumber, 10);
       }
     };

     updateNumber();
   });



