function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  
    this.eat = function(pos) {
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        eaten ++;
        num = 10;
        myspan.remove();
        myspan = createSpan('Current Score: ' + eaten);
        myspan.parent(myContainer);
        upgradespan.remove();
        
        upgradespan = createSpan((goal[posit] - eaten) + ' more until ' + unlocks[posit]);
        upgradespan.parent(myContainer2);

        if ((goal[posit] - eaten) == 0) {
          posit ++;
          upgradespan.remove();
          upgradespan = createSpan((goal[posit] - eaten) + ' more until ' + unlocks[posit]);
          upgradespan.parent(myContainer2);
        }

        return true;
      } else {
        return false;
      }
    

      
    }
  
    this.dir = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }
  
    this.death = function() {
      
      
      for (var i = 0; i < this.tail.length; i++) {
        var pos = this.tail[i];
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          this.total = 0;
          this.tail = [];
          alert("YOU DIED!");
          posit = 0;
          if (eaten > highscore){
            highscore = eaten;
          } else {
            highscore = highscore;
          }
          eaten = 0;
          myspan.remove();
          myspan = createSpan('Use the arrow keys to move. The more you eat, the faster it goes!');
          myspan.parent(myContainer);
          scorespan.remove();
          scorespan = createSpan('Highscore: ' + highscore);
          scorespan.parent(myContainer1);
          upgradespan.remove();
          upgradespan = createSpan((goal[posit] - eaten) + ' more until ' + unlocks[posit]);
          upgradespan.parent(myContainer2);
        }
      }
    }
  
    this.update = function() {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
  
      this.x = this.x + this.xspeed * scl;
      this.y = this.y + this.yspeed * scl;
  
      this.x = constrain(this.x, 0, width - scl);
      this.y = constrain(this.y, 0, height - scl);

      
    }
  
    this.show = function() {
      if (posit == 0){
        fill(255, 255, 255);
      } else if (posit == 1) {
        fill(0, 255, 255);
      }
      else if (posit == 2) {
        fill(204, 0, 0);
      }
      else if (posit == 3) {
        fill(230, 172, 0);
      }
      else if (posit == 4) {
        
        fill(random(100, 255), random(0, 255), random(0, 255));
      }
      
      
      for (var i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, scl, scl);
      }
      rect(this.x, this.y, scl, scl);
  
    }
  }