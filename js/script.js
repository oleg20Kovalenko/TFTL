const btn = document.querySelector('.btn');
const menuNav = document.querySelector('.menu-nav');
const circleRotate = document.querySelector('.circle__rotate');

const bg = document.querySelector('.full__cycle_title');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(' + x * 60 + 'px, ' + y * 60 + 'px)';
});

window.addEventListener('scroll', () => {
    circleRotate.style.transform = `rotate(${window.scrollY * 2}deg)`;
})

btn.addEventListener('click', () => {
    menuNav.classList.toggle('menu-nav_active')
})