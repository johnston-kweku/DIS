function loadComponent(id, path) {
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load the navbar
document.addEventListener("DOMContentLoaded", () => {
    loadComponent('navbar-placeholder', '/components/navbar.html');
});
