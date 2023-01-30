// Initialize Variables
let songIndex = 0;
let songs = [
    {songName: "Jim Yosef - Volcano (feat. Scarlett) [NCS Release]",
    filePath: "assets/songs/Jim Yosef - Volcano (feat. Scarlett) [NCS Release].mp3",
    coverPath: "assets/artist-covers/volcano.jpeg"},
]
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");

// Play/Pause Button Event Listener
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Progress Bar Event Listener
audioElement.addEventListener('timeupdate',()=>{
    
    let progress = parseInt(audioElement.currentTime * 100 / audioElement.duration);

    progressBar.value = progress;
});

// Progress Bar Change Event Listener
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})