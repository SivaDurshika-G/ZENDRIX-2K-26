/* =========================================================
   ZENDRIX 2K26
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    window.addEventListener("load", () => {
        setTimeout(() => {
            const loader = document.getElementById("loader");

            if (loader) {
                loader.classList.add("hide");
            }
        }, 900);
    });


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.getElementById("navbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            menuBtn.classList.toggle("open");
        });

        document.querySelectorAll(".nav-menu a").forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                menuBtn.classList.remove("open");
            });
        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-menu a");

    if (sections.length && navLinks.length) {

        window.addEventListener("scroll", () => {

            let current = "";

            sections.forEach(section => {

                const sectionTop = section.offsetTop - 150;

                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }

            });

            navLinks.forEach(link => {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + current) {
                    link.classList.add("active");
                }

            });

        });

    }


    /* =====================================================
       COUNTDOWN
    ===================================================== */

    const eventDate =
        new Date("September 16, 2026 09:00:00").getTime();

    function updateCountdown() {

        const now = new Date().getTime();
        const distance = eventDate - now;

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
            return;
        }

        if (distance <= 0) {

            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";

            return;
        }

        const days =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (distance % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (distance % (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (distance % (1000 * 60)) /
                1000
            );

        daysEl.textContent =
            String(days).padStart(2, "0");

        hoursEl.textContent =
            String(hours).padStart(2, "0");

        minutesEl.textContent =
            String(minutes).padStart(2, "0");

        secondsEl.textContent =
            String(seconds).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    /* =====================================================
       FLOATING PARTICLES
    ===================================================== */

    const particlesContainer =
        document.getElementById("particles");

    function createParticles() {

        // If particles container doesn't exist,
        // simply stop instead of throwing an error.
        if (!particlesContainer) {
            return;
        }

        const amount =
            window.innerWidth < 600 ? 18 : 35;

        for (let i = 0; i < amount; i++) {

            const particle =
                document.createElement("span");

            particle.className = "particle";

            particle.style.left =
                Math.random() * 100 + "%";

            particle.style.animationDuration =
                (6 + Math.random() * 8) + "s";

            particle.style.animationDelay =
                (Math.random() * 8) + "s";

            particle.style.opacity =
                0.2 + Math.random() * 0.6;

            const size =
                2 + Math.random() * 3;

            particle.style.width =
                size + "px";

            particle.style.height =
                size + "px";

            particlesContainer.appendChild(particle);
        }
    }

    createParticles();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            revealObserver.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       EVENT DATA
    ===================================================== */

    const eventData = {

        /* ---------- TECHNICAL ---------- */

        paper: {

            type: "TECHNICAL EVENT",

            title: "PAPER PULSE",

            theme: "Open Innovation / Choose your own Topic",

            description:
                "Present your ideas, research and innovative thinking on a technical topic of your choice and make your ideas stand out.",

            how:
                "Teams of 1-3 members prepare a paper beforehand on a topic of their choice under the theme 'Open Innovation / Choose your own Topic' and present it before the judges at the event. Evaluation will be based on content, clarity, technical knowledge, presentation skills and time management.",

            rules: [
                "Team size: 1 to 3 members.",
                "Theme: Open Innovation / Choose your own Topic.",
                "The paper must be prepared beforehand and brought to the event.",
                "Participants must report before the event begins.",
                "The judges' decision will be treated as final."
            ]

        },


        canvas: {

            type: "TECHNICAL EVENT",

            title: "TECH CANVAS",

            theme: "One Problem. One Idea. One Solution.",

            description:
                "A poster-based technical event where you visualize and present your ideas on the theme 'One Problem. One Idea. One Solution.'",

            how:
                "Teams of 1-3 members prepare a poster beforehand based on the theme 'One Problem. One Idea. One Solution.' and present it to the judges at the venue. On-the-spot poster creation is not allowed — only the presentation happens at the venue.",

            rules: [
                "Team size: 1 to 3 members.",
                "Theme: One Problem. One Idea. One Solution.",
                "Poster must be prepared beforehand at home.",
                "Participants only need to present the prepared poster at the venue.",
                "On-the-spot poster creation is not permitted.",
                "The judges' decision will be treated as final."
            ]

        },


        speak: {

            type: "TECHNICAL EVENT",

            title: "TECH SPEAK",

            theme: "Beyond Today: Technology That Will Define Tomorrow",

            description:
                "A spot-topic technical speaking event that tests how well you think and speak on your feet, under the theme 'Beyond Today: Technology That Will Define Tomorrow.'",

            how:
                "Participants pick a topic related to the theme 'Beyond Today: Technology That Will Define Tomorrow', provided at the venue, and speak on it in front of the judges.",

            rules: [
                "Theme: Beyond Today: Technology That Will Define Tomorrow.",
                "Topic will be provided at the venue, based on the above theme.",
                "Participants must report before the event begins.",
                "Participants must speak within the allotted time.",
                "No external assistance is permitted.",
                "The judges' decision will be final."
            ]

        },


        /* ---------- NON-TECHNICAL ---------- */

        brain: {

            type: "NON-TECHNICAL EVENT",

            title: "Brain Blitz",

            description:
                "A fast-paced memory and observation challenge where your brain needs to stay one step ahead.",

            how:
                "Participants will be shown or presented with information that they must observe, remember and reproduce or identify during the challenge.",

            rules: [
                "Pay close attention to the instructions.",
                "Participants must answer within the given time.",
                "No external assistance is permitted.",
                "The event is based on individual performance unless specified otherwise.",
                "The coordinator's decision will be final."
            ]

        },


        mime: {

            type: "NON-TECHNICAL EVENT",

            title: "MimeX",

            description:
                "No words. No clues. Just expressions. Communicate the impossible without saying a word.",

            how:
                "A participant will receive a word, phrase or concept and must communicate it through actions and expressions while teammates attempt to guess it.",

            rules: [
                "Speaking or making verbal clues is not allowed during the performance.",
                "Participants must follow the allotted time.",
                "Only gestures and expressions may be used.",
                "The audience or opposing teams must not provide clues.",
                "The coordinator's decision will be final."
            ]

        },


        sonic: {

            type: "NON-TECHNICAL EVENT",

            title: "SonicDecode",

            description:
                "Listen carefully, recognize the sound and decode the answer before anyone else does.",

            how:
                "Participants will listen to short audio clips, background music or musical clues and identify the required song, movie, artist or related answer.",

            rules: [
                "Listen carefully to every audio clip.",
                "Answers must be submitted within the specified time.",
                "No external assistance is permitted.",
                "Only answers submitted through the official process will be considered.",
                "The coordinator's decision will be final."
            ]

        }

    };


    /* =====================================================
       EVENT MODAL
    ===================================================== */

    const modal =
        document.getElementById("eventModal");

    const modalClose =
        document.getElementById("modalClose") ||
        document.getElementById("closeModal");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalType =
        document.getElementById("modalType");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalHow =
        document.getElementById("modalHow");

    const modalRules =
        document.getElementById("modalRules");


   /* =====================================================
   OPEN EVENT DETAILS
===================================================== */

document.querySelectorAll(".event-card").forEach(card => {

    card.addEventListener("click", event => {

        const clickedButton =
            event.target.closest("button");

        if (!clickedButton) {
            return;
        }

        const eventKey =
            card.dataset.event;

        const data =
            eventData[eventKey];

        if (!data) {

            console.warn(
                "No event data found for:",
                eventKey
            );

            return;
        }

        /* Fill modal */

        if (modalType) {
            modalType.textContent = data.type;
        }

        if (modalTitle) {
            modalTitle.textContent = data.title;
        }

        if (modalDescription) {
            modalDescription.textContent =
                data.description;
        }

        if (modalHow) {
            modalHow.textContent =
                data.how;
        }

        if (modalRules) {

            modalRules.innerHTML = "";

            data.rules.forEach(rule => {

                const li =
                    document.createElement("li");

                li.textContent = rule;

                modalRules.appendChild(li);

            });

        }

        /* Show modal */

        if (modal) {

            modal.classList.add("active");

            document.body.classList.add(
                "modal-open"
            );

        }

    });

});
    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeEventModal() {

        if (modal) {
            modal.classList.remove("active");
        }

        document.body.classList.remove(
            "modal-open"
        );
    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeEventModal
        );

    }


    /* Close by clicking overlay */

    if (modal) {

        modal.addEventListener("click", event => {

            if (
                event.target.classList.contains(
                    "modal-overlay"
                )
            ) {
                closeEventModal();
            }

        });

    }


    /* Close using ESC */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("active")
            ) {
                closeEventModal();
            }

        }
    );


    /* =====================================================
       CARD TILT EFFECT
    ===================================================== */

    document.querySelectorAll(".event-card").forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 900) {
                return;
            }

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-12px)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* =====================================================
       REGISTER BUTTONS
    ===================================================== */

    document.querySelectorAll(
   
     'a[href^="https://forms.gle"]'
    ).forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {
                button.style.cursor = "pointer";
            }
        );

    });


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        "%c ZENDRIX 2K26 ",
        "background:#0066ff;color:white;font-size:18px;font-weight:bold;padding:8px;"
    );

    console.log(
        "%c Unleash the Next. Experience the Future. ",
        "color:#00aaff;font-size:14px;font-weight:bold;"
    );

});
