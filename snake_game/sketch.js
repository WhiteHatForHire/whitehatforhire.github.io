var s;
var scl = 20;
var food;
var num = 10;
var eaten = 0;
var myspan, scorespan, upgradespan;
var highscore = 0;
var unlocks = ["Blue Snake", "Red Snake", "Gold Snake", "Rainbow Snake", 'Trouser Snake'];
var goal = [3, 7, 12, 20, 30];
var posit = 0;
var stretch = 5;
var img;



function setup() {
  createCanvas(600,600);
  s = new Snake();
  pickLocation();
  myspan = createSpan('Use the arrow keys to move. The more you eat, the faster it goes!');
  myspan.parent(myContainer);
  scorespan = createSpan('High Score: ' + highscore);
  scorespan.parent(myContainer1);
  upgradespan = createSpan((goal[posit] - eaten) + ' more until ' + unlocks[posit]);
  upgradespan.parent(myContainer2);
  
}

function preload(){
  img = loadImage("trousersnake.jpg");
}

function pickLocation() {
  var cols = floor(500 /scl);
  var rows = floor(500 /scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
 
}


function draw() {
  background(51);
  frameRate(num + (eaten/2));
  if (s.eat(food)){
    pickLocation();
  }
  
  if (posit == 4){
    image(img, 0, 0);
  }
  

  s.death();
  s.update();
  s.show();

  

  fill(random(0, 255), random(0, 255), random(0, 255));
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}







