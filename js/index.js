// ==========================================
// NEW PRELOADER CODE (Placed at the very top)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById('preloader');
  const logo = document.getElementById('preloader-logo');

  if (preloader && logo) {
    // Step 1: Fade the logo in immediately
    setTimeout(() => {
      logo.classList.add('fade-in');
    }, 100);

    // Step 2: After 1.5 seconds, zoom the logo away and fade it out
    setTimeout(() => {
      logo.classList.remove('fade-in');
      logo.classList.add('zoom-out');
      
      // Step 3: 400ms later, fade the entire background away to reveal the site
      setTimeout(() => {
        preloader.classList.add('fade-away');
      }, 400);

    }, 1600); 
  }
});

// =========================
//  NEW PRELOADER CODE END 
// =========================



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



const follower = document.querySelector('#cursor-follower');
document.addEventListener('mousemove', (e) => {
  follower.style.left = e.clientX + 'px';
  follower.style.top = e.clientY + 'px';
});
