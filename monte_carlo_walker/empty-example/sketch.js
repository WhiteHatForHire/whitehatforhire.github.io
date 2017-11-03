var canvas, button, slider, button2;
var walker = [];
var num = 1;
var myP;
var i = 0;
var choice1, choice2, choice3;
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', ('-1'));
    // for (var i = 0; i < 1; i++) {
    walker[i] = new Walker();
    // }
    // button = createButton('New Life-form');
    // button.position(windowWidth/2 + 10,0);
    // button.mousePressed(buttonPressed);
    button2 = createButton('ScreenShot');
    button2.position(windowWidth/2 -33,0);
    button2.mousePressed(screenshot);
    //slider = createSlider(1, 6, 1, 1);
    //slider.position(windowWidth/2 - 55, 25);
    fill(255);
    myP = createP(num);
    alert('Click the screen')
    background(0);
  }

  function screenshot(){
      save('myCanvas.png');
  }


// function buttonPressed(){
//     console.log(choice1);
//     i++;
//     walker[i] = new Walker(num);
// }

function mousePressed(){
    
    if ((mouseY <= 40) && ((mouseX >= windowWidth/2 - 80) && (mouseX <= windowWidth/2 + 90))){
        
    }else{
    
    i++;
    walker[i] = new Walker(num);}
}

function draw(){
    //num = slider.value();
   
    for (var i = 0; i < walker.length; i++) {
        walker[i].step();
        walker[i].display();
        walker[i].color();
      }
    para();
      
  }
function para(){
    myP.remove();
    //myP = createP(num);
    myP.position(windowWidth/2 + 10, 35);
}




      