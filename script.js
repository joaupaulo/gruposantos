const itensmenu = document.querySelectorAll('.menu a[href^="#"]');
itensmenu.forEach(item => {
    item.addEventListener('click', scroll );
})


function scroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sec = document.querySelector(href);
    const topo = sec.offsetTop;

    window.scrollTo({
        top : topo,
        behavior:'smooth',
    });1
}