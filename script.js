document.addEventListener("DOMContentLoaded", () => {
  const jokeForm = document.getElementById("jokeForm");
  const jokeInput = document.getElementById("jokeInput");
  const jokesList = document.querySelector(".jokes-container ul");

  // Load jokes from localStorage
  let savedJokes = JSON.parse(localStorage.getItem("jokes")) || [];

  function renderJokes() {
    if (!jokesList) return;
    jokesList.innerHTML = "";
    savedJokes.forEach(joke => {
      const li = document.createElement("li");
      li.textContent = joke;
      jokesList.appendChild(li);
    });
  }

  if (jokesList) {
    renderJokes();
  }

  if (jokeForm) {
    jokeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newJoke = jokeInput.value.trim();
      if (newJoke) {
        savedJokes.push(newJoke);
        localStorage.setItem("jokes", JSON.stringify(savedJokes));
        renderJokes();
        jokeInput.value = "";
      }
    });
  }
});
