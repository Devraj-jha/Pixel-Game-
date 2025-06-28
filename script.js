document.getElementById("play-btn").addEventListener("click", () => {
  // Hide opening screen
  document.getElementById("opening-screen").style.display = "none";
  
  // Show loading animation with fade-in effect
  const loading = document.getElementById("loading-animation");
  loading.style.display = "flex";
  
  // Trigger the opacity transition after a small delay
  setTimeout(() => {
    loading.classList.add("show");
    
    // Create particles for extra effect
    createParticles();
    
    // Transition to game scene after delay
    setTimeout(() => {
      loading.classList.remove("show");
      
      setTimeout(() => {
        loading.style.display = "none";
        document.getElementById("game-scene-house").style.display = "block";
        startGame();
      }, 500); // Match this with the CSS transition time
    }, 2000); // Total loading time
  }, 10);
});

function createParticles() {
  const loading = document.getElementById("loading-animation");
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    // Random properties
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 2;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    // Random color (white with slight hue variation)
    const hue = Math.random() * 60 - 30 + 200; // between 170-230 (bluish-purple range)
    particle.style.backgroundColor = `hsla(${hue}, 100%, 80%, 0.7)`;
    
    loading.appendChild(particle);
    
    // Add keyframes for this particle's unique animation
    const keyframes = `
      @keyframes float {
        0%, 100% {
          transform: translate(0, 0);
          opacity: 0.7;
        }
        50% {
          transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px);
          opacity: 1;
        }
      }
    `;
    
    const style = document.createElement("style");
    style.innerHTML = keyframes;
    document.head.appendChild(style);
  }
}

function startGame() {
      console.log("Game started!");
      // Your game logic for the first scene goes here
    }