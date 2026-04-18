/**
 * Devay AB — Huvudskript
 * Version: 1.0
 * ─────────────────────────────────────────
 * Hanterar:
 *  1. Mobil hamburger-meny
 *  2. Aktiv nav-länk vid scroll
 *  3. Navbar-skugga vid scroll
 */

(function () {
  'use strict';

  /* ── 1. MOBIL MENY ─────────────────────────────── */

  const toggle = document.querySelector('.nav-toggle');
  const menu   = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
    });

    // Stäng menyn när en länk klickas
    menu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Öppna meny');
      });
    });
  }


  /* ── 2. AKTIV NAV-LÄNK VID SCROLL ─────────────── */

  var sections  = document.querySelectorAll('section[id]');
  var navLinks  = document.querySelectorAll('.nav-link');

  function highlightNav() {
    var scrollY = window.scrollY + 120;

    sections.forEach(function (section) {
      var top    = section.offsetTop;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = '#0079cb';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });


  /* ── 3. NAVBAR-SKUGGA VID SCROLL ───────────────── */

  var nav = document.querySelector('.nav');

  function navShadow() {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }

  if (nav) {
    window.addEventListener('scroll', navShadow, { passive: true });
  }

})();


/* ── 4. SCROLL-ANIMATIONER (Intersection Observer) ─── */

(function () {
  // Kontrollera att webbläsaren stöder IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    // Fallback: visa alla element direkt
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Sluta observera när elementet väl visats
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,       // Triggar när 12% av elementet syns
    rootMargin: '0px 0px -40px 0px'  // Lite marginal nedåt för smidigare känsla
  });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
})();


/* ── 5. GDPR-KARTA ─────────────────────────────────── */

function loadMap() {
  var consent = document.getElementById('map-consent');
  var iframe   = document.getElementById('map-iframe');

  if (consent) consent.style.display = 'none';
  if (iframe) {
    iframe.src = iframe.getAttribute('data-src');
    iframe.style.display = 'block';
  }
}
