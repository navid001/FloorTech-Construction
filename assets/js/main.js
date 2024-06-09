/**
 * Template Name: Bikin
 * Updated: Sep 18 2023 with Bootstrap v5.3.2
 * Template URL: https://bootstrapmade.com/bikin-free-simple-landing-page-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
;(function () {
    'use strict'

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach((e) => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach((navbarlink) => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (
                position >= section.offsetTop &&
                position <= section.offsetTop + section.offsetHeight
            ) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth',
        })
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on(
        'click',
        '.navbar .dropdown > a',
        function (e) {
            if (select('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        },
        true
    )

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on(
        'click',
        '.scrollto',
        function (e) {
            e.preventDefault()
            if (this.hash) {
                const sectionId = this.hash.substring(1)
                const currentPage = window.location.pathname
                if (currentPage === '/index.html') {
                    scrollto(`#${sectionId}`)
                } else {
                    window.location.href = `/index.html#${sectionId}`
                }
            }
        },
        true
    )

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    })

    /**
     * Preloader
     */
    let preloader = select('#preloader')
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove()
        })
    }
    const urlParams = new URLSearchParams(window.location.search)
    const filterParam = urlParams.get('filter')
    let initialFilter = '*' // default filter is all
    if (filterParam && filterParam !== 'all') {
        initialFilter = `.filter-${filterParam}`
    }

    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container')
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                filter: initialFilter,
            })

            let portfolioFilters = select('#portfolio-flters li', true)
            if (filterParam) {
                portfolioFilters.forEach((el) => {
                    el.classList.remove('filter-active')
                    if (el.getAttribute('data-filter') === initialFilter) {
                        el.classList.add('filter-active')
                    }
                })
            }

            on(
                'click',
                '#portfolio-flters li',
                function (e) {
                    e.preventDefault()
                    portfolioFilters.forEach((el) =>
                        el.classList.remove('filter-active')
                    )
                    this.classList.add('filter-active')
                    portfolioIsotope.arrange({
                        filter: this.getAttribute('data-filter'),
                    })
                    portfolioIsotope.on('arrangeComplete', () => AOS.refresh())
                },
                true
            )
        }
    })

    const portfolioLightbox = GLightbox({ selector: '.portfolio-lightbox' })

    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })

    /**
     * Client slider
     */
    const swiper = new Swiper('.client-slider', {
        speed: 800,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
        spaceBetween: 0,
        loopAdditionalSlides: 1,
        allowTouchMove: false,
        on: {
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            slideChangeTransitionEnd: function () {
                this.wrapperEl.style.transition = 'none'
                this.wrapperEl.style.transform = `translate3d(${this.translate}px, 0, 0)`
                this.wrapperEl.style.transition = ''
            },
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    })

    // Your existing main.js code here
    // Initialize Swiper
    var heroSwiper = new Swiper('.hero-carousel', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        })
    })
})()
