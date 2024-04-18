console.log("welcome kv")
//initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let banner=document.getElementById('banner');


let songs=[
    {songName:"Let me love you-Justin",filePath:"songs/song/1.mp3",coverPath:"covers/1_cover.jpg"},
    {songName:"Arjan Vailly - Animal",filePath:"songs/song/2.mp3",coverPath:"covers/2_cover.jpg"},
    {songName:"Hua Main - Animal",filePath:"songs/song/3.mp3",coverPath:"covers/3_cover.jpg"},
    {songName:"Pehle Bhi Main - Animal",filePath:"songs/song/4.mp3",coverPath:"covers/4_cover.jpg"},
    {songName:"Ilzaam - Arjun Kanungo",filePath:"songs/song/5.mp3",coverPath:"covers/5_cover.jpg"},
]


songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();

//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        
    }
    else{
        // makeAllPlays();
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }

});

//listen events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=((myProgressBar.value*audioElement.duration)/100);
});

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        gif.style.opacity=1;
        audioElement.play();
        masterSongName.innerText =songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        
        banner.src=songs[songIndex-1].coverPath;
        

    })

})
// next song play
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }

    makeAllPlays();
    let index=document.getElementById(songIndex);
    index.classList.remove('fa-circle-play');
    index.classList.add('fa-circle-pause');
    masterSongName.innerText =songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    gif.style.opacity=1;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    banner.src=songs[songIndex-1].coverPath;
   
})
// previous song play
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=5;
    }
    else{
        songIndex -=1;
    }
    
    makeAllPlays();
    let index=document.getElementById(songIndex);
    index.classList.remove('fa-circle-play');
    index.classList.add('fa-circle-pause');
    masterSongName.innerText =songs[songIndex-1].songName;
    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    gif.style.opacity=1;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    banner.src=songs[songIndex-1].coverPath;
    
})