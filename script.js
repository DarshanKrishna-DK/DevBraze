//Video slider navigation 
const btns=document.querySelectorAll(".nav-btn"); 
const slides = document.querySelectorAll(".video-slide"); 
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){ 
    btns.forEach((btn) => { 
        btn.classList.remove("active"); 
    });

    slides.forEach((slide) => { 
        slide.classList.remove("active");
    });
    contents.forEach((content) => { 
        content.classList.remove("active");
    });

    btns[manual].classList.add("active"); 
    slides[manual].classList.add("active"); 
    contents[manual].classList.add("active");
}

btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
});

/*----------------Automatic Video Slider----------------*/

const videoSlides = document.querySelectorAll('.video-slide');
const navBtns = document.querySelectorAll('.nav-btn');
const videoContent = document.querySelectorAll('.content');
let currentSlide = 0;

function showSlide(index) {
    // Hide all slides and deactivate all nav buttons and content
    videoSlides.forEach((slide) => slide.classList.remove('active'));
    navBtns.forEach((btn) => btn.classList.remove('active'));
    videoContent.forEach((content)=>content.classList.remove('active'));

    // Show the current slide and activate the corresponding nav button and content
    videoSlides[index].classList.add('active');
    navBtns[index].classList.add('active');
    videoContent[index].classList.add('active');
}

  function nextSlide() {
    currentSlide = (currentSlide + 1) % videoSlides.length;
    showSlide(currentSlide);
  }
setInterval(nextSlide, 8000);


/*----------------Scroll Reveal----------------*/

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// })

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
