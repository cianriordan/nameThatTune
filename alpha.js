const guessBtn = document.getElementById("guessBtn");
const nextBtn = document.getElementById("nextBtn");

const songs = [
  {
    name: "Look Alive",
    mp3: "lookalive.mp3",
    cover: "lookalivecover.jpg",
  },
  {
    name: "Yes Indeed",
    mp3: "yesindeed.mp3",
    cover: "yesindeedcover.jpg",
  },
  {
    name: "Walk it Talk it",
    mp3: "walkittalkit.mp3",
    cover: "walkitcover.jpeg",
  },
  // add more
];

let currentSongIndex = 0;
let songTimeout;

function loadSong(index) {
  console.log("loadSong function called with index:", index);
  const song = songs[index];
  const audio = document.getElementById("audio");
  console.log("The Song is " + song, "The Audio is " + audio);
  audio.src = song.mp3;
  console.log("The audio src is " + audio.src);
  console.log(song.mp3);
  document.getElementById(
    "album-cover"
  ).style.backgroundImage = `url(${song.cover})`;
  document.getElementById("guess").value = "";
  document.getElementById("result").innerText = "";
  audio.load();
  console.log("The function is complete");
}

function playSong() {
  const audio = document.getElementById("audio");
  audio.currentTime = 20; // Start from 20 seconds
  audio.play().catch((error) => {
    console.error("Error playing the audio:", error);
  });
}

function checkGuess() {
  const guess = document.getElementById("guess").value.trim().toLowerCase();
  const currentSong = songs[currentSongIndex].name.toLowerCase();
  const countdownElement = document.getElementById("countdown");
  const albumCover = document.getElementById("album-cover");
  const guessContainer = document.getElementById("guess-container");

  clearTimeout(songTimeout); // Clear the song timeout

  if (guess === currentSong) {
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Try Again!";
  }

  // Hide countdown and guess container
  countdownElement.style.display = "none";
  // guessContainer.style.display = "none";
  guessBtn.style.display = "none";

  // Show album cover
  albumCover.style.display = "block";

  // Optional: Add additional logic if needed when a guess is made
}

function nextSong() {
  clearTimeout(songTimeout); // Clear any existing timeouts

  // Reset result and guess elements
  document.getElementById("result").innerText = "";
  document.getElementById("guess").value = "";

  // Hide album cover initially
  document.getElementById("album-cover").style.display = "none";

  // Load the next song
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);

  // Reset countdown and show relevant elements
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerText = "Next";
  document.getElementById("countdown-container").style.display = "block";
  document.getElementById("guess-container").style.display = "block";

  // Start playing the song immediately
  playSong();

  // Start countdown for next song
  let countdown = 10;
  const interval = setInterval(() => {
    countdown -= 1;
    if (countdown > 0) {
      countdownElement.innerText = countdown;
    } else {
      clearInterval(interval);
      countdownElement.style.display = "none"; // Hide countdown text
      document.getElementById("album-cover").style.display = "block"; // Show album cover
      document.getElementById("guess-container").style.display = "none"; // Hide guess container
    }
  }, 1000);

  // Set timeout for song duration
  songTimeout = setTimeout(() => {
    const audio = document.getElementById("audio");
    audio.pause();
    // Additional logic if needed when song times out
  }, 10000); // Play song for 10 seconds
}

function startGame() {
  // Hide the start game button
  document.getElementById("start-game-button").style.display = "none";

  loadSong(currentSongIndex); // Ensure the song is loaded before playing
  playSong();

  let countdown = 10;
  const countdownElement = document.getElementById("countdown");
  const countdownContainer = document.getElementById("countdown-container");
  const albumCover = document.getElementById("album-cover");

  countdownElement.innerText = countdown;
  countdownContainer.style.display = "block"; // Show countdown container

  const interval = setInterval(() => {
    countdown -= 1;
    if (countdown > 0) {
      countdownElement.innerText = countdown;
    } else {
      clearInterval(interval);
      countdownElement.style.display = "none"; // Hide countdown
      albumCover.style.display = "block"; // Show album
    }
  }, 1000);

  songTimeout = setTimeout(() => {
    const audio = document.getElementById("audio");
    audio.pause();
  }, 30000); // Play song for 30 seconds
}

// Event listeners for play and pause
document.getElementById("audio").addEventListener("play", () => {
  console.log("Audio is playing");
});

document.getElementById("audio").addEventListener("pause", () => {
  console.log("Audio is paused");
});

// Initial load
loadSong(currentSongIndex);
