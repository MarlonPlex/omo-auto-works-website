(() => {
const ourWorkTrack = document.getElementById('our-work-track');
const ourWorkDots  = document.querySelectorAll('#our-work-dots button');
const total = ourWorkDots.length;
let current = 0;

function goTo(index) {
    current = (index + total) % total;
    // 768px is the tailwind 'md' screen breakpoint
    if (window.screen.width >= 768) {
        // 288px is the width of the slides and 144px is half of that. 
        // Using the calc function for centering the active slide on the track
        ourWorkTrack.style.transform = `translateX(calc((50% - 144px) - ${current * 288}px))`;    
    } else {
        ourWorkTrack.style.transform = `translateX(-${current * 100}%)`;    
    }
    ourWorkDots.forEach((dot, i) => {
    dot.classList.toggle('bg-neutral-500', i === current);
    dot.classList.toggle('bg-transparent', i !== current);
    });
}

window.addEventListener("resize", () => goTo(0));
document.getElementById('our-work-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('our-work-next').addEventListener('click', () => goTo(current + 1));
ourWorkDots.forEach(dot => dot.addEventListener('click', () => goTo(+dot.dataset.index)));
})();
