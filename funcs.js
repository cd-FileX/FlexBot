document.getElementById('d-l-s').addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.replace('dark-mode', 'light-mode');
        document.getElementById('d-l-s').innerHTML = "&#9790";
    } else {
        document.body.classList.replace('light-mode', 'dark-mode');
        document.getElementById('d-l-s').innerHTML = "&#9728;";
    } 
});
