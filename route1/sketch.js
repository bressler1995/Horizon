
let snowflakes = []; // array to hold snowflake objects
let snow_flake_color = [];
let snow_flake_rotate = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background("#111");
 
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
    fill(snow_flake_color[i]);
    snowflakes[i].display(); // draw snowflake
    pop();
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = random(0, 100);
  this.posY = 0;
  this.initialangle = random(0, random(2, 3) * PI);
  this.size = random(1, 2);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 3, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.3; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 1);

    // delete snowflake if past end of screen
    // if (this.posY > height - 50) {
    //   let index = snowflakes.indexOf(this);
    //   snowflakes.splice(index, 1);
    // }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}