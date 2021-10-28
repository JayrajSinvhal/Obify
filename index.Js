alert("Welcome to Obify! For more info please read the about channel!!");
console.log(
  "Hey this is obify and if you are looking to hack me well FUCK you!"
);
let songItems = Array.from(document.getElementsByClassName("songItems"));
var songIndex = 0;
var masterPlay = document.getElementById("masterPlay");
let audioElememt = new Audio("./Songs/1.mp3");
let gif = document.getElementById("Playings");
let myProgressBar = document.getElementById("myProgressBar");
//audioElememt.play();
let songs = [
  { songName: "Himitsu", filePath: "/Songs/1.mp3" },
  { songName: "Small town boy", filePath: "/Songs/3.mp3" },
  { songName: "Bad Liar", filePath: "/Songs/2.mp3" },
  { songName: "Stereo Heart", filePath: "/Songs/4.mp3" },
  { songName: "On My Way", filePath: "/Songs/8.mp3" },
  { songName: "Blue", filePath: "/Songs/5.mp3" },
  { songName: "Can We Kiss Forever?", filePath: "/Songs/6.mp3" },
  { songName: "Call Me By Your Name", filePath: "/Songs/7.mp3" },
  { songName: "Industry Baby", filePath: "/Songs/9.mp3" },
  { songName: "Payphone", filePath: "/Songs/10.mp3" },
  { songName: "Fight Back", filePath: "/Songs/11.mp3" },
  { songName: "See You Again", filePath: "/Songs/12.mp3" },
  { songName: "Darkside", filePath: "/Songs/13.mp3" },
  { songName: "Beggin", filePath: "/Songs/14.mp3" },
  { songName: "Your Perfect", filePath: "/Songs/15.mp3" },
  { songName: "Shape Of You", filePath: "/Songs/16.mp3" },
  { songName: "Believer", filePath: "/Songs/17.mp3" },
  { songName: "Despacito", filePath: "/Songs/18.mp3" },
  { songName: "Girls Like You", filePath: "/Songs/19.mp3" },
  { songName: "Memories", filePath: "/Songs/20.mp3" },
  { songName: "Cold", filePath: "/Songs/21.mp3" },
  { songName: "Greatful", filePath: "/Songs/22.mp3" },
  { songName: "Darkside", filePath: "/Songs/23.mp3" },
  { songName: "Cradles", filePath: "/Songs/24.mp3" },
  { songName: "Stay", filePath: "/Songs/25.mp3" },
  { songName: "Careless", filePath: "/Songs/26.mp3" },
  { songName: "Hey Child", filePath: "/Songs/27.mp3" },
];

songItems.forEach((element, i) => {
  //console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].filePath;
});

masterPlay.addEventListener("click", () => {
  if (audioElememt.paused || audioElememt.currentTime <= 0) {
    audioElememt.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElememt.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElememt.addEventListener("timeupdate", () => {
  console.log("time update");
  progress = parseInt((audioElememt.currentTime / audioElememt.duration) * 100);
  //console.log(progress);
  myProgressBar.value = progress;
  progress = myProgressBar;
});

myProgressBar.addEventListener("change", () => {
  audioElememt.currentTime =
    (myProgressBar.value * audioElememt.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-pause-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElememt.src = `songs/${index}.mp3`;
      audioElememt.currentTime = 0;
      audioElememt.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
