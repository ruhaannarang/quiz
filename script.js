// let points
// const options = document.querySelectorAll('.opt');

// options.forEach(option => {
//   option.addEventListener('click', () => {
//     options.forEach(opt => opt.classList.remove('selected'));
//     option.classList.add('selected');
//   });
// });
// if(opt.classList.contains('selected')==opt.classList.contains('correct')){
//             points=points+20
//         }

// let finalscore=document.body.querySelector(".score")
// finalscore.insertAdjacentHTML("afterbegin",`${points}`)

// Get current score from localStorage or start with 0
let points = parseInt(localStorage.getItem('points')) || 0;

// Update the score on the page
const finalScore = document.querySelector(".score");
if (finalScore) {
  finalScore.textContent = points;
}

const options = document.querySelectorAll('.opt');

options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove previous selection
    options.forEach(opt => opt.classList.remove('selected'));

    // Add selected class to clicked one
    option.classList.add('selected');

    // Only allow scoring once per page (prevent re-click cheating)
    if (!option.classList.contains('answered')) {
      option.classList.add('answered'); // mark as already clicked

      if (option.classList.contains('correct')) {
        points += 20;
      }

      // Save to localStorage
      localStorage.setItem('points', points);

      // Update UI
      if (finalScore) {
        finalScore.insertAdjacentHTML("afterbegin",`${points}`)
      }
    }
  });
});
