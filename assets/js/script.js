document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', event => {
        const targetId = event.target.getAttribute('data-target');
        const content = document.getElementById(targetId);
        
        content.classList.toggle('open');
    });
});