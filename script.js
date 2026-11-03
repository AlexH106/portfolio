// Lightweight navigation only — all portfolio content is accessible without JavaScript.
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNavigation');

if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
