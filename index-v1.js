var value = Math.random();
var colors = [
  '#FFFFFF',
  '#000000'
];

function style404BackgroundRandomly() {
  if (value > 0.5) {
    document.getElementById('page-not-found').style.background = colors[0];
  } else {
    document.getElementById('page-not-found').style.background = colors[1];
  }
}

style404BackgroundRandomly();
