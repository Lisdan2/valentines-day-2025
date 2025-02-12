const startTime = new Date("2024-09-06T22:11:00Z");

const compliments = [
  "великі очі",
  "маленькі очі",
  "маленький лоб",
  "великий лоб",
  "великий ніс",
  "маленький ніс",
  "маленькі вуха",
  "великі вуха",
  "великі губи",
  "маленькі губи",
  "маленькі зуби",
  "великі зуби",
  "великі вії",
  "маленькі вії",
  "маленькі брови",
  "великі брови",
  "довге волосся",
  "довге волосся",
  "маленькі руки",
  "великі руки",
  "великі ноги",
  "маленькі ноги",
  "маленькі пальці",
  "великі пальці",
];

function updateTimer() {
  const currentTime = new Date().toISOString();
  const currentDate = new Date(currentTime);

  const timeDiff = currentDate - startTime;

  if (timeDiff < 0) {
    document.getElementById("timer").innerHTML = "Таймер еще не начался.";
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).innerHTML = `${days} день ${hours} годин ${minutes} хвилин ${seconds} секунд`;
}

function getCompliment() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.classList.remove("not-revealed");
    });
  });

  document.getElementById(
    "compliment-text"
  ).innerHTML = `У тебе <span class="red-text">${getCompliment()}</span> та
          <span class="red-text">${getCompliment()}</span>`;
});
setInterval(updateTimer, 1000);
