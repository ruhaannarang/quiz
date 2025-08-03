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


let points = parseInt(localStorage.getItem('points')) || 0;


const finalScore = document.querySelector(".score");
if (finalScore) {
  finalScore.textContent = points;
}

const options = document.querySelectorAll('.opt');

options.forEach(option => {
  option.addEventListener('click', () => {

    options.forEach(opt => opt.classList.remove('selected'));


    option.classList.add('selected');
    if (!option.classList.contains('answered')) {
      option.classList.add('answered');

      if (option.classList.contains('correct')) {
        points += 20;
      }

      localStorage.setItem('points', points);

      if (finalScore) {
        finalScore.insertAdjacentHTML("afterbegin",`${points}`)
      }
    }
  });
});
