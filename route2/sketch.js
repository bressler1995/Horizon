var drop = []

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  for(var i = 0; i < 1200; i++) {
    drop[i] = new Drop();
  }
}

function draw() {
  background(240);

  push();
  translate(-windowWidth / 2, 0, 0);
  for(var i = 0; i < 1200; i++) {
  drop[i].show();
  drop[i].update();
  drop[i].updatezpoint();
  }
  pop();

}

function Drop() {

  this.x = random(0, width);
  this.y = random(0, -height);
  this.z = -3;
  
  this.show = function() {
    noStroke();
    fill(random(0, 200), fill(random(0, 255)), 0, random(230, 255));
    ellipse(this.x, this.y, random(1, 12), random(1, 15), 4);   

  }
  this.update = function() {
    this.speed = random(5, 20);
    this.gravity = 1.5;
    this.y = this.y + this.speed*this.gravity;  
    this.z -= 0.5;
    
    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }

    if (this.z < -100) {
      this.z = random(-3, 100);
    }

}

this.updatezpoint = function() {
  translate(0, 0, this.z);
}


}

setTimeout(function(){
  for(var i = 0; i < 1000; i++) {
    drop.push(new Drop());
  }
}, 7000);