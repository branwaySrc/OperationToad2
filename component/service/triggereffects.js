document.addEventListener('DOMContentLoaded', function() {
  const verticalLine = document.querySelector('.ws-vertical-line-animation');
  const horizontalLines = document.querySelectorAll('.ws-horizontal-line1-animation, .ws-horizontal-line2-animation, .ws-horizontal-line3-animation');
  
  function handleScroll(entries) {
    const triggerClass = 'ws-icon__box';
    const triggerElement = document.querySelector(`.${triggerClass}`);

    if (entries[0].isIntersecting) {
      verticalLine.classList.add('active');
      horizontalLines.forEach(line => line.classList.add('active'));
    } else {
      verticalLine.classList.remove('active');
      horizontalLines.forEach(line => line.classList.remove('active'));
    }
  }

  const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
  const triggerElement = document.querySelector('.ws-icon__box');
  observer.observe(triggerElement);
});