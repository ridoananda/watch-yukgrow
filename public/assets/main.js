// YukGrow Watch — interaction layer

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
}
if (closeBtn && mobileMenu) {
  closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
}

// Filter accordion (collection page)
document.querySelectorAll('[data-accordion]').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const icon = btn.querySelector('[data-icon]');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.classList.toggle('hidden');
    if (icon) icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
  });
});

// Gallery thumbnail switcher (product page)
const mainImage = document.getElementById('mainProductImage');
document.querySelectorAll('.gallery-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    if (mainImage) {
      const src = thumb.getAttribute('data-src') || thumb.querySelector('img')?.src;
      if (src) mainImage.src = src;
    }
  });
});

// WhatsApp deep link with product context (product page)
document.querySelectorAll('[data-wa-product]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const product = btn.getAttribute('data-wa-product') || 'jam tangan';
    const ref = btn.getAttribute('data-wa-ref') || '';
    const price = btn.getAttribute('data-wa-price') || '';
    const url = window.location.href;
    const text = encodeURIComponent(
      `Halo YukGrow Watch, saya tertarik dengan:\n\n${product}\n${ref ? `Ref: ${ref}\n` : ''}${price ? `Price: ${price}\n` : ''}\nLink: ${url}\n\nBoleh info lebih lanjut?`
    );
    window.open(`https://wa.me/628211097151?text=${text}`, '_blank');
  });
});

// Navbar scroll state
const nav = document.getElementById('nav');
if (nav) {
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.classList.add('shadow-2xl');
    } else {
      nav.classList.remove('shadow-2xl');
    }
    lastY = y;
  });
}
