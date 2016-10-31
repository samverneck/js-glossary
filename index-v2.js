var value = Math.random();
var colors = [
  '#FFFFFF',
  '#000000'
];

function styleBackground(i) {
  document.getElementById('page-not-found').style.background = colors[i];
}

function style404BackgroundRandomly() {
  if (value > 0.5) {
    styleBackground(0);
  } else {
    styleBackground(1);
  }
}

style404BackgroundRandomly();
