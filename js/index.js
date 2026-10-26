// ==========================================
// NEW PRELOADER CODE (Placed at the very top)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  //  PRELOADER CODE 
  // =========================
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

  // =========================
  //  ELEMENT SELECTION 
  // =========================
  // Moved inside DOMContentLoaded so variables never return 'null' if the script loads early
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navlinks = document.querySelectorAll('header nav a');
  const follower = document.querySelector('#cursor-follower');

  // =========================
  //  SCROLL SPY (NAV HIGHLIGHT)
  // =========================
  window.onscroll = () => {
      let top = window.scrollY;

      sections.forEach(sec => {
          let offset = sec.offsetTop - 150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');

          // Ensure section has an ID before checking it
          if (id && top >= offset && top < offset + height) {
              // 1. Instantly remove 'active' from all links
              navlinks.forEach(link => link.classList.remove('active'));
              
              // 2. Select the parent/anchor correctly without the broken child space element
              let activeLink = document.querySelector('header nav a[href*=' + id + ']');
              if (activeLink) {
                  activeLink.classList.add('active');
              }
          }
      });
  };

  // =========================
  //  MOBILE MENU TOGGLE
  // =========================
  if (menuIcon && navbar) {
      menuIcon.onclick = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
      };
  }

  // =========================
  //  CURSOR FOLLOWER
  // =========================
  if (follower) {
      document.addEventListener('mousemove', (e) => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
      });
  }
});
