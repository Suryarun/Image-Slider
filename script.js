const images = [
  "./images/RCB.png",
  "./images/CSK.png",
  "./images/MI.png",
  "./images/KKR.webp",
  "./images/srh.webp"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update the image
function updateImage() {
  sliderImage.src = images[currentIndex];
}

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Initialize the slider
updateImage();