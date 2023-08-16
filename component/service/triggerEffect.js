document.addEventListener('DOMContentLoaded', function() {
  const verticalLine = document.querySelector('.ws-vertical-line-animation');
  const horizontalLine = document.querySelector('.ws-horizontal'); // 디자인 된 HTML 클래스를 적는곳
  let triggerActivated = false;

  function handleScroll(entries) {
    const triggerClass = 'code-css'; // Class of the element to detect trigger point
    const triggerElement = document.querySelector(`.${triggerClass}`);

    if (entries[0].isIntersecting) {
      verticalLine.classList.add('active');
      horizontalLine.classList.add('active');
      triggerActivated = true;

      // Add your animation code here
      triggerElement.classList.add('animation-triggered');
    } else {
      verticalLine.classList.remove('active');
      horizontalLine.classList.remove('active');
      triggerActivated = false;

      // Remove or reset the animation trigger when scrolling back
      triggerElement.classList.remove('animation-triggered');
    }
  }

  const observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
  const triggerElement = document.querySelector('.code-css'); // Class of the element to detect trigger point
  observer.observe(triggerElement);
});
