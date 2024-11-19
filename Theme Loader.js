(function () {
    if (window.AutoTheme != undefined) {
    window.theme = window.AutoTheme
    }

    (async()=>{new Function(await (await fetch("https://raw.githubusercontent.com/MAJESTY5164/Majestys-theme-loader/refs/heads/main/Verified%20Themes.js")).text())();})(); // Load Verified Themes

    window.help = function() {
        console.log("Commands are..");
        console.log("theme = any nitro theme ex: Crimson Moon");
        console.log("VerifiedThemes(","[any verified theme ex: Majestic Moon",")");
        console.log("CustomTheme(","any custom theme url",")");
    }

    // Majestic Moon "https://raw.githubusercontent.com/MAJESTY5164/Majestys-theme-loader/refs/heads/main/Majestic%20Moon.js"
    window.CustomTheme = function(url) {
        console.log(url)
        window.theme = "custom"
        window.custom = url;
        (async()=>{new Function(await (await fetch(window.custom)).text())();})();
    }

    window.Gradiant = function(bottom, top) {
        window.theme = "Gradiant"
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

    // Function to apply the Citrus Sherbert theme
    const NitroTheme = () => {
        if (window.theme === "custom") {
            (async()=>{new Function(await (await fetch(window.custom)).text())();})();
        }else if(window.theme === "Gradiant") {
            window.Gradiant("load", "load")
        }else if(window.theme === "Citrus Sherbert") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
        
            // Remove existing styles for this theme to prevent duplicates
            const existingStyles = document.querySelectorAll('style[data-client-themes="true"]');
            existingStyles.forEach(style => style.remove());
            
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-citrus-sherbert-1) 31.1%, var(--bg-gradient-citrus-sherbert-2) 67.09%);
              }
              :root {
                  --bg-gradient-citrus-sherbert-1: #FFFA8B; /* Bright yellow */
                  --bg-gradient-citrus-sherbert-2: #FECBA9; /* Soft peach */
              }
              html.custom-theme-background {
                  background: var(--custom-theme-background);
              }
            `;
            document.head.appendChild(style);
        }else if (window.theme === "Chroma Glow") {
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
        }else if (window.theme === "Cotton Candy") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(180.14deg, var(--bg-gradient-cotton-candy-1) 8.5%, var(--bg-gradient-cotton-candy-2) 94.28%);
              }
            `;
            document.head.appendChild(style);
        }else if(window.theme === "Crimson Moon") {
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
        }else if (window.theme === "Desert Khaki") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(38.99deg, var(--bg-gradient-desert-khaki-1) 12.92%, var(--bg-gradient-desert-khaki-2) 32.92%, var(--bg-gradient-desert-khaki-3) 52.11%);
              }
            `;
            document.head.appendChild(style);
        }else if (window.theme === "Dusk") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-dusk-1) 12.84%, var(--bg-gradient-dusk-2) 85.99%);
              }
            `;
            document.head.appendChild(style);            
        }else if (window.theme === "Forest") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(162.27deg, var(--bg-gradient-forest-1) 11.2%, var(--bg-gradient-forest-2) 29.93%, var(--bg-gradient-forest-3) 48.64%, var(--bg-gradient-forest-4) 67.85%, var(--bg-gradient-forest-5) 83.54%);
              }
            `;
            document.head.appendChild(style);            
        }else if (window.theme === "Hanami") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(38.08deg, var(--bg-gradient-hanami-1) 3.56%, var(--bg-gradient-hanami-2) 35.49%, var(--bg-gradient-hanami-3) 68.78%);
              }
            `;
            document.head.appendChild(style);            
        }else if (window.theme === "LoFi Vibes") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(180deg, var(--bg-gradient-lofi-vibes-1) 10%, var(--bg-gradient-lofi-vibes-2) 90%);
              }
            `;
            document.head.appendChild(style);            
        }else if(window.theme === "Mars") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(170.82deg, var(--bg-gradient-mars-1) 14.61%, var(--bg-gradient-mars-2) 74.62%);
              }
            `;
            document.head.appendChild(style);            
        }else if(window.theme === "Midnight Blurple") {
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
        } else if (window.theme === "Mint Apple") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(180deg, 
                      var(--bg-gradient-mint-apple-1) 6.15%, 
                      var(--bg-gradient-mint-apple-2) 48.7%, 
                      var(--bg-gradient-mint-apple-3) 93.07%);
              }
            `;
            document.head.appendChild(style);                     
        }else if(window.theme === "Retro Raincloud") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(148.71deg, var(--bg-gradient-retro-raincloud-1) 5.64%, var(--bg-gradient-retro-raincloud-2) 26.38%, var(--bg-gradient-retro-raincloud-2) 49.92%, var(--bg-gradient-retro-raincloud-1) 73.12%);
              }
            `;
            document.head.appendChild(style);            
        }else if(window.theme === "Sunrise") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(154.19deg, var(--bg-gradient-sunrise-1) 8.62%, var(--bg-gradient-sunrise-2) 48.07%, var(--bg-gradient-sunrise-3) 76.04%);
              }
            `;
            document.head.appendChild(style);            
        }else if(window.theme === "Sunset") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(141.68deg, var(--bg-gradient-sunset-1) 27.57%, var(--bg-gradient-sunset-2) 71.25%);
              }
            `;
            document.head.appendChild(style);            
        }else if(window.theme === "Under the Sea") {
            document.querySelector("html").className = "custom-theme-background full-motion theme-dark platform-web font-size-16";
            const style = document.createElement("style");
            style.setAttribute("data-client-themes", "true");
            style.setAttribute("data-rh", "true");
            style.textContent = `
              .custom-theme-background {
                  --custom-theme-background: linear-gradient(179.14deg, var(--bg-gradient-under-the-sea-1) 1.91%, var(--bg-gradient-under-the-sea-2) 48.99%, var(--bg-gradient-under-the-sea-3) 96.35%);
              }
            `;
            document.head.appendChild(style);            
        }else {
            console.log("The theme provided dosent exist")
        }
    };

    // Function to remove the Citrus Sherbert theme
    const removeTheme = () => {
        document.querySelector("html").className = document.querySelector("html").className.replace("custom-theme-background", "").trim();
        const styles = document.querySelectorAll('style[data-client-themes="true"]');
        styles.forEach(style => style.remove());
    };

    // Observer function to watch changes to window.theme
    const checkTheme = () => {
        if (window.theme === "None") {
            removeTheme();
        } else {
            NitroTheme();
        }
    };

    // Initial check
    checkTheme();

    // Poll for changes to window.theme (if it changes dynamically)
    let lastTheme = window.theme;
    setInterval(() => {
        if (window.theme !== lastTheme) {
            lastTheme = window.theme;
            checkTheme();
        }
    }, 500);

        // Observer for URL changes
        let currentURL = window.location.href;
        const observeURLChange = () => {
            if (window.location.href !== currentURL) {
                currentURL = window.location.href;
                checkTheme();
            }
        };

        setInterval(NitroTheme, 500);
    
        // Initial check
        checkTheme();
    
        // Monitor URL changes using MutationObserver for single-page applications
        const observer = new MutationObserver(observeURLChange);
        observer.observe(document.body, { childList: true, subtree: true });
    
        // Fallback for regular navigation
        setInterval(observeURLChange, 500);
    })();
    
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            NitroTheme();
          // You can add custom actions here for when the tab is out of focus
        } else {
            NitroTheme();
          // You can add custom actions here for when the tab is back in focus
        }
      });
  
