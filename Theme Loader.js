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
// Check if the button already exists by looking for a specific aria-label or class
const existingButton = document.querySelector('.item_a0.themed_a0[aria-label="Select Themes"]');

// If the button doesn't exist, create and append it
if (!existingButton) {
    // Search for the target div
    const targetDiv = document.querySelector('.item_a0.themed_a0[role="tab"][aria-label="Appearance"]');

    // Check if the element exists
    if (targetDiv) {
        // Clone the found element
        const clonedDiv = targetDiv.cloneNode(true);

        // Modify the cloned element's properties
        clonedDiv.setAttribute('aria-label', 'Select Themes');
        clonedDiv.innerText = 'Select Themes';

        // Add click event listener to the cloned element
        clonedDiv.addEventListener('click', () => {
            select();
        });

        // Insert the cloned element into the DOM (e.g., after the original)
        targetDiv.parentElement.insertBefore(clonedDiv, targetDiv.nextSibling);
    }
}
}

window.loadbutton = function() {
    // Check if the button already exists by looking for a specific aria-label or class
    const existingButton = document.querySelector('.item_a0.themed_a0[aria-label="load Themes"]');
    
    // If the button doesn't exist, create and append it
    if (!existingButton) {
        // Search for the target div
        const targetDiv = document.querySelector('.item_a0.themed_a0[role="tab"][aria-label="Appearance"]');
    
        // Check if the element exists
        if (targetDiv) {
            // Clone the found element
            const clonedDiv = targetDiv.cloneNode(true);
    
            // Modify the cloned element's properties
            clonedDiv.setAttribute('aria-label', 'load Themes');
            clonedDiv.innerText = 'load Themes';
    
            // Add click event listener to the cloned element
            clonedDiv.addEventListener('click', () => {
                window.loadprompt()
            });
    
            // Insert the cloned element into the DOM (e.g., after the original)
            targetDiv.parentElement.insertBefore(clonedDiv, targetDiv.nextSibling);
        }
    }
    }

window.delay = 0

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
    loadbutton()
    selectbutton()
        window[func]();
}

setInterval(reload, window.delay);

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

    //load prompt
    window.loadprompt = function() {
        // Create the overlay for the custom prompt
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';
    
        // Create the prompt box
        const promptBox = document.createElement('div');
        promptBox.style.backgroundColor = '#333'; // Dark background
        promptBox.style.padding = '30px';
        promptBox.style.borderRadius = '8px';
        promptBox.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
        promptBox.style.textAlign = 'center';
        promptBox.style.width = '400px'; // Wider prompt box
    
        // Create the input field
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = 'Github link';
        inputField.style.marginBottom = '15px';
        inputField.style.padding = '0px';
        inputField.style.width = '100%'; // Full width
        inputField.style.borderRadius = '4px';
        inputField.style.border = '1px solid #555'; // Dark border
        inputField.style.backgroundColor = '#444'; // Dark input field background
        inputField.style.color = 'white'; // White text
    
        // Create Submit button
        const submitButton = document.createElement('button');
        submitButton.innerText = 'Submit';
        submitButton.style.padding = '12px 20px';
        submitButton.style.marginRight = '10px';
        submitButton.style.backgroundColor = '#4CAF50'; // Green color
        submitButton.style.color = 'white';
        submitButton.style.border = 'none';
        submitButton.style.borderRadius = '4px';
        submitButton.style.cursor = 'pointer';
    
        // Create Cancel button
        const cancelButton = document.createElement('button');
        cancelButton.innerText = 'Cancel';
        cancelButton.style.padding = '12px 20px';
        cancelButton.style.backgroundColor = '#f44336'; // Red color
        cancelButton.style.color = 'white';
        cancelButton.style.border = 'none';
        cancelButton.style.borderRadius = '4px';
        cancelButton.style.cursor = 'pointer';
    
        // Add the input and buttons to the prompt box
        promptBox.appendChild(inputField);
        promptBox.appendChild(document.createElement('br')); // Line break
        promptBox.appendChild(submitButton);
        promptBox.appendChild(cancelButton);
    
        // Add the prompt box to the overlay
        overlay.appendChild(promptBox);
    
        // Append the overlay to the body
        document.body.appendChild(overlay);
    
        // Submit button click handler
        submitButton.addEventListener('click', () => {
            load(inputField.value);
            document.body.removeChild(overlay); // Close the prompt
        });
    
        // Cancel button click handler
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(overlay); // Close the prompt
        });
    }

    window.loadcustoms = function() {
        if (window.autotheme === undefined) {
            console.log("No auto theme selected")
        }else {
            console.log("autotheme loading")
            for (i in autotheme) {
            load(autotheme[i])
        }
        }}
    window.loadauto = function() {
        func = window.funcname[3]
    }

    loadcustoms()
    setTimeout(loadauto, 0)
    setTimeout(loadauto, 500)
})();
