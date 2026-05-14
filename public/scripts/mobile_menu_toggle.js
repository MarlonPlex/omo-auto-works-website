const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-open-icon');
const iconClose = document.getElementById('menu-close-icon');

function openMenu() {
    menu.classList.remove('-translate-y-full');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
}

function closeMenu() {
    menu.classList.add('-translate-y-full');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
}

btn.addEventListener('click', () => {
    menu.classList.contains('-translate-y-full') ? openMenu() : closeMenu();
});