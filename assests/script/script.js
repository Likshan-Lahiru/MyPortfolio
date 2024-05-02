


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