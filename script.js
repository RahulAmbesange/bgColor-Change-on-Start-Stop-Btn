const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');
let stopcolor;

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btnStart.addEventListener('click', () => {
 if(!stopcolor){ //stopcolor is not equal to null
  stopcolor = setInterval(() => {
    const rnCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rnCol;
  }, 1000);
 }
});

btnStop.addEventListener('click', () => {
  clearInterval(stopcolor);
  stopcolor=null;
});