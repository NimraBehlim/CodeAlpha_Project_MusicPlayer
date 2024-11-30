console.log("Welcome to Spotify");
//initiaze the variable

let songIndex = 0;
let audioElement = new Audio('songs/kamleya.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from( document.getElementsByClassName('songItem'));
let songs= [

    {songName:'Kamleya', filePath:'songs/kamleya.mp3', coverPath:'covers/1.jpg' },
    {songName:'Tere Hawale', filePath:'songs/tere hawale.mpeg', coverPath:'covers/2.jpg' },
    {songName:'Aram Ata Hai', filePath:'songs/araam ata.mpeg', coverPath:'covers/3.jpg' },
    {songName:'Humdard', filePath:'songs/humdard.mpeg', coverPath:'covers/4.jpg' },
    {songName:'Hmara Huwa', filePath:'songs/hamara hwa.mpeg', coverPath:'covers/5.jpg' },
    {songName:'khamoshiyan', filePath:'songs/khamoshiyan.mpeg', coverPath:'covers/6.jpg' },
    {songName:'Love Me Like ', filePath:'songs/love me like.mp3', coverPath:'covers/7.jfif' },
    {songName:'Perfect', filePath:'songs/perfect.mp3', coverPath:'covers/8.jpg' },
    {songName:'Until I Found', filePath:'songs/until i found.mp3', coverPath:'covers/9.jpg' },
    {songName:'Love', filePath:'songs/12.mp3', coverPath:'covers/10.jpg' },
    
]

songItems.forEach((element, i) => {
    const imgElement = element.getElementsByTagName("img")[0];
    const songNameElement = element.getElementsByClassName("songName")[0];

    if (imgElement && songNameElement && songs[i]) {
        imgElement.src = songs[i].coverPath;
        songNameElement.innerText = songs[i].songName;
    }
});

//audioElement.play();
  
//handle play pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})
//listen to events

audioElement.addEventListener('timeupdate', ()=>{
   

    //seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value =progress;
})
myProgressBar.addEventListener ('change' ,()=>{
audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays =()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//       makeAllPlays();
//       index= parseInt(e.target.id);
//       e.target.classList.remove('fa-play-circle');
//       e.target.classList.add('fa-pause-circle');
//       audioElement.src='songs/${index+1}.mp3 || mpeg';
//       audioElement.currentTime = 0;
//       audioElement.play();
//       masterPlay.classList.remove('fa-play-circle');
//       masterPlay.classList.add('fa-pause-circle');
//     })
// })
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        
        const songIndex = parseInt(e.target.id); // Use correct index
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        
        // Set audio source dynamically from the `songs` array
        audioElement.src = songs[songIndex].filePath; 
        masterSongName.innerName = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        
        // Update master play button
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

// document.getElementById('next').addEventListener('click' ,()=>{
//     if(songIndex>=9){
//         songIndex=0;
//     }
//     else{
//         songIndex +=1;
//     }
//        // Set audio source dynamically from the `songs` array
//        audioElement.src = songs[songIndex].filePath;
//        masterSongName.innerName = songs[songIndex].songName; 
//        audioElement.currentTime = 0;
//        audioElement.play();
       
//        // Update master play button
//        masterPlay.classList.remove('fa-play-circle');
//        masterPlay.classList.add('fa-pause-circle');
// })

// document.getElementById('previous').addEventListener('click' ,()=>{
//     if(songIndex<=0){
//         songIndex=0;
//     }
//     else{
//         songIndex -=1;
//     }
//        // Set audio source dynamically from the `songs` array
//        audioElement.src = songs[songIndex].filePath; 
//        masterSongName.innerName = songs[songIndex].songName;
//        audioElement.play();
       
//        // Update master play button
//        masterPlay.classList.remove('fa-play-circle');
//        masterPlay.classList.add('fa-pause-circle');
// })
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    // Set audio source dynamically from the `songs` array
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();

    // Update master play button
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    // Set audio source dynamically from the `songs` array
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName; 
    audioElement.currentTime = 0;
    audioElement.play();

    // Update master play button
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
