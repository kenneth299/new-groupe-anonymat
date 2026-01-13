 const mobileMenu = document.getElementById('mobileMenu');
    const menuContent = document.getElementById('menuContent');
    const overlay = document.getElementById('closeMobileMenu');
    const openBtn = document.getElementById('openMobileMenu');
    const closeBtn = document.getElementById('btnExit');

    function toggleMenu() {
        const isVisible = !mobileMenu.classList.contains('invisible');
        
        if (isVisible) {
            // Fermeture
            menuContent.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('invisible');
            }, 300);
        } else {
            // Ouverture
            mobileMenu.classList.remove('invisible');
            setTimeout(() => {
                menuContent.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0');
            }, 10);
        }
    }

    openBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);


