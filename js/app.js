document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('#main-nav a');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    // Route Handler
    function handleRoute() {
        // Get hash or default to home
        let hash = window.location.hash.slice(1) || 'home';

        // Normalize hash (remove query params if any)
        hash = hash.split('?')[0];

        // Validate route exists
        if (!Views[hash]) {
            hash = 'home';
        }

        // Update View
        renderView(hash);

        // Update Navigation State
        updateNavState(hash);
    }

    // Render View Function
    function renderView(viewName) {
        // Simple fade out/in effect
        mainContent.style.opacity = '0';

        setTimeout(() => {
            mainContent.innerHTML = Views[viewName]();
            window.scrollTo(0, 0); // Reset scroll
            mainContent.style.opacity = '1';
        }, 200);
    }

    // Update Navigation UI
    function updateNavState(activeHash) {
        navLinks.forEach(link => {
            const page = link.getAttribute('data-page');
            if (page === activeHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Close mobile menu if open
        mainNav.classList.remove('open');
    }

    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('open');
    });

    // Event Listeners
    window.addEventListener('hashchange', handleRoute);

    // Initial Load
    handleRoute();
});
