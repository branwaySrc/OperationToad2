document.addEventListener('DOMContentLoaded', function() {
  const verticalLine = document.querySelector('.ws-vertical-line-animation');
  const horizontalLine1 = document.querySelector('.ws-horizontal-line1-animation');
  const horizontalLine2 = document.querySelector('.ws-horizontal-line2-animation');
  const horizontalLine3 = document.querySelector('.ws-horizontal-line3-animation');
  
  function handleScroll() {
    const minHeight = 9000;
    const maxHeight = 10000;
    const currentScroll = window.scrollY || window.pageYOffset;
    
    if (currentScroll >= minHeight && currentScroll <= maxHeight) {
      verticalLine.classList.add('active');
      horizontalLine1.classList.add('active');
      horizontalLine2.classList.add('active');
      horizontalLine3.classList.add('active');
    } else {
      verticalLine.classList.remove('active');
      horizontalLine1.classList.remove('active');
      horizontalLine2.classList.remove('active');
      horizontalLine3.classList.remove('active');
    }
  }

  window.addEventListener('scroll', handleScroll);
});