const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add("active");
    modalOverlay.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${videoId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = "";
});
