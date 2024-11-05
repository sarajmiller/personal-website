function onButtonClick() {
    alert('Button clicked!');
}

const button = document.querySelector('button')
button.addEventListener('click', () => {
    alert('button clicked!');
  });
button.addEventListener('mouseover', () => {
    // change button's color
    
})

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  /* your code here */
}
