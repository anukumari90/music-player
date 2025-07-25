
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");

// Step 2: Add click event on the button
playBtn.addEventListener("click", () => {
    //if (audio.paused) {
        audio.play();                      // Play the song
       // playBtn.textContent = "Pause"; // Change button text to Pause
    //}
    // else {
    //     audio.pause();                     // Pause the song
    //     playPauseBtn.textContent = "Play";  // Change text back to Play
    // }
});
pauseBtn.addEventListener("click", () => {
   //if(!audio.play) {
        audio.pause();                      // Play the song
        //pauseBtn.textContent = "play"; 
    //}
});
