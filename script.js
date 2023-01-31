// Initialize Variables
let songIndex = 0;
let songs = [
    {songName: "Jim Yosef - Volcano (feat. Scarlett) [NCS Release]",
    filePath: "assets/songs/Jim Yosef - Volcano (feat. Scarlett) [NCS Release].mp3",
    coverPath: "assets/artist-covers/volcano.jpeg"},

    {songName: "Jo. Cohen - Sympathy (feat. Coral Oulu) [NCS Release]",
    filePath: "assets/songs/Jo. Cohen - Sympathy (feat. Coral Oulu) [NCS Release].mp3",
    coverPath: "assets/artist-covers/sympathy.jpeg"},
]
let audioElement = new Audio(songs[songIndex].filePath);
let masterPlay = document.getElementById("masterPlay");
let progressBar = document.getElementById("progressBar");
let backButton = document.getElementById("backButton");
let forwardButton = document.getElementById("forwardButton");

function playSong(){
    audioElement.play();
    if(masterPlay.classList.contains('fa-play-circle')){
        masterPlay.classList.remove('fa-play-circle');
    }
    masterPlay.classList.add('fa-pause-circle');
}

function pauseSong(){
    audioElement.pause();
    if(masterPlay.classList.contains('fa-pause-circle')){
        masterPlay.classList.remove('fa-pause-circle');
    }
    masterPlay.classList.add('fa-play-circle');
}

function previousSong(){
    if(songIndex > 0){
        songIndex--;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    playSong();
    progressBar.value = 0;
}

function nextSong(){
    if(songIndex < songs.length - 1){
        songIndex++;
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    playSong();
    progressBar.value = 0;
}

window.addEventListener('keydown', (e) => {
    if(e.keyCode == 32){ // Spacebar
        if(audioElement.paused || audioElement.currentTime <= 0) playSong();
        else pauseSong();
    } 
})

// Play/Pause Button Event Listener
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0) playSong();
    else pauseSong();
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

// Back Button Event Listener
backButton.addEventListener('click',()=>{
    previousSong();
})

// Forward Button Event Listener
forwardButton.addEventListener('click',()=>{
    nextSong();
})