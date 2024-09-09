// Use JavaScript to handle dropdown behavior
document.addEventListener("DOMContentLoaded", function () {
    // Get all dropdown triggers
    var dropdownTriggers = document.querySelectorAll(".nav-item.dropdown");
    
    // Add event listeners to each dropdown trigger
    dropdownTriggers.forEach(function (trigger) {
        trigger.addEventListener("mouseover", function () {
        // Close all other open dropdowns
        closeAllDropdowns();
    
        // Open the current dropdown
        this.querySelector(".dropdown-menu").style.display = "block";
        });
    
        // Close the dropdown when mouse leaves the trigger
        trigger.addEventListener("mouseleave", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
        });
    });
    
    // Close all dropdowns when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-item.dropdown")) {
        closeAllDropdowns();
        }
    });
    
    // Function to close all dropdowns
    function closeAllDropdowns() {
        dropdownTriggers.forEach(function (trigger) {
        trigger.querySelector(".dropdown-menu").style.display = "none";
        });
    }
    });
    
    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", function () {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
    
        if (scrollTop > lastScrollTop && scrollTop > 50) {
            // Downscroll and not at the top
            navbar.style.top = "-90px";
        } else {
            // Upscroll or at top
            navbar.style.top = "0";
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const navbarToggler = document.querySelector(".navbar-toggler");
        navbarToggler.addEventListener("click", function () {
            navbarToggler.classList.toggle('custom-toggler')
        });
    }); 
    