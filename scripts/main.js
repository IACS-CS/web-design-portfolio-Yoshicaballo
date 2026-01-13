console.log("main.js loaded successfully!");

/* This code was generated with help from Github Copilot in response to the prompt 
"Please make a script that uses bubble.png and bubblepop.png. Whenever the user clicks a bubble, 
it should pop and disappear shortly after. Bubbles should also periodically float from the bottom 
of the screen to the top" - 1/13/26 */

/* This code was modified with help from Github Copilot in response to the prompt
"can you change the bubble script so it uses bubble pop shortly before it actually pops in the code?" - 1/13/26 */

// This function creates a new bubble element
function createBubble() {
  // Create a new div element to hold the bubble
  const bubble = document.createElement("div");

  // Add the 'bubble' class so CSS can style it
  bubble.classList.add("bubble");

  // Set a random horizontal position (0% to 95% of screen width)
  const randomLeft = Math.random() * 95;
  bubble.style.left = randomLeft + "%";

  // Set a random animation duration (3 to 6 seconds)
  const randomDuration = 3 + Math.random() * 3;
  bubble.style.animationDuration = randomDuration + "s";

  // Set a random size (30px to 60px)
  const randomSize = 30 + Math.random() * 30;
  bubble.style.width = randomSize + "px";
  bubble.style.height = randomSize + "px";

  // Add click event listener to make bubble disappear when clicked
  bubble.addEventListener("click", function () {
    // Remove the bubble immediately when clicked
    bubble.remove();
  });

  // Add the bubble to the body of the page
  document.body.appendChild(bubble);

  // Remove the bubble after it finishes floating up
  setTimeout(function () {
    // Only remove if bubble still exists
    if (bubble.parentElement) {
      bubble.remove();
    }
  }, randomDuration * 1000 + 500);
}

// This function starts creating bubbles at regular intervals
function startBubbles() {
  // Create a bubble every 2 seconds
  setInterval(function () {
    createBubble();
  }, 2000);

  // Create the first bubble immediately
  createBubble();
}

// Wait for the page to load before starting the bubbles
window.addEventListener("load", function () {
  startBubbles();
});
