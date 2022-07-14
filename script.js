//setting good morning/afternoon/evening message according to the currentTime
showtime();
function showtime() {
  let greet = document.getElementById("greet");
  let date = new Date();
  hour = date.getHours();
  if (hour >= 4 && hour < 12) {
    greet.innerText = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greet.innerText = "Good Afternoon";
  } else if (hour < 4 || hour >= 18) {
    greet.innerText = "Good Evening";
  }
}
//JSON FILE OF SONGS
let songs = [
  {
    song_name: "Love The Way You Lie",
    artist: "Rihanna ft. Eminem",
    file_path: "songs/Eminem - Love The Way You Lie (ft. Rihanna).mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
  },
  {
    song_name: "Wishlist",
    artist: "Dino James ft. Kaprila",
    file_path: "songs/Wishlist - Dino James.mp3",
    cover_path: "images/song covers/Wishlist-dino.jpg",
  },
  {
    song_name: "Baarishien",
    artist: "Atif Aslam",
    file_path: "songs/Baarishein - Atif Aslam 128 Kbps.mp3",
    cover_path: "images/song covers/baarishein atif aslam.jpg",
  },
  {
    song_name: "Baarishein",
    artist: "Anuv Jain",
    file_path: "songs/Baarishien-Anuv-Jain.mp3",
    cover_path: "images/song covers/Baarishein-anuv-jain.jpg",
  },
  {
    song_name: "Born To Shine",
    artist: "Diljit Dosanjh",
    file_path: "songs/Born To Shine - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/born-to-shine-diljit.jfif",
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
  }
];
let all_songs = [
  {
    song_name: "Alone Pt. II",
    artist: "Alan Walker ft. Ava",
    file_path: "songs/New folder/Alone, Pt. II_320(PagalWorld.com.se).mp3",
    cover_path: "images/song covers/alone_part2.jpg",
  },
  {
    song_name: "Counting Stars",
    artist: "One Republic",
    file_path:
      "songs/New folder/Counting Stars - OneRepublic_320- [PagalWorld.NL].mp3",
    cover_path: "images/song covers/counting_stars.jpg",
  },
  {
    song_name: "Never Love Again",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Never Love Again (Pendona.com).mp3",
    cover_path: "images/song covers/never_love_again.jfif",
  },
  {
    song_name: "Stronger Than I Was",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Stronger than I was.mp3",
    cover_path: "images/song covers/stronger_than_i_was.jpg",
  },
  {
    song_name: "Kings Never Die",
    artist: "Eminem ft. Gwen Stefani",
    file_path:
      "songs/New folder/Eminem Kings Never Die Lyric Video ft Gwen Stefani.mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
  },
  {
    song_name: "Higher",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem_-_Higher.mp3",
    cover_path: "images/song covers/higher.jpg",
  },
  {
    song_name: "Space Bound",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem+Space+Bound+Official+Video.mp3",
    cover_path: "images/song covers/space_bound.jfif",
  },
  {
    song_name: "Faded",
    artist: "Alan Walker",
    file_path: "songs/New folder/Faded_320(PaglaSongs).mp3",
    cover_path: "images/song covers/faded.jpg",
  },
  {
    song_name: "Remember The Name",
    artist: "Fort Minor",
    file_path:
      "songs/New folder/Fort_Minor_feat._Styles_Of_Beyond_-_Remember_the_Name_feat._Styles_of_Beyond_(ColdMP3.com).mp3",
    cover_path: "images/song covers/remember_the_name.jfif",
  },
  {
    song_name: "Goat",
    artist: "Diljit Dosanjh",
    file_path: "songs/New folder/G.O.A.T - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/goat.jfif",
  },
  {
    song_name: "Gratefull",
    artist: "Neffex",
    file_path: "songs/New folder/Grateful_320(PaglaSongs).mp3",
    cover_path: "images/song covers/gratefull.jfif",
  },
  {
    song_name: "Thunder",
    artist: "Imagine Dragons",
    file_path:
      "songs/New folder/Imagine Dragons - Thunder Mp3 Song Download.mp3",
    cover_path: "images/song covers/thunder.jfif",
  },
  {
    song_name: "In The End",
    artist: "Linkin Park",
    file_path: "songs/New folder/In-The-End---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/in_the_end.jpg",
  },
  {
    song_name: "Last One Standing",
    artist: "Eminem",
    file_path: "songs/New folder/Last-One-Standing_320(PagalWorld).mp3",
    cover_path: "images/song covers/last_one_standing.jpg",
  },
  {
    song_name: "Lose Yourself",
    artist: "Eminem",
    file_path: "songs/New folder/Lose-Yourself---Eminem(pagolworld.nl).mp3",
    cover_path: "images/song covers/lose_yourself.jpg",
  },
  {
    song_name: "Numb",
    artist: "Linkin Park",
    file_path: "songs/New folder/Numb---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/numb.jpg",
  },
  {
    song_name: "The Spectre",
    artist: "Alan Walker",
    file_path: "songs/New folder/The-Spectre---Alan-Walker(pagolworld.nl).mp3",
    cover_path: "images/song covers/spectre.png",
  },
  {
    song_name: "Love The Way You Lie",
    artist: "Rihanna ft. Eminem",
    file_path: "songs/Eminem - Love The Way You Lie (ft. Rihanna).mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
  },
  {
    song_name: "Wishlist",
    artist: "Dino James ft. Kaprila",
    file_path: "songs/Wishlist - Dino James.mp3",
    cover_path: "images/song covers/Wishlist-dino.jpg",
  },
  {
    song_name: "Baarishien",
    artist: "Atif Aslam",
    file_path: "songs/Baarishein - Atif Aslam 128 Kbps.mp3",
    cover_path: "images/song covers/baarishein atif aslam.jpg",
  },
  {
    song_name: "Baarishein",
    artist: "Anuv Jain",
    file_path: "songs/Baarishien-Anuv-Jain.mp3",
    cover_path: "images/song covers/Baarishein-anuv-jain.jpg",
  },
  {
    song_name: "Born To Shine",
    artist: "Diljit Dosanjh",
    file_path: "songs/Born To Shine - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/born-to-shine-diljit.jfif",
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
  },
];
//Display songs as cards
display_songs();
function display_songs() {
  let song_item = document.getElementById("song_item");
  let html = ``;
  let your_fav = document.getElementById("your_fav");
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
  
  let allsongs=document.getElementById('all_songs')
  let html3=''
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
  allsongs.innerHTML=html3
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