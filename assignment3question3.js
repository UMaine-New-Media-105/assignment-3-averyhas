/* Assignment 3, Question 3 - Avery Haskell

"Add a sprite that falls from the top of the canvas in an unpredictable x location using the random() method shown in class."
*/ 

function setup() {
  createCanvas(400, 400);

  // Variables which make the seed (deadFish) drop on it's x-axis at random.

  fishX = random(0, 300);
  fishY = 0;
  fishSpeed = 3;
}

function draw() {
  background("lightsteelblue");

  noStroke();
  fill("tan");
  rect(0, 360, 400, 40); // Ground.
  eatFish(mouseX, 250, 1);
  deadFish(fishX, fishY, 0.15);
  fishY = fishY + fishSpeed;
}
// Function which opens the cat's mouth when mouseIsPressed.
function eatFish(x, y, size) {
  if (mouseIsPressed) {
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
function deadFish(x, y, size) {
  push();
  translate(x, y);
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
