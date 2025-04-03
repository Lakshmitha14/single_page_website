document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav button");

    navLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            let targetId = link.textContent.trim().toLowerCase();
            
            if (targetId === "home") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });
});
