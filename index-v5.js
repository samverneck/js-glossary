var colors = [
  'black',
  'white'
];

style404BackgroundRandomly();

function style404BackgroundRandomly() {
  return Math.random() > 0.5 ? styleBackground(0) : styleBackground(1);
}

function styleBackground(i) {
  document.getElementById('page-not-found').style.background = colors[i];
}
