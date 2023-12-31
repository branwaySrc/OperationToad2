const texts = ['기획하고', '제작하고', '선보이다'];
const classes = ['fill-gradient-red', 'fill-gradient-green', 'fill-gradient-blue'];

const element = document.getElementById('alternating-text');

let i = 0;
const listener = e => {
  i = i < texts.length - 1 ? i + 1 : 0;
  element.innerHTML = texts[i];
  element.className = `tit__alternating ${classes[i]}`;
};

element.innerHTML = texts[0];
element.className = `tit__alternating ${classes[0]}`;
element.addEventListener('animationiteration', listener, false);