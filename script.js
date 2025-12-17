var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".shortcut-links");
var container = document.querySelector(".container");

menuIcon.onclick = function() {
    sidebar.classList.toggle("active");
    // Optional: adjust container padding when sidebar opens
    if (window.innerWidth <= 768) {
        container.classList.toggle("sidebar-open");
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        var isClickInsideSidebar = sidebar.contains(event.target);
        var isClickOnMenu = menuIcon.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnMenu && sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
            container.classList.remove("sidebar-open");
        }
    }
});