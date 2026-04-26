/* ============================================
   SAMDENT — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // === MOBILE MENU ===
  const hamburger = document.querySelector('.navbar__hamburger');
  const navMenu = document.querySelector('.navbar__menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('.navbar__link:not(.navbar__dropdown > .navbar__link)').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // === MOBILE DROPDOWN TOGGLE ===
  document.querySelectorAll('.navbar__dropdown > .navbar__link').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        trigger.parentElement.classList.toggle('active');
      }
    });
  });

  // === STICKY NAVBAR ===
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // === HERO SLIDER ===
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  if (slides.length > 0) {
    slideInterval = setInterval(nextSlide, 5000);

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(i);
        slideInterval = setInterval(nextSlide, 5000);
      });
    });
  }

  // === TREATMENT TABS ===
  const tabs = document.querySelectorAll('.treatments__tab');
  const tabPanels = document.querySelectorAll('.treatments__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tabPanels.forEach(panel => {
        panel.style.display = panel.dataset.panel === target ? 'grid' : 'none';
      });
    });
  });

  // === BACK TO TOP ===
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // === COOKIE BANNER ===
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAccept = document.querySelector('.cookie-banner__accept');
  const cookieDecline = document.querySelector('.cookie-banner__decline');

  if (cookieBanner && !localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => cookieBanner.classList.add('show'), 2000);
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.classList.remove('show');
    });
  }

  if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'declined');
      cookieBanner.classList.remove('show');
    });
  }

  // === SMOOTH SCROLL FOR ANCHORS ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // === FORM SUBMISSION (basic frontend) ===
  document.querySelectorAll('form[data-form="enquiry"]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Skickar...';
      btn.disabled = true;
      
      // Simulate submission
      setTimeout(() => {
        btn.textContent = 'Tack! Vi hör av oss.';
        btn.style.background = '#4a9a32';
        form.reset();
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  });

});
