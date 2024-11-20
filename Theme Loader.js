// Template
// (function() {
//    window.names.push("Template"); // Name of theme
//    window.icon.push("linear-gradient(64.92deg, hsl(201.553, 47.032%, 42.941%) 0%, hsl(241.017, 29.648%, 60.98%) 100%)"); // theme icon
//    window.funcname.push("Template");  // theme function name
//
//    window.Template = function() { // theme function name
//
//    };
//})();


window.names = []; // List of names
window.icon = []; // List of icon
window.funcname = []; // List of function names

window.selectbutton = function() {
// Search for the target div
const targetDiv = document.querySelector('.item_a0.themed_a0[role="tab"][aria-label="Appearance"]');

// Check if the element exists
if (targetDiv) {
    // Clone the found element
    const clonedDiv = targetDiv.cloneNode(true);

    // Modify the cloned element's properties
    clonedDiv.setAttribute('aria-label', 'Nitro Themes');
    clonedDiv.innerText = 'Nitro Themes';

    // Add click event listener to the cloned element
    clonedDiv.addEventListener('click', () => {
        select();
    });

    // Insert the cloned element into the DOM (e.g., after the original)
    targetDiv.parentElement.insertBefore(clonedDiv, targetDiv.nextSibling);
}
}

window.Gradiant = function(bottom, top) {
    func = "Gradiant(\"load\", \"load\")"
    if (top === undefined) {
        console.log("fail")
    }else {
    if (bottom === "load") {
        bottom = window.GB
        top = window.GT
    }
    window.GT = top
    window.GB = bottom
    document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
    const style = document.createElement("style");
    style.setAttribute("data-client-themes", "true");
    style.setAttribute("data-rh", "true");
    style.textContent = `
      .custom-theme-background {
          --custom-theme-background: linear-gradient(64.92deg, ${bottom} 0%, ${top} 100%);
      }
    `;
    document.head.appendChild(style);
}}

window.load = function(url) {
    (async()=>{new Function(await (await fetch(url)).text())();})();
}

// Function to create the dark mode GUI
function select() {
    // Check if GUI already exists
    if (document.querySelector('#custom-gui')) return;

    // Create the overlay
    const overlay = document.createElement('div');
    overlay.id = 'custom-gui';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.flexDirection = 'column';
    overlay.style.color = 'white';

    // Create the close button
    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.marginBottom = '20px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.fontSize = '16px';
    closeButton.style.border = 'none';
    closeButton.style.backgroundColor = '#444';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        overlay.remove();
    });
    overlay.appendChild(closeButton);

    // Create the buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.gap = '15px';

    // Create buttons dynamically
    window.names.forEach((name, index) => {
        const button = document.createElement('button');
        button.style.width = '80px'; // Equal width and height
        button.style.height = '80px';
        button.style.border = 'none';
        button.style.borderRadius = '50%'; // Circular shape
        button.style.cursor = 'pointer';
        button.style.backgroundImage = window.icon[index]; // Set the gradient as background
        button.style.backgroundSize = 'cover';
        button.style.color = 'white';
        button.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';

        // Add hover effect to show name
        button.addEventListener('mouseover', () => {
            button.title = name; // Tooltip displays the theme name
        });

        // Add click event to log the button name and call the function
        button.addEventListener('click', () => {
            console.log(`Theme "${name}" was selected!`);

            // Get the function name based on the index
            func = window.funcname[index];  // Get the function name directly
            if (typeof window[func] === "function") {
                window[func]();  // Call the function dynamically
            } else {
                console.error(`Function ${func} does not exist.`);
            }
        });

        buttonsContainer.appendChild(button);
    });

    // Append buttons container to the overlay
    overlay.appendChild(buttonsContainer);

    // Append the overlay to the body
    document.body.appendChild(overlay);
}

function reload() {
    if (load != undefined) {
        window[func]();
    }
}

setInterval(reload, 500);

// Crimson Moon
(function() {
    window.names.push("Crimson Moon");
    window.icon.push("linear-gradient(64.92deg, hsl(0, 88.608%, 30.98%) 0%, hsl(0, 0%, 0%) 100%)");
    window.funcname.push("CrimsonMoon");  // Store only the function name, not the window reference

    window.CrimsonMoon = function() {
        document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
        const style = document.createElement("style");
        style.setAttribute("data-client-themes", "true");
        style.setAttribute("data-rh", "true");
        style.textContent = `
          .custom-theme-background {
              --custom-theme-background: linear-gradient(64.92deg, var(--bg-gradient-crimson-moon-1) 16.17%, var(--bg-gradient-crimson-moon-2) 72%);
          }
        `;
        document.head.appendChild(style);
    };
})();
// Midnight Blurple
(function() {
    window.names.push("Midnight Blurple");
    window.icon.push("linear-gradient(64.92deg, hsl(245.077, 55.085%, 53.725%) 0%, hsl(259.024, 74.545%, 10.784%) 100%)");
    window.funcname.push("MidnightBlurple");  // Store only the function name, not the window reference

    window.MidnightBlurple = function() {
        document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
        const style = document.createElement("style");
        style.setAttribute("data-client-themes", "true");
        style.setAttribute("data-rh", "true");
        style.textContent = `
          .custom-theme-background {
              --custom-theme-background: linear-gradient(48.17deg, var(--bg-gradient-midnight-blurple-1) 11.21%, var(--bg-gradient-midnight-blurple-2) 61.92%);
          }
        `;
        document.head.appendChild(style); 
    };
})();
// Chroma Glow
(function() {
    window.names.push("Chroma Glow"); // Name of theme
    window.icon.push("linear-gradient(64.92deg, hsl(183.39, 86.341%, 40.196%) 0%, hsl(258.113, 89.831%, 46.275%) 25%, hsl(298.491, 90.857%, 34.314%) 50%, hsl(264.767, 100%, 66.275%) 75%, hsl(206.702, 75.494%, 50.392%) 100%)"); // theme icon
    window.funcname.push("ChromaGlow");  // theme function name

    window.ChromaGlow = function() { // theme function name
        document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
        const style = document.createElement("style");
        style.setAttribute("data-client-themes", "true");
        style.setAttribute("data-rh", "true");
        style.textContent = `
          .custom-theme-background {
              --custom-theme-background: linear-gradient(128.92deg, var(--bg-gradient-chroma-glow-1) 3.94%, var(--bg-gradient-chroma-glow-2) 26.1%, var(--bg-gradient-chroma-glow-3) 39.82%, var(--bg-gradient-chroma-glow-4) 56.89%, var(--bg-gradient-chroma-glow-5) 76.45%);
          }
        `;
        document.head.appendChild(style);
    };
})();
