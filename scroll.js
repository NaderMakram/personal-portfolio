// scroll up button
const scroll = new SmoothScroll();
const goUpButton = document.querySelector('.go-up')
goUpButton.addEventListener('click', () => {
  scroll.animateScroll(0);
})