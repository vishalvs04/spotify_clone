import {showtime, songs} from './songs.mjs';
import {all_songs} from "./songs.mjs";

showtime()
//Display songs as cards
display_songs();
function display_songs() {
  //populating Trending section
  let song_item = document.getElementById("song_item");
  let html = ``;
  for (let index = 0; index < songs.length; index++) {
    html += `<div class="card">
              <img
                src="${songs[index].cover_path}"
                alt="${songs[index].song_name.toLocaleLowerCase()}"
                class="song_pics"
              />
              <div class="songs">
                <span class="songname"
                  >${songs[index].song_name}
                  <hr class="line" />
                  <span class="artist_name">${songs[index].artist}</span
                  ><span class="timestamp">
                  <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play" id="${
                    songs[index].song_name
                  }"></i></span
                ></span>
              </div>
            </div>`;
  }
  //populating ALL SONGS section
  let allsongs = document.getElementById("all_songs");
  let html3 = "";
  for (let index = 0; index < all_songs.length; index++) {
    html3 += `<div class="card">
              <img
                src="${all_songs[index].cover_path}"
                alt="${all_songs[index].song_name.toLocaleLowerCase()}"
                class="song_pics"
              />
              <div class="songs">
                <span class="songname"
                  >${all_songs[index].song_name}
                  <hr class="line" />
                  <span class="artist_name">${all_songs[index].artist}</span
                  ><span class="timestamp">
                  <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play" id="${
                    all_songs[index].song_name
                  }"></i></span
                ></span>
              </div>
            </div>`;
  }
  allsongs.innerHTML = html3;
  song_item.innerHTML = html;
}

let song_index = 0;
let duration = document.getElementById("duration");

let master_play = document.getElementById("master_play");

let progressbar = document.getElementById("progress_bar");

let audioele = new Audio("");

//handle pause play
master_play.addEventListener("click", function () {
  if (audioele.paused || audioele.currentTime <= 0) {
    audioele.play();
    master_play.classList.remove("fa-circle-play");
    master_play.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
    gif.style.transition = "opacity 0.05s ease-in";
  } else {
    audioele.pause();
    master_play.classList.remove("fa-circle-pause");
    master_play.classList.add("fa-circle-play");
    gif.style.opacity = 0;
    gif.style.transition = "0.05s ease-out";
  }
});

//listen to events
audioele.addEventListener("timeupdate", function () {
  song_progress = parseInt((audioele.currentTime / audioele.duration) * 100);
  progressbar.value = song_progress;
});
//progress bar update
progressbar.addEventListener("change", () => {
  audioele.currentTime = (progressbar.value * audioele.duration) / 100;
});

//changing the button to plays from pause from another song played
const makeallplays = () => {
  Array.from(document.getElementsByClassName("song_item_play")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
      // console.log(element)
    }
  );
};
Array.from(document.getElementsByClassName("song_item_play")).forEach(
  (element) => {
    element.addEventListener("click", (e, index) => {
      makeallplays();
      song_index = e.target.id;
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      for (let i = 0; i < all_songs.length; i++) {
        if (song_index == `${all_songs[i].song_name}`) {
          audioele.src = `${all_songs[i].file_path}`;
          let song = document.getElementById("song");
          song.innerHTML = `<center>${all_songs[i].song_name} by<br>${all_songs[i].artist}</center>`;
          gif.style.opacity = 1;
          gif.style.transition = "opacity 0.05s ease-in";
        }
      }
      audioele.currentTime = 0;
      audioele.play();
      master_play.classList.remove("fa-circle-play");
      master_play.classList.add("fa-circle-pause");
    });
  }
);

//next button event
let song_id = 0;

document.getElementById("next").addEventListener("click", () => {
  if (song_id < all_songs.length) {
    if (song_id == all_songs.length - 1) {
      song_id = 0;
    } else {
      song_id += 1;
    }
  }
  song_index = all_songs[song_id].song_name;
  audioele.src = all_songs[song_id].file_path;
  audioele.currentTime = 0;
  audioele.play();
  master_play.classList.remove("fa-circle-play");
  master_play.classList.add("fa-circle-pause");
  let song = document.getElementById("song");
  song.innerText = `${all_songs[song_id].song_name} - ${all_songs[song_id].artist}`;
  gif.style.opacity = 1;
  gif.style.transition = "opacity 0.05s ease-in";
});

//previous button

document.getElementById("previous").addEventListener("click", () => {
  if (song_id<=0){
    song_id=all_songs.length-1
  }else{
    song_id-=1
  }
  song_index = all_songs[song_id].song_name;
  audioele.src = all_songs[song_id].file_path;
  audioele.currentTime = 0;
  audioele.play();
  master_play.classList.remove("fa-circle-play");
  master_play.classList.add("fa-circle-pause");
  let song = document.getElementById("song");
  song.innerText = `${all_songs[song_id].song_name} - ${all_songs[song_id].artist}`;
  gif.style.opacity = 1;
  gif.style.transition = "opacity 0.05s ease-in";
});