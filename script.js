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

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('h2', { origin: 'top'});
ScrollReveal().reveal('.projects-container, .container', { origin: 'bottom'});
ScrollReveal().reveal('.contribute-content, .contact form ', { origin: 'left'});
ScrollReveal().reveal('.about-content, #contribute_form', { origin: 'right'});


/*----------------Validation---------------- */

// Email validation function
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
// Mobile number validation function
function validatePhoneNumber(mobileNumber) {
    var mobilePattern = /^[6-9]\d{9}$/; 
    return mobilePattern.test(mobileNumber);
}

// Contact Us Input Validation
function validateForm() {
    var emailInput = document.getElementById("email");
    var mobileNumberInput = document.getElementById("mobileNumber");
  
    if (!validatePhoneNumber(mobileNumberInput.value)) {
      alert("Invalid mobile number!");
      return false;
    }

    if (!validateEmail(emailInput.value)) {
        alert("Invalid email address!");
        return false;
    }
  
    // If both email and mobile number inputs are valid, allow form submission
    return true;
}

// Contribute Input Validation
function validateContributeForm() {
    var mobileNumberInput = document.getElementById("mobileNum");
  
    if (!validatePhoneNumber(mobileNumberInput.value)) {
      alert("Invalid mobile number!");
      return false;
    }
  
    // If mobile number is valid, allow form submission
    return true;
}
