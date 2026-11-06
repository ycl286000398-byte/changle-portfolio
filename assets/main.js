(function () {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Highlight current section in nav
  const sections = ['about', 'projects', 'awards', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  const navAnchors = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

  const setActive = () => {
    const y = window.scrollY + 120;
    let current = null;
    for (const s of sections) {
      if (s.offsetTop <= y) current = s.id;
    }
    navAnchors.forEach((a) => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', current && href === '#' + current);
    });
  };
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
})();
