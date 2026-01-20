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

timerEl.textContent = elapsedTime;

setInterval(() => {
  elapsedTime++;
  sessionStorage.setItem("timeCounter", elapsedTime);
  timerEl.textContent = elapsedTime;
}, 1000);
