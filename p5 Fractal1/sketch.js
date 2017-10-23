var angle = 0, color = 0;
var mult1 = 0.67;
var mySpan, mySpan2, myspan3;
var slider, colorslider, translider, sizeslider;
var wildcolor, wildcolor2, shift, size;
wildcolor = randomcolor();
wildcolor2 = randomcolor();
var button;
function setup() {
  randomcolor();
  createCanvas(800,600);
  slider = createSlider(0, 3.14159265359, 3.14159265359 / 4, 0.05);
  slider.parent('myContainer');
  mySpan = createSpan('Position');
  mySpan.parent('myContainer');
  colorslider = createSlider(0, 255, 0, 1);
  colorslider.parent('myContainer1');
  translider = createSlider(-50, 50, 0, 1);
  translider.parent('myContainer2');
  mySpan2 = createSpan('Color');
  mySpan2.parent('myContainer1');
  mySpan2 = createSpan('Shift');
  mySpan2.parent('myContainer2');
  sizeslider = createSlider(0, 400, 150, 1);
  sizeslider.parent('myContainer4');
  mySpan3 = createSpan('Size');
  mySpan3.parent('myContainer4');
  button = createButton('Randomize Color');
  button.parent('myContainer3');
  button.mousePressed(randomize);
}
function draw() {
  background(0);
  angle = slider.value();
  color = colorslider.value();
  shift = translider.value();
  size = sizeslider.value();
  var len = 100;
  stroke(wildcolor, wildcolor2, color, 255);
  translate(400, height);
  branch(size);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(shift, -len);
  if (len > 4 ){
    push();
    rotate(angle);
    branch(len * mult1);
    pop();
    push();
    rotate(-angle);
    branch(len * mult1);
    pop();
    }
}



function randomcolor () {
  var i;
  i = Math.random() * 255;
  return i;
  console.log(i);
}

function randomize (){
  wildcolor = Math.random() * 255;
}




