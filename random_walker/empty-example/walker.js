function Walker(speed){
    this.x = width/2;
    this.y = height/2;
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
            var choice = int(random(4));
            
            if (choice == 0) {
            this.x+= this.speed;
            } else if (choice == 1) {
            this.x -= this.speed
            } else if (choice == 2) {
            this.y += this.speed;
            } else {
            this.y -= this.speed;
            }
        }
    }