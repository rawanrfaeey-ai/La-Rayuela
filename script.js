function showLevels() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("level-select").style.display = "block";

  let levelsDiv = document.getElementById("levels");
  levelsDiv.innerHTML = ""; // clear before creating buttons
  for (let i = 1; i <= 10; i++) {
    let btn = document.createElement("button");
    btn.innerText = "Level " + i;
    btn.onclick = () => startLevel(i);
    levelsDiv.appendChild(btn);
  }
}

function startLevel(level) {
  document.getElementById("level-select").style.display = "none";
  document.getElementById("puzzle-area").style.display = "block";
  document.getElementById("level-title").innerText = "Level " + level;

  // Generate a random puzzle (simple for now)
  let puzzleDiv = document.getElementById("puzzle");
  puzzleDiv.innerHTML = "<p>Random Puzzle for Level " + level + " 🎲</p>";
}

function backToLevels() {
  document.getElementById("puzzle-area").style.display = "none";
  document.getElementById("level-select").style.display = "block";
}
