const boxes = document.querySelectorAll('.box');

// event listener
window.addEventListener('scroll', checkBoxes);

checkBoxes();

// function to check position of boxes for the trigger point (80% of window height)
function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}