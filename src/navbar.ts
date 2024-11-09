console.log(window.location.pathname, window.location.hash);

const links = document.querySelectorAll('a');
console.log(links);

let activeLink = document.getElementById(window.location.pathname + window.location.hash);
if (!activeLink) {
  activeLink = document.getElementById(window.location.pathname);
}
if (activeLink) {
  activeLink.classList.add('text-[#A2FF00]');
  activeLink.classList.add('font-bold');
  activeLink.classList.add('text-[30px]');
  activeLink.classList.remove('text-[#6C7361]');
}
console.log(window.location.pathname + window.location.hash, activeLink);
