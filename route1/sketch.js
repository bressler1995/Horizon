
let snowflakes = []; // array to hold snowflake objects
let snow_flake_color = [];
let snow_flake_rotate = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(30);
}

function draw() {
  background("#000");
 
  let t = frameCount / 1120; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(2); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
    snow_flake_color.push(random(0, 255));
    // snow_flake_rotate.push(TWO_PI / random(35.0, 40.0));
  }

  // loop through snowflakes with a for..of loop
  for (i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update(t); // update snowflake position
    push();
    // rotate(snow_flake_rotate[i]);
    fill(snow_flake_color[i] - 20, snow_flake_color[i] - 70, snow_flake_color[i] - 70, 255);
    snowflakes[i].display(); // draw snowflake
    pop();
  }

  push();
  fill(230, 230, 255, 15);
  ellipse(windowWidth / 2, windowHeight - 70, windowWidth + 170, 145);
  pop();

  push();
  fill(230, 230, 255, 10);
  ellipse(windowWidth / 2, windowHeight - 70, windowWidth + 120, 135);
  pop();

  push();
  fill(230, 230, 255, 10);
  ellipse(windowWidth / 2, windowHeight - 70, windowWidth + 70, 120);
  pop();

  push();
  fill(230, 230, 255, 20);
  ellipse(windowWidth / 2, windowHeight - 70, windowWidth - 50, 75);
  pop();

  push();
  fill(100, 100, 200, 20);
  ellipse(windowWidth / 2, windowHeight - 70, 450, 45);
  pop();

  push();
  fill(220, 150, 20, 10);
  ellipse(windowWidth / 2, windowHeight - 70, 400, 32);
  pop();

  push();
  fill(255, 50, 0, 7);
  ellipse(windowWidth / 2, windowHeight - 70, 370, 10);
  pop();
  
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = random(0, 100);
  this.posY = 0;
  this.initialangle = random(0, 2 * PI);
  this.size = random(1, 2);
  this.raddiv = 7;

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 7, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.3; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 1);

    //delete snowflake if past end of screen
    if (this.posY > height - 80) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}