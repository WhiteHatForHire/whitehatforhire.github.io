function Walker(speed){
    // this.x = random(0, windowWidth);
    // this.y = random(0,windowHeight);
    this.x = (mouseX);
    this.y = (mouseY);
    this.speed = speed;
    this.choice1 = random(0,255);
    this.choice2 = random(0,255);
    this.choice3 = random(0,255);
    
    
        this.display = function(){
            stroke(this.choice1, this.choice2, this.choice3);
            point(this.x,this.y);
        }
        this.color = function(){
            
        }
    
        this.step = function () {

            dirx = map(mouseX, 0, width, -1, 1);
            diry = map(mouseY, 0, height, -1, 1);
            this.x += dirx;
            this.y += diry;
            console.log(dirx);
            // var num = random(1);

            // if (num < 0.5) {
            //     this.x+= dirx;
            //     this.y += diry;
            // } else if (num < 0.625) {
            //     this.x--;
            // } else if (num < 0.75) {
            //     this.x++;
            // } else if (num < 0.875) {
            //     this.y++;
            // } else {
            //     this.y--;
            // }

        }
        
    }