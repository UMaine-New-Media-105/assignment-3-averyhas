/* Assignment 3, Question 5 - Avery Haskell

Make the sprite change when interacting with/"catching" the seed.
*/
let fishEaten = 0; // Starting variable for "scoreboard"

let fishX;
let fishY;
let catY;
let catX;
let fishSpeed;
let catIsFed;

function setup() {
  createCanvas(400, 400);

  // Variables which make the seed (deadFish) drop on it's x-axis at random.

  ground = 340;
  fishIsFalling = false;
  catIsFed = false;

  fishX = random(0, 300);
  fishY = -50;
  fishSpeed = 5;

  catX = mouseX;
  catY = 250;
}

function draw() {
  background("lightsteelblue");

  push();
  noStroke();
  fill("tan");
  rect(0, 360, 400, 40); // Ground.

  fill("gray");
  stroke("white");
  strokeWeight(4);
  textSize(25);
  textFont("Georgia");
  text("Fish Eaten:", 100, 50); // "Fish Eaten" scoreboard.
  text(nf(fishEaten, 2, 0), 250, 50);

  drawCat(mouseX, catY, 1);
  deadFish(fishX, fishY, 0.15);

  if (fishIsFalling) {
    fishY = fishY + fishSpeed;

    if (fishY > ground) {
      fishIsFalling = false;
      fishY = -50;
      fishEaten = fishEaten - 5;
      // Player loses 5 points for every fish that is missed.
    }
  }

  let d = dist(mouseX, ground, fishX, fishY);
  if (d < 60) {
    catIsFed = true;
    fishEaten = fishEaten + 1;
    // Player gains 1 point for every fish that is caught.
  } else {
    catIsFed = false;
  }
}

// Function which opens the cat's mouth when mouseIsPressed.
function drawCat(x, y, size) {
  if (catIsFed) {
    push();
    translate(x, y);
    scale(size);

    fill("darkgray"); // Tail.
    noStroke();
    beginShape();
    vertex(10, 60);
    vertex(18, 65);
    vertex(14, 80);
    vertex(26, 100);
    vertex(33, 116);
    vertex(22, 108);
    vertex(12, 95);
    vertex(7, 75);
    vertex(10, 60);
    endShape();

    noStroke();
    fill("gray");
    ellipse(50, 95, 50, 65); // Body.
    fill("darkgray");
    rect(41, 65, 8, 65); // Legs + Paws.
    rect(50, 65, 8, 65);
    ellipse(40, 126, 18, 8);
    ellipse(59, 126, 18, 8);
    noStroke();
    fill("darkgray");
    triangle(22, 18, 26, 45, 44, 30); // Left Ear.
    triangle(78, 18, 74, 45, 58, 30); // Right Ear.

    fill("darkgray");
    ellipse(50, 50, 50); // Head.
    noStroke();
    fill("white");
    ellipse(59, 46, 10.5); // Eye. (sclera)
    fill("gray");
    ellipse(59, 44.5, 8.5); // Eye. (iris)
    fill("white");
    ellipse(41, 46, 10.5); // Eye. (sclera)
    fill("gray");
    ellipse(41, 44.5, 9); // Eye. (iris)

    fill(190, 186, 190);
    ellipse(50, 67, 18);
    fill("palevioletred");
    ellipse(50, 67, 14);
    fill("lightgray");
    ellipse(43, 60, 20); // Snout.
    ellipse(57, 60, 20);
    fill("pink");
    ellipse(50, 52, 20, 10); // Nose.
    pop();
  } else {
    push();
    translate(x, y);
    scale(size);

    fill("darkgray"); // Tail.
    noStroke();
    beginShape();
    vertex(10, 60);
    vertex(18, 65);
    vertex(14, 80);
    vertex(26, 100);
    vertex(33, 116);
    vertex(22, 108);
    vertex(12, 95);
    vertex(7, 75);
    vertex(10, 60);
    endShape();

    noStroke();
    fill("gray");
    ellipse(50, 95, 50, 65); // Body.
    fill("darkgray");
    rect(41, 65, 8, 65); // Legs + Paws.
    rect(50, 65, 8, 65);
    ellipse(40, 126, 18, 8);
    ellipse(59, 126, 18, 8);
    noStroke();
    fill("darkgray");
    triangle(22, 18, 26, 45, 44, 30); // Left Ear.
    triangle(78, 18, 74, 45, 58, 30); // Right Ear.

    fill("darkgray");
    ellipse(50, 50, 50); // Head.
    noStroke();
    fill("white");
    ellipse(59, 46, 10.5); // Eye. (sclera)
    fill("gray");
    ellipse(59, 44.5, 8.5); // Eye. (iris)
    fill("white");
    ellipse(41, 46, 10.5); // Eye. (sclera)
    fill("gray");
    ellipse(41, 44.5, 9); // Eye. (iris)
    fill("lightgray");
    ellipse(43, 60, 20); // Snout.
    ellipse(57, 60, 20);
    fill("pink");
    ellipse(50, 52, 20, 10); // Nose.
    pop();
  }
}

// Function to create the deadFish seed.
function deadFish(fishX, fishY, size) {
  push();
  translate(fishX, fishY);
  scale(size);

  fill("papayawhip");
  noStroke();
  rect(100, 175, 250, 15);

  push();
  fill("papayawhip");
  rotate(-89.55);
  translate(-185, 300);
  scale(1.5);
  arc(0, 0, 80, 80, 0, PI, CHORD);
  pop();

  rect(200, 105, 10, 150);
  rect(165, 120, 10, 125);
  rect(235, 120, 10, 125);
  rect(130, 135, 10, 90);
  rect(270, 135, 10, 90);

  triangle(50, 125, 115, 185, 75, 185);
  triangle(50, 240, 115, 185, 75, 185);
  pop();
}

// Fish will fall randomly on the x-axis when mouse is clicked.
function mousePressed() {
  if (!fishIsFalling) {
    fishIsFalling = true;
    fishX = random(0, 300);
  }
}
