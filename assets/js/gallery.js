;(function () {
    ;('use strict')

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
     * Scroll with ofset on links with a class name .scrollto
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

    /**
     * Portfolio isotope and filter
     */
    window.addEventListener('load', () => {
        const urlParams = new URLSearchParams(window.location.search)
        const filterParam = urlParams.get('filter') || '*'
        let initialFilter = '*'

        // Check if a specific filter is provided in the URL
        if (filterParam && filterParam !== 'all') {
            initialFilter = `.filter-${filterParam}`
        }
        let galleryContainer = select('.gallery-container')
        if (galleryContainer) {
            let galleryIsotope = new Isotope(galleryContainer, {
                itemSelector: '.gallery-item',
                filter: initialFilter,
            })

            let galleryFilters = select('#gallery-filters li', true)

            galleryFilters.forEach((el) => {
                el.classList.remove('filter-active')
                if (el.getAttribute('data-filter') === initialFilter) {
                    el.classList.add('filter-active')
                }
            })

            on(
                'click',
                '#gallery-filters li',
                function (e) {
                    e.preventDefault()
                    galleryFilters.forEach((el) =>
                        el.classList.remove('filter-active')
                    )
                    this.classList.add('filter-active')
                    galleryIsotope.arrange({
                        filter: this.getAttribute('data-filter'),
                    })
                    galleryIsotope.on('arrangeComplete', () => {
                        AOS.refresh()
                        initGalleryLightbox(this.getAttribute('data-filter')) // Reinitialize GLightbox with the current filter
                    })
                },
                true
            )
        }
    })

    /**
     * Initialize GLightbox for gallery with continuous loop
     */
    let galleryLightbox

    const initGalleryLightbox = (filter) => {
        if (galleryLightbox) galleryLightbox.destroy()

        let selector =
            filter === '*' ? '.gallery-item img' : `.gallery-item${filter} img`

        galleryLightbox = GLightbox({
            selector: selector, // Match images based on filter
            loop: true,
            closeOnOutsideClick: false,
            openEffect: 'fade',
            closeEffect: 'fade',
            slideEffect: 'slide',
        })
    }

    window.addEventListener('load', () => {
        initGalleryLightbox('*') // Initialize GLightbox on page load with all images
    })

    /**
     * Initialize Swiper for gallery details
     */
    new Swiper('.gallery-details-slider', {
        speed: 400,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        direction: 'horizontal',
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
