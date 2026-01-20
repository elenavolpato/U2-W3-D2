const savedName = document.getElementById("savedName");
const nameInput = document.getElementById("nameInput");

const loadName = () => {
  const name = localStorage.getItem("username");
  if (name) {
    savedName.textContent = name;
  }
};

const saveName = () => {
  const value = nameInput.value;
  if (value) {
    localStorage.setItem("username", value);
    savedName.textContent = value;
    //clears field
    nameInput.value = "";
  }
};

const removeName = () => {
  localStorage.removeItem("username");
  savedName.textContent = "Nessuno";
};

const timerEl = document.getElementById("timer");
let elapsedTime = sessionStorage.getItem("timeCounter");

if (elapsedTime === null) {
  elapsedTime = 0;
} else {
  elapsedTime = Number(elapsedTime);
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  //makes the number always have 2 characters .padStart()
  const mm = minutes.toString().padStart(2, "0");
  const ss = secs.toString().padStart(2, "0");

  return mm + ":" + ss;
};

timerEl.textContent = formatTime(elapsedTime);

setInterval(() => {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  elapsedTime++;
  sessionStorage.setItem("timeCounter", elapsedTime);
  timerEl.textContent = formatTime(elapsedTime);
}, 1000);
