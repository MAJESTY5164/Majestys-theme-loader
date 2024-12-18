 //Majestic Moon
 (function() {
    window.names.push("Majestic Moon");
    window.icon.push("linear-gradient(64.92deg, #FF00B6 0%, #000000 100%)");
    window.funcname.push("MajesticMoon");

    window.MajesticMoon = function() {
        document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
        const style = document.createElement("style");
        style.setAttribute("data-client-themes", "true");
        style.setAttribute("data-rh", "true");
        style.textContent = `
        .custom-theme-background {
            --custom-theme-background: linear-gradient(64.92deg, #FF00B6 0%, #000000 100%);
        }
        `;
        document.head.appendChild(style);
    };
})();
