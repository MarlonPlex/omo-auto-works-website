(() => {
const track = document.getElementById('services-track');
const dots  = document.querySelectorAll('#services-dots button');
const total = dots.length;
let current = 0;

function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => {
    dot.classList.toggle('bg-neutral-500', i === current);
    dot.classList.toggle('bg-transparent', i !== current);
    });
}

document.getElementById('services-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('services-next').addEventListener('click', () => goTo(current + 1));
dots.forEach(dot => dot.addEventListener('click', () => goTo(+dot.dataset.index)));
})();
