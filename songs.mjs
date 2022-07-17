const songs = [
  {
    song_name: "Love The Way You Lie",
    artist: "Rihanna ft. Eminem",
    file_path: "songs/Eminem - Love The Way You Lie (ft. Rihanna).mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
    list:'trending',
  },
  {
    song_name: "Wishlist",
    artist: "Dino James ft. Kaprila",
    file_path: "songs/Wishlist - Dino James.mp3",
    cover_path: "images/song covers/Wishlist-dino.jpg",
    list:'trending',
  },
  {
    song_name: "Baarishien",
    artist: "Atif Aslam",
    file_path: "songs/Baarishein - Atif Aslam 128 Kbps.mp3",
    cover_path: "images/song covers/baarishein atif aslam.jpg",
    list:'trending',
  },
  {
    song_name: "Baarishein",
    artist: "Anuv Jain",
    file_path: "songs/Baarishien-Anuv-Jain.mp3",
    cover_path: "images/song covers/Baarishein-anuv-jain.jpg",
    list:'trending',
  },
  {
    song_name: "Born To Shine",
    artist: "Diljit Dosanjh",
    file_path: "songs/Born To Shine - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/born-to-shine-diljit.jfif",
    list:'trending',
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
    list:'trending',
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
    list:'trending',
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
    list:'trending',
  },
  {
    song_name: "Higher",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem_-_Higher.mp3",
    cover_path: "images/song covers/higher.jpg",
    list:'trending',
  },
  {
    song_name: "Space Bound",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem+Space+Bound+Official+Video.mp3",
    cover_path: "images/song covers/space_bound.jfif",
    list:'trending',
  },
  {
    song_name: "Faded",
    artist: "Alan Walker",
    file_path: "songs/New folder/Faded_320(PaglaSongs).mp3",
    cover_path: "images/song covers/faded.jpg",
    list:'trending',
  },
  {
    song_name: "Remember The Name",
    artist: "Fort Minor",
    file_path:
      "songs/New folder/Fort_Minor_feat._Styles_Of_Beyond_-_Remember_the_Name_feat._Styles_of_Beyond_(ColdMP3.com).mp3",
    cover_path: "images/song covers/remember_the_name.jfif",
    list:'trending',
  },
  {
    song_name: "Goat",
    artist: "Diljit Dosanjh",
    file_path: "songs/New folder/G.O.A.T - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/goat.jfif",
    list:'trending',
  },
  {
    song_name: "Gratefull",
    artist: "Neffex",
    file_path: "songs/New folder/Grateful_320(PaglaSongs).mp3",
    cover_path: "images/song covers/gratefull.jfif",
    list:'trending',
  },
  {
    song_name: "Thunder",
    artist: "Imagine Dragons",
    file_path:
      "songs/New folder/Imagine Dragons - Thunder Mp3 Song Download.mp3",
    cover_path: "images/song covers/thunder.jfif",
    list:'trending',
  },
];
const all_songs = [
  {
    song_name: "Alone Pt. II",
    artist: "Alan Walker ft. Ava",
    file_path: "songs/New folder/Alone, Pt. II_320(PagalWorld.com.se).mp3",
    cover_path: "images/song covers/alone_part2.jpg",
    list:'all_songs',
  },
  {
    song_name: "Counting Stars",
    artist: "One Republic",
    file_path:
      "songs/New folder/Counting Stars - OneRepublic_320- [PagalWorld.NL].mp3",
    cover_path: "images/song covers/counting_stars.jpg",
    list:'all_songs',
  },
  {
    song_name: "Never Love Again",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Never Love Again (Pendona.com).mp3",
    cover_path: "images/song covers/never_love_again.jfif",
    list:'all_songs',
  },
  {
    song_name: "Stronger Than I Was",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Stronger than I was.mp3",
    cover_path: "images/song covers/stronger_than_i_was.jpg",
    list:'all_songs',
  },
  {
    song_name: "Kings Never Die",
    artist: "Eminem ft. Gwen Stefani",
    file_path:
      "songs/New folder/Eminem Kings Never Die Lyric Video ft Gwen Stefani.mp3",
    cover_path: "images/song covers/kings_never_die.jpg",
    list:'all_songs',
  },
  {
    song_name: "Higher",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem_-_Higher.mp3",
    cover_path: "images/song covers/higher.jpg",
    list:'all_songs',
  },
  {
    song_name: "Space Bound",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem+Space+Bound+Official+Video.mp3",
    cover_path: "images/song covers/space_bound.jfif",
    list:'all_songs',
  },
  {
    song_name: "Faded",
    artist: "Alan Walker",
    file_path: "songs/New folder/Faded_320(PaglaSongs).mp3",
    cover_path: "images/song covers/faded.jpg",
    list:'all_songs',
  },
  {
    song_name: "Remember The Name",
    artist: "Fort Minor",
    file_path:
      "songs/New folder/Fort_Minor_feat._Styles_Of_Beyond_-_Remember_the_Name_feat._Styles_of_Beyond_(ColdMP3.com).mp3",
    cover_path: "images/song covers/remember_the_name.jfif",
    list:'all_songs',
  },
  {
    song_name: "Goat",
    artist: "Diljit Dosanjh",
    file_path: "songs/New folder/G.O.A.T - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/goat.jfif",
    list:'all_songs',
  },
  {
    song_name: "Gratefull",
    artist: "Neffex",
    file_path: "songs/New folder/Grateful_320(PaglaSongs).mp3",
    cover_path: "images/song covers/gratefull.jfif",
    list:'all_songs',
  },
  {
    song_name: "Thunder",
    artist: "Imagine Dragons",
    file_path:
      "songs/New folder/Imagine Dragons - Thunder Mp3 Song Download.mp3",
    cover_path: "images/song covers/thunder.jfif",
    list:'all_songs',
  },
  {
    song_name: "In The End",
    artist: "Linkin Park",
    file_path: "songs/New folder/In-The-End---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/in_the_end.jpg",
    list:'all_songs',
  },
  {
    song_name: "Last One Standing",
    artist: "Eminem",
    file_path: "songs/New folder/Last-One-Standing_320(PagalWorld).mp3",
    cover_path: "images/song covers/last_one_standing.jpg",
    list:'all_songs',
  },
  {
    song_name: "Lose Yourself",
    artist: "Eminem",
    file_path: "songs/New folder/Lose-Yourself---Eminem(pagolworld.nl).mp3",
    cover_path: "images/song covers/lose_yourself.jpg",
    list:'all_songs',
  },
  {
    song_name: "Numb",
    artist: "Linkin Park",
    file_path: "songs/New folder/Numb---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/numb.jpg",
    list:'all_songs',
  },
  {
    song_name: "The Spectre",
    artist: "Alan Walker",
    file_path: "songs/New folder/The-Spectre---Alan-Walker(pagolworld.nl).mp3",
    cover_path: "images/song covers/spectre.png",
    list:'all_songs',
  },
  {
    song_name: "Love The Way You Lie",
    artist: "Rihanna ft. Eminem",
    file_path: "songs/Eminem - Love The Way You Lie (ft. Rihanna).mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
    list:'all_songs',
  },
  {
    song_name: "Wishlist",
    artist: "Dino James ft. Kaprila",
    file_path: "songs/Wishlist - Dino James.mp3",
    cover_path: "images/song covers/Wishlist-dino.jpg",
    list:'all_songs',
  },
  {
    song_name: "Baarishien",
    artist: "Atif Aslam",
    file_path: "songs/Baarishein - Atif Aslam 128 Kbps.mp3",
    cover_path: "images/song covers/baarishein atif aslam.jpg",
    list:'all_songs',
  },
  {
    song_name: "Baarishein",
    artist: "Anuv Jain",
    file_path: "songs/Baarishien-Anuv-Jain.mp3",
    cover_path: "images/song covers/Baarishein-anuv-jain.jpg",
    list:'all_songs',
  },
  {
    song_name: "Born To Shine",
    artist: "Diljit Dosanjh",
    file_path: "songs/Born To Shine - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/born-to-shine-diljit.jfif",
    list:'all_songs',
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
    list:'all_songs',
  },
];
const all_songs1 = [
  {
    song_name: "Kings Never Die",
    artist: "Eminem ft. Gwen Stefani",
    file_path:
      "songs/New folder/Eminem Kings Never Die Lyric Video ft Gwen Stefani.mp3",
    cover_path: "images/song covers/kings_never_die.jpg",
    list:'all_songs',
  },
  {
    song_name: "Higher",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem_-_Higher.mp3",
    cover_path: "images/song covers/higher.jpg",
    list:'all_songs',
  },
  {
    song_name: "Space Bound",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem+Space+Bound+Official+Video.mp3",
    cover_path: "images/song covers/space_bound.jfif",
    list:'all_songs',
  },
  {
    song_name: "Faded",
    artist: "Alan Walker",
    file_path: "songs/New folder/Faded_320(PaglaSongs).mp3",
    cover_path: "images/song covers/faded.jpg",
    list:'all_songs',
  },
  {
    song_name: "Remember The Name",
    artist: "Fort Minor",
    file_path:
      "songs/New folder/Fort_Minor_feat._Styles_Of_Beyond_-_Remember_the_Name_feat._Styles_of_Beyond_(ColdMP3.com).mp3",
    cover_path: "images/song covers/remember_the_name.jfif",
    list:'all_songs',
  },
  {
    song_name: "Goat",
    artist: "Diljit Dosanjh",
    file_path: "songs/New folder/G.O.A.T - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/goat.jfif",
    list:'all_songs',
  },
  {
    song_name: "Gratefull",
    artist: "Neffex",
    file_path: "songs/New folder/Grateful_320(PaglaSongs).mp3",
    cover_path: "images/song covers/gratefull.jfif",
    list:'all_songs',
  },
  {
    song_name: "Thunder",
    artist: "Imagine Dragons",
    file_path:
      "songs/New folder/Imagine Dragons - Thunder Mp3 Song Download.mp3",
    cover_path: "images/song covers/thunder.jfif",
    list:'all_songs',
  },
  {
    song_name: "In The End",
    artist: "Linkin Park",
    file_path: "songs/New folder/In-The-End---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/in_the_end.jpg",
    list:'all_songs',
  },
  {
    song_name: "Last One Standing",
    artist: "Eminem",
    file_path: "songs/New folder/Last-One-Standing_320(PagalWorld).mp3",
    cover_path: "images/song covers/last_one_standing.jpg",
    list:'all_songs',
  },
  {
    song_name: "Lose Yourself",
    artist: "Eminem",
    file_path: "songs/New folder/Lose-Yourself---Eminem(pagolworld.nl).mp3",
    cover_path: "images/song covers/lose_yourself.jpg",
    list:'all_songs',
  },
  {
    song_name: "Numb",
    artist: "Linkin Park",
    file_path: "songs/New folder/Numb---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/numb.jpg",
    list:'all_songs',
  },
  {
    song_name: "The Spectre",
    artist: "Alan Walker",
    file_path: "songs/New folder/The-Spectre---Alan-Walker(pagolworld.nl).mp3",
    cover_path: "images/song covers/spectre.png",
    list:'all_songs',
  },
  {
    song_name: "Love The Way You Lie",
    artist: "Rihanna ft. Eminem",
    file_path: "songs/Eminem - Love The Way You Lie (ft. Rihanna).mp3",
    cover_path: "images/song covers/love the way you lie.jpg",
    list:'all_songs',
  },
  {
    song_name: "Wishlist",
    artist: "Dino James ft. Kaprila",
    file_path: "songs/Wishlist - Dino James.mp3",
    cover_path: "images/song covers/Wishlist-dino.jpg",
    list:'all_songs',
  },
  {
    song_name: "Baarishien",
    artist: "Atif Aslam",
    file_path: "songs/Baarishein - Atif Aslam 128 Kbps.mp3",
    cover_path: "images/song covers/baarishein atif aslam.jpg",
    list:'all_songs',
  },
  {
    song_name: "Baarishein",
    artist: "Anuv Jain",
    file_path: "songs/Baarishien-Anuv-Jain.mp3",
    cover_path: "images/song covers/Baarishein-anuv-jain.jpg",
    list:'all_songs',
  },
  {
    song_name: "Born To Shine",
    artist: "Diljit Dosanjh",
    file_path: "songs/Born To Shine - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/born-to-shine-diljit.jfif",
    list:'all_songs',
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
    list:'all_songs',
  },
];
const all_songs2 = [
  {
    song_name: "Counting Stars",
    artist: "One Republic",
    file_path:
      "songs/New folder/Counting Stars - OneRepublic_320- [PagalWorld.NL].mp3",
    cover_path: "images/song covers/counting_stars.jpg",
    list:'all_songs',
  },
  {
    song_name: "Never Love Again",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Never Love Again (Pendona.com).mp3",
    cover_path: "images/song covers/never_love_again.jfif",
    list:'all_songs',
  },
  {
    song_name: "Stronger Than I Was",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem - Stronger than I was.mp3",
    cover_path: "images/song covers/stronger_than_i_was.jpg",
    list:'all_songs',
  },
  {
    song_name: "Kings Never Die",
    artist: "Eminem ft. Gwen Stefani",
    file_path:
      "songs/New folder/Eminem Kings Never Die Lyric Video ft Gwen Stefani.mp3",
    cover_path: "images/song covers/kings_never_die.jpg",
    list:'all_songs',
  },
  {
    song_name: "Higher",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem_-_Higher.mp3",
    cover_path: "images/song covers/higher.jpg",
    list:'all_songs',
  },
  {
    song_name: "Space Bound",
    artist: "Eminem",
    file_path: "songs/New folder/Eminem+Space+Bound+Official+Video.mp3",
    cover_path: "images/song covers/space_bound.jfif",
    list:'all_songs',
  },
  {
    song_name: "Faded",
    artist: "Alan Walker",
    file_path: "songs/New folder/Faded_320(PaglaSongs).mp3",
    cover_path: "images/song covers/faded.jpg",
    list:'all_songs',
  },
  {
    song_name: "Remember The Name",
    artist: "Fort Minor",
    file_path:
      "songs/New folder/Fort_Minor_feat._Styles_Of_Beyond_-_Remember_the_Name_feat._Styles_of_Beyond_(ColdMP3.com).mp3",
    cover_path: "images/song covers/remember_the_name.jfif",
    list:'all_songs',
  },
  {
    song_name: "Goat",
    artist: "Diljit Dosanjh",
    file_path: "songs/New folder/G.O.A.T - Diljit Dosanjh.mp3",
    cover_path: "images/song covers/goat.jfif",
    list:'all_songs',
  },
  {
    song_name: "Gratefull",
    artist: "Neffex",
    file_path: "songs/New folder/Grateful_320(PaglaSongs).mp3",
    cover_path: "images/song covers/gratefull.jfif",
    list:'all_songs',
  },
  {
    song_name: "Thunder",
    artist: "Imagine Dragons",
    file_path:
      "songs/New folder/Imagine Dragons - Thunder Mp3 Song Download.mp3",
    cover_path: "images/song covers/thunder.jfif",
    list:'all_songs',
  },
  {
    song_name: "In The End",
    artist: "Linkin Park",
    file_path: "songs/New folder/In-The-End---Linkin-Park(pagolworld.nl).mp3",
    cover_path: "images/song covers/in_the_end.jpg",
    list:'all_songs',
  },
  {
    song_name: "Last One Standing",
    artist: "Eminem",
    file_path: "songs/New folder/Last-One-Standing_320(PagalWorld).mp3",
    cover_path: "images/song covers/last_one_standing.jpg",
    list:'all_songs',
  },
  {
    song_name: "Insane",
    artist: "AP Dhillon",
    file_path: "songs/Insane - AP Dhillon.mp3",
    cover_path: "images/song covers/insane-AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Spaceship",
    artist: "AP Dhillon",
    file_path: "songs/Spaceship.mp3",
    cover_path: "images/song covers/spaceship- AP.jpg",
    list:'all_songs',
  },
  {
    song_name: "Toxic",
    artist: "AP Dhillon",
    file_path: "songs/Toxic - AP Dhillon.mp3",
    cover_path: "images/song covers/toxic-ap.jpg",
    list:'all_songs',
  },
];

//setting good morning/afternoon/evening message according to the currentTime
showtime();
function showtime() {
  let greet = document.getElementById("greet");
  let date = new Date();
  let hour = date.getHours();
  if (hour >= 4 && hour < 12) {
    greet.innerText = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greet.innerText = "Good Afternoon";
  } else if (hour < 4 || hour >= 18) {
    greet.innerText = "Good Evening";
  }
}
//export everything

export {songs};
export {all_songs};
export {all_songs1};
export {all_songs2};
export {showtime}