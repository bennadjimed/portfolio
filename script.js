window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        document.getElementById("themeBtn").textContent = "☀️";
    }
});

function toggleTheme() {
    document.body.classList.toggle("light");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("light")) {
        btn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        btn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
}


/* SMOOTH SCROLL NAV LINKS */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});


/*ACTIVE LINK ON SCROL*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

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

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}
