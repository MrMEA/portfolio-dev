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

window.addEventListener("scroll", reveal);

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

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (scrollY >= sectionTop) {
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




function createMatrix() {
    const matrix = document.querySelector(".matrix");

    setInterval(() => {

        let line = document.createElement("div");

        let binary = "";
        for (let i = 0; i < 12; i++) {
            binary += Math.random() > 0.5 ? "1" : "0";
        }

        line.textContent = binary;

        line.style.opacity = 0.4;
        line.style.marginBottom = "8px";

        matrix.appendChild(line);

        setTimeout(() => {
            line.remove();
        }, 3000);

    }, 200); // ← langsamer
}

createMatrix();

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let progress = (scrollTop / height) * 100;

    document.querySelector(".progress-bar").style.width = progress + "%";
});