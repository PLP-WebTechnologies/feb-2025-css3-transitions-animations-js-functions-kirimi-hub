document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('animateBtn');
  const box = document.getElementById('box');

  // Check if the user has already triggered the animation
  if (!localStorage.getItem('animationTriggered')) {
    // Trigger animation only once
    box.style.opacity = 1;
    localStorage.setItem('animationTriggered', 'true');
  }

  // Add an event listener to the button to trigger an animation
  button.addEventListener('click', function() {
    box.style.animation = 'none'; // Reset animation
    setTimeout(() => {
      box.style.animation = 'bounce 1s ease-in-out infinite'; // Restart animation
    }, 10);
  });
});
