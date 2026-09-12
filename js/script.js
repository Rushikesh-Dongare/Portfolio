/* =====================================
   PORTFOLIO SCRIPT.JS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.padding = "12px 0";
            navbar.style.background = "rgba(5,8,22,0.95)";
            navbar.style.backdropFilter = "blur(20px)";

        } else {

            navbar.style.padding = "20px 0";
            navbar.style.background = "rgba(5,8,22,0.75)";

        }

    });

    /* ==========================
       ACTIVE NAVIGATION
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

   /* ==========================
   COUNTER ANIMATION
========================== */

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const duration = 2000;

    const startTime = performance.now();

    const updateCounter = (currentTime) => {

        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        /*
         * Ease-out effect
         * Starts fast and slows down near the end
         */
        const easeOut = 1 - Math.pow(1 - progress, 3);

        current = Math.floor(target * easeOut);

        counter.textContent = current + "+";

        if (progress < 1) {

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target + "+";

        }

    };

    requestAnimationFrame(updateCounter);

};


const counterObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.5
    }

);


counters.forEach(counter => {

    counterObserver.observe(counter);

});

    /* ==========================
       SCROLL REVEAL
    ========================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .company-card, .skill-category, .service-card, .project-card, .timeline-item, .contact-card"
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition =
            "all 0.8s ease";

    });

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.1
        }

    );

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* ==========================
       PROJECT CARD HOVER
    ========================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * 10;

            const rotateY =
                ((x / rect.width) - 0.5) * -10;

            card.style.transform =
                `perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";

        });

    });

    /* ==========================
       SCROLL TO TOP BUTTON
    ========================== */

    const scrollBtn =
        document.querySelector(".scroll-top");

    if (scrollBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                scrollBtn.classList.add("show");

            } else {

                scrollBtn.classList.remove("show");

            }

        });

        scrollBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,
                behavior: "smooth"

            });

        });

    }

    /* ==========================
       FLOATING ICONS
    ========================== */

    const floatingIcons =
        document.querySelectorAll(".floating-icon");

    floatingIcons.forEach((icon, index) => {

        icon.style.animationDelay =
            `${index * 0.5}s`;

    });

    /* ==========================
       FOOTER YEAR
    ========================== */

    const yearElement =
        document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});