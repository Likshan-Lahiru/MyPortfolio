/*
const menuBtn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.navbar');
const navContainer = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});
*/



/*========================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*========================================*/
let section = document.querySelectorAll('section');
let navLikns = document.querySelectorAll('header nav a');

window.onscroll= () =>{
    section.forEach(sec =>{
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top>= offset && top < offset + height){
            navLikns.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href='+id+']').classList.add('active');
            })
        }
    })
}
