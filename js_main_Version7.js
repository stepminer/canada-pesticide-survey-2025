/* main.js
   - Accessible mobile navigation toggle
   - Dynamic year
*/

(function () {
  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggle || !mobileNav) return;

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
    document.body.classList.toggle('nav-open', open);
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(!expanded);
  });

  // Close on link click
  mobileNav.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', () => setOpen(false));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
})();