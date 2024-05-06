let btn = document.querySelector(".contacts-btn")
let panel = document.querySelector(".slide-panel")
var child = btn.querySelector('.fa-regular');

btn.addEventListener('mouseenter', () => {
    panel.style.width = '100%'
    child.style.transition = 'opacity .1s ease';
    child.style.opacity = '0';
});

btn.addEventListener('mouseleave', () => {
    panel.style.width = '0';
    child.style.transition = 'opacity 1s ease';
    child.style.opacity = '1';
});