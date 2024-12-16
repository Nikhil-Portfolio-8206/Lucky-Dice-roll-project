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

// Function to simulate rolling effect
function rollImages(callback) {
    const rollingDuration = 1000; // Total rolling time in milliseconds
    const rollingInterval = 100; // Interval for switching images
    const startTime = Date.now();

    function roll() {
        // Display random images during rolling
        image1.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        image2.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        if (Date.now() - startTime < rollingDuration) {
            setTimeout(roll, rollingInterval); // Continue rolling
        } else {
            callback(); // Set final images
        }
    }
    roll(); // Start rolling
}

// Get the image elements
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");

// Function to set the image sources
function setImages() {
    const [imageUrl1, imageUrl2] = getRandomImages();
    image1.src = imageUrl1;
    image2.src = imageUrl2;

    image1.classList.remove("animate-bounce");
    image2.classList.remove("animate-bounce");

    // Determine the larger number and apply animation
    if (imageUrl1 > imageUrl2) {
        image1.classList.add("animate-bounce");
        resultMessage.innerHTML = "<h3>Player 1 Wins! 🎉</h3>";
    } else if (imageUrl2 > imageUrl1) {
        image2.classList.add("animate-bounce");
        resultMessage.innerHTML= "<h3>Player 2 Wins! 🎉</h3>";
    }
}

// Set the images on page load and after refresh
// window.onload = setImages;

const refreshButton = document.getElementById("refreshButton");
const audio = document.getElementById("myAudio");

//   refreshButton.addEventListener("click", setImages);
  refreshButton.addEventListener("click",  function() {
    audio.play();
    rollImages(setImages);
  });

  