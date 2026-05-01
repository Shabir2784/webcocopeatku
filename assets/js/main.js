/* =============================================
   COCOHARVEST EXPORTS — Global JavaScript
============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ─── Navbar Scroll Effect ─── */
  const navbar = document.querySelector('.navbar-main');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  /* ─── Active Nav Link ─── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link-custom').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ─── Scroll Reveal ─── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));

  /* ─── Counter Animation ─── */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1800;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current).toLocaleString() + suffix;
        }, 16);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => counterObs.observe(el));

  /* ─── Smooth anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ─── Gallery Lightbox (simple) ─── */
  const galleryItems = document.querySelectorAll('.gallery-item img');
  if (galleryItems.length) {
    // Create lightbox DOM
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.innerHTML = `
      <div class="lb-overlay"></div>
      <div class="lb-content">
        <button class="lb-close">&times;</button>
        <img src="" alt="" class="lb-img">
      </div>`;
    document.body.appendChild(lb);

    const lbImg = lb.querySelector('.lb-img');
    const lbClose = lb.querySelector('.lb-close');
    const lbOverlay = lb.querySelector('.lb-overlay');

    galleryItems.forEach(img => {
      img.parentElement.style.cursor = 'pointer';
      img.parentElement.addEventListener('click', () => {
        lbImg.src = img.src;
        lb.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    [lbClose, lbOverlay].forEach(el => el.addEventListener('click', () => {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        lb.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
