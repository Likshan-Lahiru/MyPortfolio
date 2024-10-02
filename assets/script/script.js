


/*========================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*========================================*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);
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

/*========================================*/
 menuIcon.classList.remove('fa-x');
 navbar.classList.remove('active');



/*========================================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 200

});

ScrollReveal().reveal('.home-text, .topic', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-me, .project-box ', { origin: 'bottom' });
/*ScrollReveal().reveal('.home-img, .about-me, .edu-des ', { origin: 'bottom' });*/
ScrollReveal().reveal(' .project-box, .home-text h1, .test', { origin: 'left' });
ScrollReveal().reveal(' .text-area, .services-box ,#second-div h2 ', { origin: 'right' });

/*========================================*/

const typed =new Typed('.animation-text',{
   strings:['Fontend Developer','Software Engineer','Athlete'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: true,
    loop: true
});



/*===================================*/
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY ) + "px; left: " + (e.pageX - 5) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
});