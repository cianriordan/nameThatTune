// Function to fetch a random Drake track from Spotify
async function fetchRandomDrakeTrack(accessToken) {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/search?q=Drake&type=track&limit=50",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tracks");
    }

    const data = await response.json();
    const tracks = data.tracks.items;

    if (tracks.length === 0) {
      throw new Error("No Drake tracks found");
    }

    // Select a random track from the search results
    const randomIndex = Math.floor(Math.random() * tracks.length);
    return tracks[randomIndex];
  } catch (error) {
    console.error("Error fetching Drake track:", error);
    return null;
  }
}

// Function to play a track
async function playTrack() {
  const accessToken =
    "BQActjfxGqroqHtEvP2uQuPsJerNmqRcTy9U_F_QkY5wn78sKFAp5iXK0BHDDc-rqYAlBIl__6PtyZFVu-TDNVwzJVDGapKqTvDg5Q7FBwsBmv4g_1w"; // Replace with your actual access token

  try {
    const track = await fetchRandomDrakeTrack(accessToken);

    if (!track) {
      throw new Error("No track fetched");
    }

    document.getElementById("songName").textContent = track.name;
    document.getElementById("albumCover").src = track.album.images[0].url;

    // Play the track preview (if available)
    const audio = new Audio(track.preview_url);
    audio.play();

    // Simulate the game flow with a timeout
    setTimeout(() => {
      // Stop the track after 10 seconds
      audio.pause();
      // Display the correct answer after 10 seconds
      document.getElementById(
        "guessResult"
      ).textContent = `The answer is: ${track.name}`;
    }, 10000);
  } catch (error) {
    console.error("Error playing track:", error);
  }
}

// Event listener for the play button
document.getElementById("playButton").addEventListener("click", playTrack);
