const playlist = [
  {
    album: "RENAISSANCE",
    name: "CUFF IT",
    album_art:
      "https://i.scdn.co/image/ab67616d0000b2730e58a0f8308c1ad403d105e7",
    spotify_url:
      "https://open.spotify.com/embed/track/1xzi1Jcr7mEi9K2RfzLOqS?utm_source=generator",
  },
  {
    album: "Dangerously In Love",
    name: "Crazy In Love (feat. Jay Z)",
    album_art:
      "https://i.scdn.co/image/ab67616d0000b27345680a4a57c97894490a01c1",
    spotify_url:
      "https://open.spotify.com/embed/track/5IVuqXILoxVWvWEPm82Jxr?utm_source=generatorr",
  },
  {
    album: "RENAISSANCE",
    name: "BREAK MY SOUL",
    album_art:
      "https://i.scdn.co/image/ab67616d0000b2730e58a0f8308c1ad403d105e7",
    spotify_url:
      "https://open.spotify.com/embed/track/5pyoxDZ1PX0KxBxiRVxA4U?utm_source=generatorr",
  },
  {
    album: "4",
    name: "Love On Top",
    album_art:
      "https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd",
    spotify_url:
      "https://open.spotify.com/embed/track/1z6WtY7X4HQJvzxC4UgkSf?utm_source=generatorr",
  },
];

// const iframe = document.getElementById("framer");
// iframe.setAttribute("allow", "autoplay *; fullscreen *;");
// iframe.src = iframe.src;

const prevSong = document.querySelector(".prev-btn");
const nextSong = document.querySelector(".next-btn");
const albumArt = document.querySelector(".album-art");
const albumTitle = document.querySelector(".album-title");
const text = document.querySelector(".text");
const songNum = document.querySelector(".song-num");
const songName = document.querySelector(".song-name");
const spotifyWidget = document.querySelector(".spotify-widget iframe");

prevSong.addEventListener("click", () => handleSongControl(-1));
nextSong.addEventListener("click", () => handleSongControl(1));
albumArt.addEventListener("animationend", () => {
  albumArt.classList.remove("album-transition");
  text.classList.add("show-texts");
});

const handleSongControl = (direction) => {
  const songPosition = index + direction;
  if (songPosition >= 0 && songPosition < playlist.length) {
    updateDisplay((index += direction));
  }
};

let index = 0;
const updateDisplay = (index) => {
  text.classList.remove("show-texts");

  const number = index + 1;
  songNum.innerText = number >= 10 ? number + "." : `0${number}.`;

  const song = playlist[index];
  albumArt.style.backgroundImage = `url(${song.album_art})`;
  albumTitle.textContent = song.album;
  songName.textContent = song.name;
  spotifyWidget.src = song.spotify_url;

  if (index === 0) {
    prevSong.classList.add("hide-arrow");
  } else {
    prevSong.classList.remove("hide-arrow");
  }

  if (index === playlist.length - 1) {
    nextSong.classList.add("hide-arrow");
  } else {
    nextSong.classList.remove("hide-arrow");
  }

  albumArt.classList.add("album-transition");
};

updateDisplay(index);
