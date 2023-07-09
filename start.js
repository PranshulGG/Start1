// Define the updated message
var updatedMessage = "<p>1. Now Change background!</p>\n<p>2. Game Added: Guess Word!</p>\n<p>3. Game Added: Dot Boxes!</p>";



// Check if the user has dismissed the update or if the message has changed
if (!localStorage.getItem('dismissed') || localStorage.getItem('message') !== updatedMessage) {
  // Show the update container if it hasn't been dismissed or if the message has changed
  var updateContainer = document.getElementById('update-container');
  updateContainer.style.display = 'block';

  // Handle "Got it" button click
  var gotItButton = document.getElementById('got-it-btn');
  gotItButton.addEventListener('click', function() {
    // Hide the update container
    updateContainer.style.display = 'none';

    // Store the updated message in local storage
    localStorage.setItem('message', updatedMessage);

    // Store the preference in local storage
    localStorage.setItem('dismissed', 'true');
  });
} else {
  // Hide the update container if it has been dismissed and the message hasn't changed
  var updateContainer = document.getElementById('update-container');
  updateContainer.style.display = 'none';
}

function playSound(event) {
  var audio = document.getElementById("buttonSound");
  audio.play();
  setTimeout(function() {
    window.location.href = event.target.href;
  }, 200); // Adjust the delay (in milliseconds) before navigating to the new page
  event.preventDefault();
}

const button = document.getElementById('changeBackgroundBtn');
const body = document.body;
const backgrounds = [
  'bg.jpg',
  'bg2.png',
  'bg3.jpg',
  'b4.jpg',
  'bg5.jpg'

  // Add more background image URLs here
];
let currentBackgroundIndex = 0;

const clickSound = document.getElementById('clickSound');

// Check if a background image is stored in localStorage
const storedBackground = localStorage.getItem('background');
if (storedBackground) {
  const storedBackgroundIndex = backgrounds.indexOf(storedBackground);
  if (storedBackgroundIndex !== -1) {
    currentBackgroundIndex = storedBackgroundIndex;
    body.style.backgroundImage = `url(${storedBackground})`;
  }
}

button.addEventListener('click', function() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
  const newBackground = backgrounds[currentBackgroundIndex];
  body.style.backgroundImage = `url(${newBackground})`;
  
  // Play the click sound
  clickSound.play();
  
  // Store the selected background image in localStorage
  localStorage.setItem('background', newBackground);
});
