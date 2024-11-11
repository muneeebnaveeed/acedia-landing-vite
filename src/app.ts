function toggleNavbar(navbar: 'desktop' | 'mobile'): void {
  const mobileNavbar = document.querySelector('nav.is--mobile');
  if (!mobileNavbar || !(mobileNavbar instanceof HTMLElement))
    throw new Error('mobile navbar not found');

  mobileNavbar.dataset.open = navbar === 'mobile' ? 'true' : 'false';
  document.body.dataset.navbar = navbar;
}

function highlightCurrentNavItem(): void {
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const links = document.querySelectorAll('a.mobile-navbar-item');

  links.forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) throw new Error('Invalid mobile navbar menu item');

    const linkPath = link.pathname;
    const linkHash = link.hash;

    const isHighlighted = linkPath === currentPath && linkHash === currentHash;

    link.dataset.highlight = isHighlighted ? 'true' : 'false';
  });
}

function updateCopyrightDate(): void {
  const htmlElement = document.getElementById('auto-date');
  if (!htmlElement) throw new Error('Copyright date not found');
  htmlElement.innerHTML = new Date().getFullYear().toString();
}

function main(): void {
  highlightCurrentNavItem();
  updateCopyrightDate();
}

main();

window.toggleNavbar = toggleNavbar;
