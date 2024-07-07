document.addEventListener('DOMContentLoaded', () => {
    const orderProjectLink = document.querySelector('.order-project');

    orderProjectLink.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector('#work-together');
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});