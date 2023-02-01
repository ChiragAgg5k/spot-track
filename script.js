// Initialize Variables
let songIndex = 0;
let songs = [
    {songName: "Jim Yosef - Volcano (feat. Scarlett)",
    filePath: "assets/songs/Jim Yosef - Volcano (feat. Scarlett) [NCS Release].mp3",
    coverPath: "assets/artist-covers/volcano.jpeg"},

    {songName: "Jo. Cohen - Sympathy (feat. Coral Oulu)",
    filePath: "assets/songs/Jo. Cohen - Sympathy (feat. Coral Oulu) [NCS Release].mp3",
    coverPath: "assets/artist-covers/sympathy.jpeg"},

    {songName: "MADZI - What You Gonna Do",
    filePath: "assets/songs/MADZI - What You Gonna Do [NCS Release].mp3",
    coverPath: "assets/artist-covers/madzi.png"},

    {songName: "Andrew A & VIANI - Lost",
    filePath: "assets/songs/Andrew A & VIANI - Lost [NCS Release].mp3",
    coverPath: "assets/artist-covers/lost.png"},

    {songName: "Yonexx & lunar - Need You",
    filePath: "assets/songs/Yonexx & lunar - Need You [NCS Release].mp3",
    coverPath: "assets/artist-covers/need_you.png"},

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
    }else songIndex = songs.length - 1;

    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    playSong();
    progressBar.value = 0;
}

function nextSong(){
    if(songIndex < songs.length - 1){
        songIndex++;
    }else songIndex = 0;

    audioElement.src = songs[songIndex].filePath;
    audioElement.load();
    playSong();
    progressBar.value = 0;
}

// Keyboard Event Listener
window.addEventListener('keydown', (e) => {
    if(e.keyCode == 32){ // Spacebar
        if(audioElement.paused || audioElement.currentTime <= 0) playSong();
        else pauseSong();
    } 

    if(e.keyCode == 37){ // Left Arrow
        previousSong();
    }

    if(e.keyCode == 39){ // Right Arrow
        nextSong();
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
    if(progress == 100){
        nextSong();
    }
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