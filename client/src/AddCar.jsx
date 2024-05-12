import React, { useState, useEffect } from 'react';
import Swiper from 'swiper'; // Assuming you have swiper installed
import mixitup from 'mixitup'; // Assuming you have mixitup installed
import ScrollReveal from 'scrollreveal'; // Assuming you have scrollreveal installed
import './AddCar.css';
import './main.js';
function AddCar() {
    /*=============== SHOW MENU ===============*/
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const linkAction = () => {
        setShowMenu(false);
    }
    /*=============== CHANGE BACKGROUND HEADER ===============*/
    useEffect(() => {
        function scrollHeader(){
            const header = document.getElementById('header')
            // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
            if(window.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
        }
        function scrollUp(){
            const scrollUp = document.getElementById('scroll-up');
            // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
            if(window.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
        }
        window.addEventListener('scroll', scrollUp)
        window.addEventListener('scroll', scrollHeader)
        /* Link active featured */
        const linkFeatured = document.querySelectorAll('.featured__item')
        function activeFeatured(){
            linkFeatured.forEach(l=> l.classList.remove('active-featured'))
            this.classList.add('active-featured')
        }

        linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))
        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]')

        function scrollActive(){
            const scrollY = window.pageYOffset

            sections.forEach(current =>{
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
                }else{
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', scrollHeader)
            window.removeEventListener('scroll', scrollUp)
            window.removeEventListener('scroll', scrollActive)
            linkFeatured.forEach(l=> l.removeEventListener('click', activeFeatured))
        }
    }, []);

useEffect(() => {
    /*=============== POPULAR SWIPER ===============*/
    new Swiper('.popular__container', {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        grabCursor: true,

        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                spaceBetween: 48,
            },
        },
    });
    /*=============== MIXITUP FILTER FEATURED ===============*/
    const container = document.querySelector('.featured__content');
    if (container) {
        mixitup(container, {
            selectors: {
                target: '.featured__card'
            },
            animation: {
                duration: 300
            }
        });
    } else {
        console.warn('No elements found for selector .featured__content');
    }
    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        // reset: true
    })

    const elementsToReveal = [`.home__title`, `.popular__container`, `.features__img`, `.featured__filters`, `.home__subtitle`, `.home__elec`, `.home__img`, `.home__car-data`, `.home__button`, `.about__group`, `.offer__data`, `.about__data`, `.offer__img`, `.features__map`, `.features__card`, `.featured__card`, `.logos__content`, `.footer__content`];
    elementsToReveal.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        if (elements.length > 0) {
            sr.reveal(selector);
        } else {
            console.warn(`No elements found for selector ${selector}`);
        }
    });

    sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
    sr.reveal(`.home__subtitle`,{delay: 500})
    sr.reveal(`.home__elec`, {delay: 600})
    sr.reveal(`.home__img`, {delay: 800})
    sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
    sr.reveal(`.home__button`, {delay: 1000, origin: 'bottom'})
    sr.reveal(`.about__group, .offer__data`,{origin: 'left'})
    sr.reveal(`.about__data, .offer__img`,{origin: 'right'})
    sr.reveal(`.features__map`,{delay: 600, origin: 'bottom'})
    sr.reveal(`.features__card`,{interval: 300})
    sr.reveal(`.featured__card, .logos__content, .footer__content`,{interval: 100})

}, []);
    /*=============== SHOW SCROLL UP ===============*/
return (
    <div className={`nav-menu ${showMenu ? 'show-menu' : ''}`}>
        <button id="nav-toggle" onClick={toggleMenu}>Toggle Menu</button>
        <button className="nav__link" onClick={linkAction}>Link 1</button>
        <button className="nav__link" onClick={linkAction}>Link 2</button>
        <button className="nav__link" onClick={linkAction}>Link 3</button>
        {/* останалата част от вашия код */}
    </div>
);
}

export default AddCar;