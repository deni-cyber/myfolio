  const toggleBtn = document.getElementById('navToggle');
  const sideNav = document.getElementById('sideNav');

  toggleBtn.addEventListener('click', () => {
    sideNav.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
  if (!sideNav.contains(e.target) && !toggleBtn.contains(e.target)) {
    sideNav.classList.remove('open');
  }
});

