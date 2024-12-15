// Array of image URLs
const imageUrls = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
];

// Function to get two random, different image URLs
function getRandomImages() {
    const randomIndices = [];
    while (randomIndices.length < 2) {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }
    return [imageUrls[randomIndices[0]], imageUrls[randomIndices[1]]];
}

// Get the image elements
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

// Function to set the image sources
function setImages() {
    const [imageUrl1, imageUrl2] = getRandomImages();
    image1.src = imageUrl1;
    image2.src = imageUrl2;
}

// Set the images on page load and after refresh
window.onload = setImages;

const refreshButton = document.getElementById("refreshButton");
const audio = document.getElementById("myAudio");

  refreshButton.addEventListener("click", setImages);
  refreshButton.addEventListener("click", function() {
    audio.play();
  });

  