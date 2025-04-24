document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-btn");
    const robes = document.querySelectorAll(".shop_section .col-sm-6");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedVille = button.getAttribute("data-ville");

            // Toggle boutons actifs
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Affichage conditionnel des robes
            robes.forEach(robe => {
                const villes = robe.getAttribute("data-villes").toLowerCase().split(",");
                const shouldShow = selectedVille === "all" || villes.includes(selectedVille);
                robe.style.display = shouldShow ? "block" : "none";
            });
        });
    });
});
