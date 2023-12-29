// Bottom navbar toggle menu
function NavbarToggle() {
    let navbarItems = document.querySelector('.bottom-navbar-items');
    
    if (navbarItems.classList.contains('open')) {
        navbarItems.classList.remove('open');
        document.querySelector('.bottom-navbar-icon').innerHTML = `<i class="bi bi-list"></i>`;
    } else {
        navbarItems.classList.add('open');
        document.querySelector('.bottom-navbar-icon').innerHTML = `<i class="bi bi-x"></i>`;
    }
}

// Current year for footer
var year = new Date();
document.getElementById('year').innerHTML = year.getFullYear();
