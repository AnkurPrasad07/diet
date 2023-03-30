  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // code for the notice section
  const swiper_notice = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });



// for accordion in the FAQ section
  const accordion_header = document.getElementsByClassName("accordion-item-header")
  const accordion_icon = document.querySelectorAll(".accordion-icon i")
  const accordion_item = document.getElementsByClassName("accordion-item")

  for (let i = 0; i < accordion_item.length; i++) {

    accordion_header[i].addEventListener("click", () => {
      accordion_item[i].classList.toggle("active")
      const icon_plus = "fa-plus"
      const icon_minus = "fa-minus"
      if (accordion_item[i].classList.contains("active")) {
        accordion_icon[i].classList.replace(icon_plus, icon_minus)
      } else {
        accordion_icon[i].classList.replace(icon_minus, icon_plus)
      }

    })
  }

  const nav = document.getElementById("nav")
  const hamburger = document.getElementById("hamburger-icon")

  hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("active-toggle")
  })