document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("toggle-theme");
    const body = document.body;

    // Verifica se o usuário já tem uma preferência salva
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "🌞";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Salva a preferência do usuário
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌞";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "🌙";
        }
    });
});
