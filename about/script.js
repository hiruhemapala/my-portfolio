/*----------toggle icon nav -bar----------*/
/*----------toggle icon nav-bar----------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = function () {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*----------Scroll Section----------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id') ;
    
        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
    /*----------Stkicky Nav Bar----------*/

    let header = document.querySelector('header .navbar');
    header.classList.toggle('sticky',window.scrollY>100);

     /*----------Remove Toggle Icon and Nav Bar When Click Nav Bar link (Scroll)----------*/
       menuIcon.classList.remove('bx-x');
       navbar.classList.remove('active');
};