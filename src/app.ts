const menu = document.getElementById('menu')!;
const page = document.getElementById('page')!;

function openMenu(): void {
  menu.classList.remove('hidden');
  menu.classList.add('fixed');
  page.classList.add('h-screen');
}

function closeMenu(): void {
  menu.classList.add('hidden');
  menu.classList.remove('fixed');
  page.classList.remove('h-screen');
}

window.openMenu = openMenu;
window.closeMenu = closeMenu;
