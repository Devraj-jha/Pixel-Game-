document.getElementById("play-btn").addEventListener("click",
    ()=>{
        document.getElementById("opening-screen").style.display="none";
        document.getElementById("loading-animation").style.display = "block";

        setTimeout(() => {
        document.getElementById("loading-animation").style.display = "none";
        document.getElementById("game-scene-house").style.display = "block";
        startGame();
      }, 2000);
        
    }


    
)
function startGame() {
      console.log("Game started!");
      // Your game logic for the first scene goes here
    }