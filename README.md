# Floortech Construction - Landing Page

Welcome to the **Floortech Construction** landing page repository! This project serves as an engaging and informative landing page for a flooring services company, showcasing various services, a portfolio of clients, and contact information. The landing page is designed for optimal performance and user engagement with smooth animations, responsive layouts, and an accessible structure.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The Floortech Construction landing page provides a user-friendly, informative interface for potential clients. It includes a list of services such as **Floor Polish**, **Floor Hardener**, **3D Epoxy Flooring**, and other specialty flooring solutions. The page also highlights the company’s clients and provides clear contact information for inquiries and quotes.

---

## Features

- **Responsive Design:** Adjusts seamlessly across devices (desktop, tablet, mobile).
- **Service Descriptions:** Detailed sections for each flooring service offered.
- **Client Showcase:** A carousel of high-profile client logos.
- **Contact Information:** Easy-to-find and actionable contact options.
- **Smooth Animations:** Uses AOS for animations on scroll to enhance user experience.
- **SEO & Accessibility Optimized:** Basic optimizations for better accessibility and search engine rankings.

---

## Technologies Used

- **HTML5** - Markup language for structuring the page.
- **CSS3** - Styling and layout with Bootstrap for responsive design.
- **JavaScript** - Interactivity and animations.
- **[AOS (Animate on Scroll)](https://michalsnik.github.io/aos/)** - Library for scroll animations.
- **[Bootstrap](https://getbootstrap.com/)** - CSS framework for responsive layout.
- **[Swiper.js](https://swiperjs.com/)** - Library for the client carousel.
- **Glightbox** - Lightbox plugin for enhanced image display.
- **Isotope** - Layout library for filtering and organizing items.

---

## Project Structure

```plaintext
Floortech-Landing-Page/
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet for the project
│   │   └── cards.css         # Stylesheet for the cards
│   │   └── gallery.css       # Stylesheet for the Gallery Page
│   ├── img/
│   │   └── about/          # About section images
│   │   └── banners/        # Hero images
│   │   └── clients/        # Client logos
│   │   └── features/       # Feature section images
│   │   └── gallery/        # Images for each categorical works
│   │   └── portfolio/      # Portfolio Images
│   │   Logo/               # Main Logo
│   ├── js/
│   │   └── main.js           # Custom scripts for interactivity
│   │   └── gallery.js        # Controller for gallery filters
│   └── vendor/
│       ├── aos/              # AOS library files
│       ├── bootstrap/        # Bootstrap library files
│       ├── glightbox/        # Glightbox files
│       ├── isotope-layout/   # Isotope library for layout control
│       └── swiper/           # Swiper library files for carousel
├── index.html                # Main HTML file
├── clients.html              # HTML file for Clients Page
├── gallery.html              # HTML file for Gallery Page
└── README.md                 # Documentation file
```

## Setup and Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/navid001/FloorTech-Construction.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd FloorTech-Construction
    ```

3. **Open `index.html` in a web browser:**

    You can open it directly in a browser or serve it using a simple HTTP server. If you have Python installed, you can use the following command:

    ```bash
    python3 -m http.server
    ```

    Then navigate to `http://localhost:8000` in your browser.

---

## Usage

- **Navigate Services:** Scroll through the services to view details on various flooring options.
- **Client Carousel:** The client section includes a carousel of logos, allowing potential customers to view past collaborators.
- **Contact Information:** Users can access contact details at the bottom or within the Contact section to initiate inquiries.

---

## Configuration and Customization

### 1. **Updating Services**
   - Services are listed in the `#services` section within `index.html`.
   - Each service includes a title and description in an `.icon-box` div, which can be customized by editing the HTML.

### 2. **Client Logos**
   - Add or replace client logos by placing images in the `assets/img/clients/` folder.
   - Ensure each client logo has an `alt` attribute for accessibility.

### 3. **Contact Information**
   - Update the phone number, email address, and address in the `#contact` section of `index.html` as needed.

---

## Contributing

We welcome contributions to improve the Floortech Construction landing page. To contribute:

1. **Fork the repository.**
2. **Create a new branch** for any feature or bug fix: `git checkout -b feature-name`.
3. **Commit your changes**: `git commit -m 'Add some feature'`.
4. **Push to the branch**: `git push origin feature-name`.
5. Open a **pull request** describing your changes.

---

## Contact

For further information or questions about this project, feel free to contact us:

- **Email:** navidalvi.001@gmail.com

Thank you for visiting our project! We hope it inspires you to explore our flooring solutions and contributes to your success.