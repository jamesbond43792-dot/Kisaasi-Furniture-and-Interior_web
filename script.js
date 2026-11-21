 // Automatically update the copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

console.log("Welcome to Kisaasi Furniture Website!");

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".gallery-lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxCaption = document.querySelector(".lightbox-caption");
const lightboxClose = document.querySelector(".lightbox-close");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    galleryItems.forEach((item) => {
      const isVisible =
        filter === "all"
          ? item.classList.contains("featured")
          : item.dataset.category === filter;
      item.classList.toggle("hidden", !isVisible);
    });
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const image = item.querySelector("img");
    const caption = item.querySelector(".gallery-caption").textContent;

    lightboxImage.src = image.src.replace("w=800", "w=1600");
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = caption;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener("click", () => lightbox.close());

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});
