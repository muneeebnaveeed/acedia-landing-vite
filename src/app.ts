function toggleNavbar(navbar: 'desktop' | 'mobile'): void {
  const mobileNavbar = document.querySelector('nav.is--mobile');
  if (!mobileNavbar || !(mobileNavbar instanceof HTMLElement))
    throw new Error('mobile navbar not found');

  mobileNavbar.dataset.open = navbar === 'mobile' ? 'true' : 'false';
  document.body.dataset.navbar = navbar;
}

window.toggleNavbar = toggleNavbar;
