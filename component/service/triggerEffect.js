document.addEventListener('DOMContentLoaded', function() {
  const verticalLine = document.querySelector('.ws-vertical-line-animation');
  const horizontalLine1 = document.querySelector('.ws-horizontal-line1-animation');
  const horizontalLine2 = document.querySelector('.ws-horizontal-line2-animation');
  const horizontalLine3 = document.querySelector('.ws-horizontal-line3-animation');
  let triggerActivated = false;

  function handleScroll(entries) {
    const triggerClass = 'ws-icon__box';
    const triggerElement = document.querySelector(`.${triggerClass}`);

    if (entries[0].isIntersecting) {
      verticalLine.classList.add('active');
      horizontalLine1.classList.add('active');
      horizontalLine2.classList.add('active');
      horizontalLine3.classList.add('active');
      triggerActivated = true;
    } else {
      verticalLine.classList.remove('active');
      horizontalLine1.classList.remove('active');
      horizontalLine2.classList.remove('active');
      horizontalLine3.classList.remove('active');
      triggerActivated = false;
    }
  }

  const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
  const triggerElement = document.querySelector('.ws-icon__box');
  observer.observe(triggerElement);
});