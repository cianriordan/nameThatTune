// Sample data for high scores
const highScores = [
  {
    username: "Player1",
    game: "Game A",
    score: 1200,
    time: "2024-06-01 14:00",
  },
  { username: "Player2", game: "Game B", score: 900, time: "2024-06-01 15:30" },
  {
    username: "Player3",
    game: "Game C",
    score: 1500,
    time: "2024-06-02 10:00",
  },
  {
    username: "Player4",
    game: "Game A",
    score: 1300,
    time: "2024-06-02 11:45",
  },
  { username: "Player5", game: "Game B", score: 800, time: "2024-06-03 12:20" },
];

const tableBody = document.querySelector("#highscores-table tbody");

// Populate the table with high scores
highScores.forEach((score) => {
  const row = document.createElement("tr");

  const usernameCell = document.createElement("td");
  usernameCell.textContent = score.username;
  row.appendChild(usernameCell);

  const gameCell = document.createElement("td");
  gameCell.textContent = score.game;
  row.appendChild(gameCell);

  const scoreCell = document.createElement("td");
  scoreCell.textContent = score.score;
  row.appendChild(scoreCell);

  const timeCell = document.createElement("td");
  timeCell.textContent = score.time;
  row.appendChild(timeCell);

  tableBody.appendChild(row);
});
