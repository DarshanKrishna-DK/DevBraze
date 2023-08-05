/*----------------Scroll Section Active Link Updation----------------*/

// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () =>{
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop-150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset+height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             })
//         }
//     })
// }

/*----------------Section Slide----------------*/
const navLinks = document.querySelectorAll('nav a');
const projectsSlider = document.querySelector('.projects-slider');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('data-target'));
        const targetIndex = Array.from(target.parentElement.children).indexOf(target);

        const translateXValue = -targetIndex * 33.33; // Adjust based on the number of project containers
        projectsSlider.style.transform = `translateX(${translateXValue}%)`;
    });
});


