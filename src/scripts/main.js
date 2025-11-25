import '/src/style.css'
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { cardContents } from './cardTemplates';

const invalidContent = `
<div class="flex justify-between items-center -my-3 pr-2">
    <h6 class="text-zinc-700 text-2xl">Invalid</h6>
    <i class="close-btn bi bi-x w- 50 text-zinc-800 text-[30px] hover:cursor-pointer"></i>
</div>

<p class="text-zinc-700">Invalid Input</p>
`

// Cards DOMs
const cards = document.querySelectorAll(".card")
const overlay = document.querySelector(".card-section")
const overlayWindow = document.querySelector(".section-window")

// Profile DOMs
const profileInput = document.getElementById("profile-link-input")
const profileForm = document.getElementById("profile-link")
const profilePic = document.getElementById("profile-pic")

// Banner DOMs
const bannerInput = document.getElementById("banner-input")
const bannerForm = document.getElementById("banner-form")
const bannerPic = document.getElementById("banner-pic")

// Welcome DOMs
const welcomeMsg = document.querySelector(".welcome-msg")
const msgArray = ["Sup", "Morning", "Wassup", "Hi", "Hola"];

cards.forEach(card => {
  card.addEventListener("click", () => {
    const type = card.dataset.type;

    const innerContent = cardContents[type] || invalidContent;

    openOverlay();

    switch (type)  {
      case "notes":
        overlayWindow.classList.add("layout-notes");
        overlayWindow.innerHTML = innerContent;

        const newFile = document.querySelector(".files-section");
        const addFileHtml = `
          <div id="add-file" class="-mt-5 hover:cursor-pointer min-w-[50px] text-center" title="Add new">
            <i class="bi bi-plus-circle w- 50 text-zinc-800 text-[30px] hover:text-zinc-500 transition-all duration-300"></i>
          </div>
        `;
        newFile.insertAdjacentHTML("beforeend", addFileHtml);

        break
      
      case "classes":
        overlayWindow.classList.add("layout-schedule");
        overlayWindow.innerHTML = innerContent;

        break

      case "attendance":
        overlayWindow.classList.add("layout-attendance");
        overlayWindow.innerHTML = innerContent;

        break

      case "todo":
        overlayWindow.classList.add("layout-todo");
        overlayWindow.innerHTML = innerContent;

        break
    }

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
  overlayWindow.classList.remove("scale-100");
  overlayWindow.classList.add("scale-0");

  setTimeout(() => {
    overlay.classList.add("invisible");
    rmOverlayContent();
    overlayWindow.innerHTML = "";
  }, 120);
 }

function rmOverlayContent() {
  overlayWindow.classList.remove(
    "layout-notes",
    "layout-schedule",
    "layout-attendance",
    "layout-todo"
  )
}

// Profile Pic Updating
profileForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const link = profileInput.value;
  if (!link) return;

  profilePic.classList.add("loading-pfp");

  const newImg = new Image();
  newImg.src = link;

  newImg.onload = () => {
    profilePic.style.backgroundImage = `url(${link})`;
    profilePic.classList.remove("loading-pfp");
  };

  newImg.onerror = () => {
    alert("Image failed to load");
    profilePic.classList.remove("loading-pfp");
  }

  profileInput.value = "";
})

// Banner Update Logic
bannerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const link = bannerInput.value;
  if (!link) return;

  bannerPic.classList.add("loading-pfp");

  const newImg = new Image();
  newImg.src = link;

  newImg.onload= () => {
    bannerPic.style.backgroundImage = `url(${link})`;
    bannerPic.classList.remove("loading-pfp");
  }

  newImg.onerror= () => {
    alert("Image failed to load");
    bannerPic.classList.remove("loading-pfp");
  }

  bannerInput.value = "";
})

// Changing the welcome messages overtime
setInterval(() => {
  const randomElem = Math.floor(Math.random() * msgArray.length);
  welcomeMsg.textContent = msgArray[randomElem];
}, 300000);
