import React, { useEffect } from 'react';

export default function NavbarScript() {
    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');
        const navLinks = navbar.querySelectorAll('a');

        const handleToggle = () => {
            navbar.classList.toggle('active');
        };

        const handleClose = () => {
            navbar.classList.remove('active');
        };

        menuToggle.addEventListener('click', handleToggle);
        navLinks.forEach(link => link.addEventListener('click', handleClose));

        return () => {
            menuToggle.removeEventListener('click', handleToggle);
            navLinks.forEach(link => link.removeEventListener('click', handleClose));
        };
    }, []);

    return null;
}


