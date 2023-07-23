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