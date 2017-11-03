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
            line(this.prevX, this.prevY,this.x,this.y);
        }
        this.color = function(){
            
        }
    
        this.step = function () {
            this.prevX = this.x;
            this.prevY = this.y;

            this.stepx = random(-1, 1);
            this.stepy = random(-1, 1);

            this.stepsize = montecarlo()*125;
            this.stepx *= this.stepsize;
            this.stepy *= this.stepsize;

            this.x += this.stepx;
            this.y += this.stepy;
            this.x = constrain(this.x, 0, width-1);
            this.y = constrain(this.y, 0, height-1);
        }
        function montecarlo(){
            while (true) {
                this.r1 = random(1);
                this.probability = pow(1.0 - r1,8);
        
                this.r2 = random(1);
                if (this.r2 < this.probability){
                    return this.r1;
                }
                // this.r2 = random(1);
                // return this.r2;
            }
        }
    }
// function montecarlo(){
//     while (true) {
//         var r1 = random(1);
//         var probability = pow(1.0 - r1,8);

//         var r2 = random(1);
//         if (r2 < probability){
//             return r1;
//         }
//         console.log(r1);
//     }
// }