
let songs=[
{  
namee:'song 1',
path:'Audio Samples/canon.mp3',
artist:'wegz',
cover:"Audio Samples/song1.jpg"

},
{namee:"song2",
     path:"Audio Samples/dream.mp3",
     artist:'amr diab',
    cover:"Audio Samples/song2.jpg"
},
{ namee:"song3",
path:"Audio Samples/hero.mp3",
    artist:'hamada hlal',

    cover:"Audio Samples/song3.jpg"
},

{namee:"song4",
path:"Audio Samples/mombasa.mp3",
    artist:'tamer hosny',
    cover:"Audio Samples/song4.jpg"
}
]
let currentMusic =0;
const music= document.querySelector('#audio');

const seekBar=document.querySelector('.seek-bar');
const songName=document.querySelector('.song-name');
const artistName=document.querySelector('.artist-name');
const disk=document.querySelector('.disk');
const currentTime=document.querySelector('.current-time');
const musicDuration=document.querySelector('.song-duration');
const playBtn=document.querySelector('.play-btn');
const forwardBtn=document.querySelector('.forward-btn');
const backwardBtn=document.querySelector('.backward-btn');
const repeat=document.querySelector('.repeat');
const shuffle=document.querySelector('.shuffle');
const viewbtn=document.querySelector(".viewbtn")
function add2(){
for(var i=0;i<songs.length ;i++)
{ 
    var aud=document.createElement("audio")
    aud.setAttribute("controls", "controls")
    document.getElementById("contsongs").appendChild(aud)
    aud.src=songs[i].path;}
}

viewbtn.addEventListener("click", ()=>{
var form=document.createElement("form");
var inpt1=document.createElement("input");
inpt1.setAttribute("type","text");
inpt1.setAttribute("id","songname")

inpt1.setAttribute('placeholder',"enter song name")


 form.appendChild(inpt1)
var inptpath=document.createElement("input");
inptpath.setAttribute("type","file");
inptpath.setAttribute("id","music");
form.appendChild(inptpath)
var inptart=document.createElement("input");
inptart.setAttribute("type","text")
inptart.setAttribute('placeholder',"artist name")
inptart.setAttribute("id","artist_name")
form.appendChild(inptart)
var inpimg=document.createElement("input")
inpimg.setAttribute("type","file")
inpimg.setAttribute("id","img")
form.appendChild(inpimg)
var inptsub=document.createElement("input")
inptsub.setAttribute("type","submit");
inptsub.setAttribute("id","submit");


form.appendChild(inptsub)
var parent=document.getElementById("parent")

parent.appendChild(form);
inptsub.setAttribute("onclick","whensub()");
})
function whensub(){
 let s=   document.getElementById("songname")
    var file=document.getElementById("music")
    let art=document.getElementById("artist_name")
    let mg=document.getElementById("img")
    let len=songs.length;
      
    songs[len].namee=s.value;
    songs[len].path=file.src;
    songs[len].artist=art.value;
    songs[len].cover=img.src;

    alert(file.src)
    add2();

}
add2()
shuffle.addEventListener("click",()=>{
    shuffle.classList.toggle("changeback")
    let currentMusic =Math.ceil( Math.random()*songs.length);
    setMusic(currentMusic);
    playMusic();
}

)

repeat.addEventListener("click",()=>{
    repeat.classList.toggle("changeback")
    music.setAttribute("loop","loop")
    playMusic();
    
} )

playBtn.addEventListener("click",()=>{
    if(playBtn.className.includes('pause'))
    {
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause')
    disk.classList.toggle('play')
})


const playMusic=()=>{
music.play();
playBtn.classList.remove('pause')
disk.classList.add('play')

}

const setMusic=(i)=>{
    seekBar.value=0;
    let song=songs[i];
    currentMusic=i;
    if(song){
        music.src=song.path;

    }
    songName.innerHTML=song.namee;
    artistName.innerHTML=song.artist;
    disk.style.backgroundImage=`url('${song.cover}')`
currentTime.innerHTML="00:00"
setTimeout(()=>{seekBar.max=music.musicDuration;
    musicDuration.innerHTML= formatTime(music.duration)
}
,300)

}
setMusic(0);
const formatTime=(time) =>{
    let min =Math.floor(time/60)
    if(min<10){
        min=`0${min}`;

    }
    let sec=Math.floor(time%60);
    if(sec<10)
{
    sec=`0${sec}`;
} 
return `${min}:${sec}`
}
setInterval(()=>{
seekBar.value=music.currentTime;
currentTime.innerHTML=formatTime(music.currentTime);
if(Math.floor( music.currentTime)== Math.floor(seekBar.max)){
    forwardBtn.click();
}
},500)
seekBar.addEventListener('change',()=>{
    music.currentTime=seekBar.value;

})

forwardBtn.addEventListener('click',()=>{
if(currentMusic >=songs.length-1){
    currentMusic=0;
} else{
    currentMusic++;
}
setMusic(currentMusic);
playMusic();
})
backwardBtn.addEventListener('click',()=>{
    if(currentMusic <=0){
        currentMusic=songs.length-1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
    })

