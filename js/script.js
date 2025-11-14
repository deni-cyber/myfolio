document.querySelectorAll(".show-more-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        const desc = this.previousElementSibling;

        desc.classList.toggle("full-text");

        if (desc.classList.contains("full-text")) {
            this.textContent = "Show Less";
        } else {
            this.textContent = "Show More";
        }
    });
});