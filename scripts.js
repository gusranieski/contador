// const btnStart = document.querySelector("#startCounter");
// const btnStop = document.querySelector("#stopCounter");
// const btnReset = document.querySelector("#resetCounter");
// const span = document.querySelector("span");
// let count = 0;
// let counter;

// btnStart.addEventListener("click", () => {
//   btnStart.innerHTML = "Start";
//   counter = setInterval(() => {
//     count++;
//     span.innerHTML = count;

//     if (count === 100) {
//       count = 0;
//     }
//   }, 1000);
// });

// btnStop.addEventListener("click", () => {
//   clearInterval(counter);
//   btnStart.innerHTML = "Continue";
// });

// btnReset.addEventListener("click", () => {
//   count = 0;
//   span.innerHTML = count;
//   btnStart.innerHTML = "Start";
// });

const btnStart = document.querySelector("#startCounter");
const btnStop = document.querySelector("#stopCounter");
const btnReset = document.querySelector("#resetCounter");
const span = document.querySelector("span");
let count = 0;
let counter;

btnStart.addEventListener("click", () => {
  if (!counter) {
    btnStart.innerHTML = "counting...";
    counter = setInterval(() => {
      count++;
      span.innerHTML = count;
  
      if (count === 100) {
        count = 0;
      }
    }, 1000);
  }
});

btnStop.addEventListener("click", () => {
  clearInterval(counter);
  counter = null;
  btnStart.innerHTML = "Continue";
});

btnReset.addEventListener("click", () => {
  count = 0;
  span.innerHTML = count;
  btnStart.innerHTML = "Start";
  clearInterval(counter);
  counter = null;
});
