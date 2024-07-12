// var nav = document.querySelector(".navbar");

// document.addEventListener('DOMContentLoaded', function() {
//     // Scroll down sticky navbar script start
//     window.addEventListener('scroll', function() {
//       if (window.scrollY > 20) {
//         nav.classList.toggle(" sticky");
//       } else {
//         nav.classList.toggle(" sticky");
//       }
    
//       // Scroll down sticky navbar script end
  
//       // Scroll up Button script start
//       var scrollUpBtn = document.querySelector(".scroll-up-btn");
//       if (window.scrollY > 500) {
//         scrollUpBtn.classList.add("show");
//       } else {
//         scrollUpBtn.classList.remove("show");
//       }
//       // Scroll up Button script end
  
//       // Fade In & Fade Out Elements on Scroll script start
//       var fadeinElements = document.querySelectorAll(".fadein");
//       fadeinElements.forEach(function(element) {
//         var bottom_of_element = element.offsetTop + element.offsetHeight;
//         var bottom_of_window = window.scrollY + window.innerHeight;
  
//         if (bottom_of_window > bottom_of_element) {
//           element.classList.add("showme");
//         } else {
//           element.classList.remove("showme");
//         }
//       });
//       // Fade In & Fade Out Elements on Scroll script end
//     });
  
//     // Scroll up Button script start
//     var scrollUpBtn = document.querySelector(".scroll-up-btn");
//     scrollUpBtn.addEventListener('click', function() {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     });
//     // Scroll up Button script end
  
//     // Typing animation script start
//     const animationScript = ["Full Stack Developer", "MERN Stack"];
  
//     function startTypingAnimation(selector) {
//       var element = document.querySelector(selector);
//       var currentIndex = 0;
//       var isDeleting = false;
//       var loopTimeout = null;
  
//       function type() {
//         var currentText = animationScript[currentIndex];
//         if (!isDeleting) {
//           element.textContent = currentText.substring(0, element.textContent.length + 1);
//           if (element.textContent === currentText) {
//             isDeleting = true;
//             loopTimeout = setTimeout(type, 2000); // pause before deleting
//           } else {
//             loopTimeout = setTimeout(type, 100);
//           }
//         } else {
//           element.textContent = currentText.substring(0, element.textContent.length - 1);
//           if (element.textContent === '') {
//             isDeleting = false;
//             currentIndex = (currentIndex + 1) % animationScript.length;
//           }
//           loopTimeout = setTimeout(type, 50);
//         }
//       }
  
//       loopTimeout = setTimeout(type, 1000); // start after 1 second
//     }
  
//     startTypingAnimation(".typing");
//     startTypingAnimation(".typing2");
//     // Typing animation script end
  
//     // Toggle menu/navbar script start
//     var menuBtn = document.querySelector(".menu-btn");
//     menuBtn.addEventListener('click', function() {
//       var navbarMenu = document.querySelector(".navbar .menu");
//       navbarMenu.classList.toggle("active");
//       var menuBtnIcon = document.querySelector(".menu-btn i");
//       menuBtnIcon.classList.toggle("active");
//     });
//     // Toggle menu/navbar script end
  
//     // Owl carousel script start
//     var owlCarousel = document.querySelector(".carousel");
//     if (owlCarousel) {
//       var owl = new OwlCarousel(owlCarousel, {
//         margin: 20,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//           0: { items: 1, nav: false },
//           600: { items: 2, nav: false },
//           1000: { items: 3, nav: false }
//         }
//       });
//     }
//     // Owl carousel script end
  
//     // Get the current year
//     var currentYearElement = document.getElementById('year');
//     if (currentYearElement) {
//       currentYearElement.textContent = new Date().getFullYear();
//     }
//   });
  
$(document).ready(function () {
    // Scroll down sticky navbar script start
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
      // Scroll down sticky navbar script end
  
      // Scroll up Button script start
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
      // Scroll up Button script end
  
      // Fade In & Fade Out Elements on Scroll script start
      $(".fadein").each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
        if (bottom_of_window > bottom_of_element) {
          $(this).addClass("showme");
        }
        if (bottom_of_window < bottom_of_element) {
          $(this).removeClass("showme");
        }
      });
      // Fade In & Fade Out Elements on Scroll script end
    });
  
    // Scroll up Button script start
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
    });
    // Scroll up Button script end
  
    // animation Script for display
    const animationScript = ["Full Stack Developer", "MERN Stack Developer"];
  
    // Typing animation script start
    new Typed(".typing", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    new Typed(".typing2", {
      strings: animationScript,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Typing animation script End
  
    // toggle menu/navbar script start
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
    // toggle menu/navbar script end
  
    // owl carousel script start
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: false,
        },
      },
    });
    // owl carousel script end
  });
  
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Set the current year in the span with id "year"
  document.getElementById('year').textContent = currentYear;