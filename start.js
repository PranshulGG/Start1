// Define the updated message
var updatedMessage = "<p>1. Sound added to buttons.</p>\n<p>2. Experience. new things.</p>\n<p>3. Startup screen changed.</p>\n<p>4. Now Supports lollipop v5.0.</p>\n<p>5. New Update Notifier!</p>"; 



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
