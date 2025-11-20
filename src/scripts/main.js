import '/src/style.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { notesHTML, attendanceHTML, scheduleHTML, todosHTML } from './cardTemplates';

// Cards
const cards = document.querySelectorAll(".card")
const overlay = document.querySelector(".card-section")
// const closeBtn = document.querySelector(".close-btn")
const overlayWindow = document.querySelector(".section-window")

const profileInput = document.getElementById("profile-link-input")
const profileForm = document.getElementById("profile-link")
const profilePic = document.getElementById("profile-pic")

const welcomeMsg = document.querySelector(".welcome-msg")
const msgArray = ["Sup", "Morning", "Wassup", "Hi", "Hola"];

cards.forEach(card => {
  card.addEventListener("click", () => {
    const type = card.dataset.type;

    if (type === "notes") overlayWindow.innerHTML = notesHTML;
    if (type === "attendance") overlayWindow.innerHTML = attendanceHTML;
    if (type === "classes") overlayWindow.innerHTML = scheduleHTML;
    if (type === "todo") overlayWindow.innerHTML = todosHTML;

    openOverlay();

    const closeBtn = document.querySelector(".close-btn")
    closeBtn.addEventListener("click", closeOverlay);
  });
});


function openOverlay() {
  overlay.classList.remove("invisible");
  overlayWindow.classList.remove("scale-0");
  overlayWindow.classList.add("scale-100");
}

function closeOverlay() {
  overlay.classList.add("invisible");
  overlayWindow.classList.add("scale-0");
  overlayWindow.classList.remove("scale-100");
}


profileForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const link = profileInput.value;
  profilePic.style.backgroundImage = `url(${link})`;

  profileInput.value = "";
})


setInterval(() => {
  const randomElem = Math.floor(Math.random() * msgArray.length);
  console.log(msgArray[randomElem])
  welcomeMsg.textContent = msgArray[randomElem];
}, 300000);
