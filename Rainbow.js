 //Rainbow
 (function() {
    window.names.push("Rainbow");
    window.icon.push("linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet, red)");
    window.funcname.push("Rainbow");

    window.Rainbow = function() {
    document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";

    // Remove existing style if it exists
    const existingStyle = document.querySelector('style[data-moving-rainbow]');
    if (existingStyle) {
        existingStyle.remove();
    }

    // Create a new style element
    const style = document.createElement("style");
    style.setAttribute("data-moving-rainbow", "true");

    // Add the base gradient style for Discord
    style.textContent = `
        .custom-theme-background {
            --custom-theme-background: linear-gradient(90deg, 
                red, orange, yellow, green, cyan, blue, violet, red);
            background: var(--custom-theme-background);
            background-size: 600% 100%; /* A large size for smoother movement */
            height: 100vh; /* Ensure it covers the full height */
            width: 100%; /* Ensure it covers the full width */
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1; /* To ensure it stays in the background */
            transition: background-position 0s;
        }
    `;
    
    document.head.appendChild(style);

    };
})();
