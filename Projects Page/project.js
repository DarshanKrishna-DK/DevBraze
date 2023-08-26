/*----------------Scroll Section Active Link Updation----------------*/

$(document).ready(function(){
    $('a').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
});


/*----------------Section Slide----------------*/
const navLinks = document.querySelectorAll('nav a');
const projectsSlider = document.querySelector('.projects-slider');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('data-target'));
        const targetIndex = Array.from(target.parentElement.children).indexOf(target);

        const translateXValue = -targetIndex * 33.33;
        projectsSlider.style.transform = `translateX(${translateXValue}%)`;
    });
});


