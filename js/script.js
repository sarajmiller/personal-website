const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');
const menuList = document.querySelector('.menu-list'); // list of nav links\


menuButton.addEventListener('click', () => {

    sidebar.classList.toggle('show'); // Toggle visibility class
    overlay.classList.toggle('active'); // Set overlay to active
});

// When we click on the overlay, we want the sidebar to disappear
overlay.addEventListener('click', () => {
    sidebar.classList.remove('show'); // Hide sidebar
    overlay.classList.remove('active'); // Hide overlay
});

// Function that moves navbar to sidebar if we're in mobile
function moveMenuToSidebar() {
    if (window.innerWidth <= 768) { // Mobile mode
        if (!sidebar.contains(menuList)) { // Move only if it's not already in the sidebar
            sidebar.appendChild(menuList);
        }
    } else { // Desktop mode
        if (!navbar.contains(menuList)) { // Move only if it's not already in the navbar
            navbar.appendChild(menuList);
        }
    }
}

// Add event listener to handle screen resizing
window.addEventListener('resize', moveMenuToSidebar);

// Run the function on initial load
moveMenuToSidebar();