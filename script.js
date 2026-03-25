// Scroll to contact
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {
        document.getElementById("name").focus();
    }, 500);
}

// Scroll animation
function reveal() {
    let elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (top < windowHeight - 50) {
            el.classList.add("show");
        }
    });
}

// Dummy request (Frontend)
function sendRequest() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Bitte alles ausfüllen");
        return;
    }

    alert("Anfrage gesendet!");
}
document.addEventListener("mousemove", (e) => {
    document.body.style.backgroundPosition = `${e.clientX/50}px ${e.clientY/50}px`;
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    // 1. REVEAL
    let elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (top < windowHeight - 50) {
            el.classList.add("show");
        }
    });

    // 2. NAV
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });

    // 3. PROGRESS BAR
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.querySelector(".progress-bar").style.width = progress + "%";
});

