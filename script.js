import { showtime, songs } from "./songs.mjs";
import { all_songs } from "./songs.mjs";
import { all_songs1 } from "./songs.mjs";
import { all_songs2 } from "./songs.mjs";

showtime();
//Display songs as cards
let current_playlist = [];
const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};
let device_type = getDeviceType();
// console.log(device_type);
if (device_type == "desktop") {
  current_playlist = songs;
  let link_sheet = document.getElementById("styles");
  link_sheet.href = "./style.css";
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
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play trending" id="${
                      songs[index].song_name
                    }" name="trending"></i></span
                  ></span>
                </div>
              </div>`;
    }
    //populating ALL SONGS section
    let allsongs = document.getElementById("all_songs");
    let html1 = "";
    for (let index = 0; index < all_songs.length; index++) {
      html1 += `<div class="card">
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
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs" id="${
                      all_songs[index].song_name
                    }" name="allsongs"></i></span
                  ></span>
                </div>
              </div>`;
    }
    let allsongs1 = document.getElementById("all_songs1");
    let html2 = "";
    for (let index = 0; index < all_songs1.length; index++) {
      html2 += `<div class="card">
                <img
                  src="${all_songs1[index].cover_path}"
                  alt="${all_songs1[index].song_name.toLocaleLowerCase()}"
                  class="song_pics"
                />
                <div class="songs">
                  <span class="songname"
                    >${all_songs1[index].song_name}
                    <hr class="line" />
                    <span class="artist_name">${all_songs1[index].artist}</span
                    ><span class="timestamp">
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs1" id="${
                      all_songs1[index].song_name
                    }" name="recently_played"></i></span
                  ></span>
                </div>
              </div>`;
    }
    let allsongs2 = document.getElementById("all_songs2");
    let html3 = "";
    for (let index = 0; index < all_songs2.length; index++) {
      html3 += `<div class="card">
                <img
                  src="${all_songs2[index].cover_path}"
                  alt="${all_songs2[index].song_name.toLocaleLowerCase()}"
                  class="song_pics"
                />
                <div class="songs">
                  <span class="songname"
                    >${all_songs2[index].song_name}
                    <hr class="line" />
                    <span class="artist_name">${all_songs2[index].artist}</span
                    ><span class="timestamp">
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs2" id="${
                      all_songs2[index].song_name
                    }" name="freq_played"></i></span
                  ></span>
                </div>
              </div>`;
    }
    song_item.innerHTML = html;
    allsongs.innerHTML = html1;
    allsongs1.innerHTML = html2;
    allsongs2.innerHTML = html3;
  }

  let song_index;
  // let duration = document.getElementById("duration");
  let tracking_audioele;
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
    let song_progress = parseInt(
      (audioele.currentTime / audioele.duration) * 100
    );
    let time_elap = document.getElementById("time_elapsed");
    let seconds = 0,
      minutes = 0;
    seconds = parseInt(audioele.currentTime);
    if (seconds < 60) {
      if (seconds < 10) {
        time_elap.innerText = `0${minutes}:0${seconds}`;
      } else {
        time_elap.innerText = `0${minutes}:${seconds}`;
      }
    } else {
      let duration = parseInt(audioele.currentTime);
      minutes = parseInt(duration / 60);
      let new_seconds = (duration / 60) % 1;
      if (minutes < 10) {
        if (new_seconds < 0.16) {
          time_elap.innerText = `0${minutes}:0${parseInt(new_seconds * 60)}`;
        } else if (new_seconds >= 0.1) {
          time_elap.innerText = `0${minutes}:${parseInt(new_seconds * 60)}`;
        }
      } else {
        if (new_seconds < 0.16) {
          time_elap.innerText = `${minutes}:0${parseInt(new_seconds * 60)}`;
        } else {
          time_elap.innerText = `${minutes}:${parseInt(new_seconds * 60)}`;
        }
      }
    }
    progressbar.value = song_progress;
    let total_duration = document.getElementById("total_duration");
    let total_minutes = parseInt(audioele.duration / 60);
    let total_seconds = ((audioele.duration / 60) % 1) * 60;
    // console.log(total_seconds);
    if (total_minutes < 10) {
      if (total_seconds < 10) {
        total_duration.innerText = `0${parseInt(
          audioele.duration / 60
        )}:0${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      } else {
        total_duration.innerText = `0${parseInt(
          audioele.duration / 60
        )}:${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      }
    } else if (total_minutes >= 10) {
      if (total_seconds < 10) {
        total_duration.innerText = `${parseInt(
          audioele.duration / 60
        )}:0${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      } else {
        total_duration.innerText = `${parseInt(
          audioele.duration / 60
        )}:${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      }
    }
  });
  //progress bar update
  progressbar.addEventListener("change", () => {
    audioele.currentTime = (progressbar.value * audioele.duration) / 100;
    tracking_audioele = audioele.currentTime;
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
  let song_id = 0;
  Array.from(document.getElementsByClassName("song_item_play")).forEach(
    (element) => {
      element.addEventListener("click", function play_again(e) {
        makeallplays();
        let i = 0;
        song_index = e.target.id;

        if (e.target.attributes.name.value == "trending") {
          current_playlist = songs;
        } else if (e.target.attributes.name.value == "allsongs") {
          current_playlist = all_songs;
        } else if (e.target.attributes.name.value == "recently_played") {
          current_playlist = all_songs1;
        } else if (e.target.attributes.name.value == "freq_played") {
          current_playlist = all_songs2;
        }
        let j = 0;
        while (j < current_playlist.length) {
          if (current_playlist[j].song_name == e.target.id) {
            song_id = current_playlist[j].id;
            break;
          } else {
            j++;
          }
        }

        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        // console.log(i);
        for (i; i < current_playlist.length; i++) {
          if (song_index == `${current_playlist[i].song_name}`) {
            // song_id=current_playlist[i].id
            audioele.src = `${current_playlist[i].file_path}`;
            audioele.play();
            let song = document.getElementById("song");
            song.innerHTML = `<center>${current_playlist[i].song_name} by<br>${current_playlist[i].artist}</center>`;
            gif.style.opacity = 1;
            gif.style.transition = "opacity 0.05s ease-in";
          }
        }

        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
      });
    }
  );
  //next button event

  document.getElementById("next").addEventListener("click", () => {
    if (song_id <= current_playlist.length) {
      if (song_id == current_playlist.length) {
        song_index = current_playlist[song_id - 1].song_name;
        audioele.src = current_playlist[song_id - 1].file_path;
        audioele.currentTime = 0;

        song_id = 0;
      } else {
        song_id += 1;
      }
    }

    if (song_id == current_playlist.length) {
      song_id == current_playlist.length;
    } else if (song_id - 1 == -1) {
      song_id = 1;
    }
    song_index = current_playlist[song_id - 1].song_name;
    audioele.src = current_playlist[song_id - 1].file_path;
    audioele.currentTime = 0;
    audioele.play();
    master_play.classList.remove("fa-circle-play");
    master_play.classList.add("fa-circle-pause");
    let song = document.getElementById("song");
    song.innerText = `${current_playlist[song_id - 1].song_name} - ${
      current_playlist[song_id - 1].artist
    }`;
    gif.style.opacity = 1;
    gif.style.transition = "opacity 0.05s ease-in";
  });

  //previous button

  document.getElementById("previous").addEventListener("click", () => {
    if (song_id <= 0) {
      song_id = current_playlist.length - 1;
    } else {
      song_id -= 1;
    }
    song_index = current_playlist[song_id].song_name;
    audioele.src = current_playlist[song_id].file_path;
    audioele.currentTime = 0;
    audioele.play();
    master_play.classList.remove("fa-circle-play");
    master_play.classList.add("fa-circle-pause");
    let song = document.getElementById("song");
    song.innerText = `${current_playlist[song_id].song_name} - ${current_playlist[song_id].artist}`;
    gif.style.opacity = 1;
    gif.style.transition = "opacity 0.05s ease-in";
  });
} else if (device_type == "mobile" || device_type == "tablet") {
  current_playlist = songs;
  let link_stylesheet = document.getElementById("styles");
  link_stylesheet.href = "./mobile.css";
  let icons = document.getElementsByClassName("icons");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.remove("fa-2x");
    icons[i].classList.add("fa-xs");
  }
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
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play trending" id="${
                      songs[index].song_name
                    }" name="trending"></i></span
                  ></span>
                </div>
              </div>`;
    }
    //populating ALL SONGS section
    let allsongs = document.getElementById("all_songs");
    let html1 = "";
    for (let index = 0; index < all_songs.length; index++) {
      html1 += `<div class="card">
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
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs" id="${
                      all_songs[index].song_name
                    }" name="allsongs"></i></span
                  ></span>
                </div>
              </div>`;
    }
    let allsongs1 = document.getElementById("all_songs1");
    let html2 = "";
    for (let index = 0; index < all_songs1.length; index++) {
      html2 += `<div class="card">
                <img
                  src="${all_songs1[index].cover_path}"
                  alt="${all_songs1[index].song_name.toLocaleLowerCase()}"
                  class="song_pics"
                />
                <div class="songs">
                  <span class="songname"
                    >${all_songs1[index].song_name}
                    <hr class="line" />
                    <span class="artist_name">${all_songs1[index].artist}</span
                    ><span class="timestamp">
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs1" id="${
                      all_songs1[index].song_name
                    }" name="recently_played"></i></span
                  ></span>
                </div>
              </div>`;
    }
    let allsongs2 = document.getElementById("all_songs2");
    let html3 = "";
    for (let index = 0; index < all_songs2.length; index++) {
      html3 += `<div class="card">
                <img
                  src="${all_songs2[index].cover_path}"
                  alt="${all_songs2[index].song_name.toLocaleLowerCase()}"
                  class="song_pics"
                />
                <div class="songs">
                  <span class="songname"
                    >${all_songs2[index].song_name}
                    <hr class="line" />
                    <span class="artist_name">${all_songs2[index].artist}</span
                    ><span class="timestamp">
                    <i class="fa-regular fa-1.5x fa-circle-play playbutton song_item_play allsongs2" id="${
                      all_songs2[index].song_name
                    }" name="freq_played"></i></span
                  ></span>
                </div>
              </div>`;
    }
    song_item.innerHTML = html;
    allsongs.innerHTML = html1;
    allsongs1.innerHTML = html2;
    allsongs2.innerHTML = html3;
  }

  let song_index;
  // let duration = document.getElementById("duration");
  let tracking_audioele;
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
    let song_progress = parseInt(
      (audioele.currentTime / audioele.duration) * 100
    );
    let time_elap = document.getElementById("time_elapsed");
    let seconds = 0,
      minutes = 0;
    seconds = parseInt(audioele.currentTime);
    if (seconds < 60) {
      if (seconds < 10) {
        time_elap.innerText = `0${minutes}:0${seconds}`;
      } else {
        time_elap.innerText = `0${minutes}:${seconds}`;
      }
    } else {
      let duration = parseInt(audioele.currentTime);
      minutes = parseInt(duration / 60);
      let new_seconds = (duration / 60) % 1;
      if (minutes < 10) {
        if (new_seconds < 0.16) {
          time_elap.innerText = `0${minutes}:0${parseInt(new_seconds * 60)}`;
        } else if (new_seconds >= 0.1) {
          time_elap.innerText = `0${minutes}:${parseInt(new_seconds * 60)}`;
        }
      } else {
        if (new_seconds < 0.16) {
          time_elap.innerText = `${minutes}:0${parseInt(new_seconds * 60)}`;
        } else {
          time_elap.innerText = `${minutes}:${parseInt(new_seconds * 60)}`;
        }
      }
    }
    progressbar.value = song_progress;
    let total_duration = document.getElementById("total_duration");
    let total_minutes = parseInt(audioele.duration / 60);
    let total_seconds = ((audioele.duration / 60) % 1) * 60;
    // console.log(total_seconds);
    if (total_minutes < 10) {
      if (total_seconds < 10) {
        total_duration.innerText = `0${parseInt(
          audioele.duration / 60
        )}:0${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      } else {
        total_duration.innerText = `0${parseInt(
          audioele.duration / 60
        )}:${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      }
    } else if (total_minutes >= 10) {
      if (total_seconds < 10) {
        total_duration.innerText = `${parseInt(
          audioele.duration / 60
        )}:0${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      } else {
        total_duration.innerText = `${parseInt(
          audioele.duration / 60
        )}:${parseInt(((audioele.duration / 60) % 1) * 60)}`;
      }
    }
  });
  //progress bar update
  progressbar.addEventListener("change", () => {
    audioele.currentTime = (progressbar.value * audioele.duration) / 100;
    tracking_audioele = audioele.currentTime;
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
  let song_id = 0;
  Array.from(document.getElementsByClassName("song_item_play")).forEach(
    (element) => {
      element.addEventListener("click", function play_again(e) {
        makeallplays();
        let i = 0;
        song_index = e.target.id;

        if (e.target.attributes.name.value == "trending") {
          current_playlist = songs;
        } else if (e.target.attributes.name.value == "allsongs") {
          current_playlist = all_songs;
        } else if (e.target.attributes.name.value == "recently_played") {
          current_playlist = all_songs1;
        } else if (e.target.attributes.name.value == "freq_played") {
          current_playlist = all_songs2;
        }
        let j = 0;
        while (j < current_playlist.length) {
          if (current_playlist[j].song_name == e.target.id) {
            song_id = current_playlist[j].id;
            break;
          } else {
            j++;
          }
        }

        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        // console.log(i);
        for (i; i < current_playlist.length; i++) {
          if (song_index == `${current_playlist[i].song_name}`) {
            // song_id=current_playlist[i].id
            audioele.src = `${current_playlist[i].file_path}`;
            audioele.play();
            let song = document.getElementById("song");
            song.innerHTML = `<center>${current_playlist[i].song_name} by<br>${current_playlist[i].artist}</center>`;
            gif.style.opacity = 1;
            gif.style.transition = "opacity 0.05s ease-in";
          }
        }

        master_play.classList.remove("fa-circle-play");
        master_play.classList.add("fa-circle-pause");
      });
    }
  );
  //next button event

  document.getElementById("next").addEventListener("click", () => {
    if (song_id <= current_playlist.length) {
      if (song_id == current_playlist.length) {
        song_index = current_playlist[song_id - 1].song_name;
        audioele.src = current_playlist[song_id - 1].file_path;
        audioele.currentTime = 0;

        song_id = 0;
      } else {
        song_id += 1;
      }
    }

    if (song_id == current_playlist.length) {
      song_id == current_playlist.length;
    } else if (song_id - 1 == -1) {
      song_id = 1;
    }
    song_index = current_playlist[song_id - 1].song_name;
    audioele.src = current_playlist[song_id - 1].file_path;
    audioele.currentTime = 0;
    audioele.play();
    master_play.classList.remove("fa-circle-play");
    master_play.classList.add("fa-circle-pause");
    let song = document.getElementById("song");
    song.innerText = `${current_playlist[song_id - 1].song_name} - ${
      current_playlist[song_id - 1].artist
    }`;
    gif.style.opacity = 1;
    gif.style.transition = "opacity 0.05s ease-in";
  });

  //previous button

  document.getElementById("previous").addEventListener("click", () => {
    if (song_id <= 0) {
      song_id = current_playlist.length - 1;
    } else {
      song_id -= 1;
    }
    song_index = current_playlist[song_id].song_name;
    audioele.src = current_playlist[song_id].file_path;
    audioele.currentTime = 0;
    audioele.play();
    master_play.classList.remove("fa-circle-play");
    master_play.classList.add("fa-circle-pause");
    let song = document.getElementById("song");
    song.innerText = `${current_playlist[song_id].song_name} - ${current_playlist[song_id].artist}`;
    gif.style.opacity = 1;
    gif.style.transition = "opacity 0.05s ease-in";
  });
}
