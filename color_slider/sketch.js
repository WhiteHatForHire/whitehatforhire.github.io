var canvas;
var r, g, b;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
}

function draw(){
    r = map(mouseX, 0, windowWidth, 0, 255);
    g = map(mouseY, 0, windowHeight, 0, 255);
    b = map(mouseX, 0, windowWidth, 255, 0);
    background(r,g,b);
    cursor(CROSS);

}