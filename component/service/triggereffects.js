document.addEventListener('DOMContentLoaded', function() {
  const verticalLine = document.querySelector('.ws-vertical-line-animation');
  const horizontalLines = document.querySelectorAll('.ws-horizontal-line1-animation, .ws-horizontal-line2-animation, .ws-horizontal-line3-animation');
  let lineIndex = 0;
  
  function updateAnimations() {
    if (window.scrollY >= 400) {
      verticalLine.classList.add('active');
    } else {
      verticalLine.classList.remove('active');
    }
    
    horizontalLines.forEach((line, index) => {
      if (window.scrollY >= 20 + (index * 60)) {
        line.classList.add('active');
      } else {
        line.classList.remove('active');
      }
    });
  }

  updateAnimations(); // Call initially when the page loads

  let scrolling = false;

  window.addEventListener('wheel', function(event) {
    event.preventDefault();
    
    if (!scrolling) {
      scrolling = true;
      
      if (event.deltaY > 0) {
        lineIndex = Math.min(lineIndex + 1, horizontalLines.length - 1);
      } else {
        lineIndex = Math.max(lineIndex - 1, 0);
      }

      horizontalLines.forEach((line, index) => {
        if (index <= lineIndex) {
          line.classList.add('active');
        } else {
          line.classList.remove('active');
        }
      });

      setTimeout(() => {
        scrolling = false;
      }, 800); // Adjust the timing as needed
    }
  });

  window.addEventListener('scroll', updateAnimations); // Call on scroll to update animations
});