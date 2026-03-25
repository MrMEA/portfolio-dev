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