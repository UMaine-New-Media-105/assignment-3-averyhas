# assignment-3-averyhas
assignment-3-averyhas created by GitHub Classroom

Challenge #1: https://editor.p5js.org/averyhas/sketches/45PEWwS4S
Create a sprite for a game which moves with the mouse on its x-axis.

For my game I chose to create a cat as my main sprite, using numerous shapes as well as ```beginShape()``` and ```vertex()```. I then, in order to make the 
sprite move according to the placement of my mouse, assigned the sprite's x-coordinate to be ```mouseX```. I added a large tan rectangle to the bottom on 
my canvas as the ground, and then assigned my sprite's y-coordinate to stay on that ground -- so that the cat would only move back and forth across the 
canvas with the mouse.


Challenge #2: https://editor.p5js.org/averyhas/sketches/v57SrGaoO
Click to change the catcher.

In order to indicate that my sprite was interacting with the seed in my game, I chose to have my cat's mouth open as if it was eating the seed. In order to
do this, I added a (if) conditional in my function: ```if (mouseIsPressed)``` ... ```} else {```. With this, I was able to first add my open-mouthed sprite
underneath the ```mouseIsPressed``` conditional, and the original appearance of the sprite under ```} else {```.


Challenge #3: https://editor.p5js.org/averyhas/sketches/4GYBFm6XK
Add a sprite that falls from the top of the canvas in an unpredictable x location using the random() method shown in class.

I created a dead fish to use as my seed sprite in my game, which falls from the top of the canvas and descends beneath the canvas space. In order to do
this, I added a new function titled ```deadFish``` below my previous cat sprite, containing the code to draw the fish. I then created three variables 
within my setup function:

```Javascript
  fishX = random(0, 300);
  fishY = 0;
  fishSpeed = 3;
```

These variables hold the parameters of my deadFish sprite, such as its x and y coordinates, as well as the speed at which the fish falls.
Within my draw function, I called my deadFish function with the parameter variables:

```Javascript
  deadFish(fishX, fishY, 0.15);
```

as well as code to make the seed's y-axis move down the canvas:

```Javascript
  fishY = fishY + fishSpeed;
```


Challenge #4: https://editor.p5js.org/averyhas/sketches/DdWHRSJN0
Make the seed fall randomly from the top of the canvas when the mouse is clicked, and reset once it has fallen completely.

In order to get my seed to fall randomly from the top of the canvas, I added 2 variables within my setup function:

```Javascript
  ground = 340;
  fishIsFalling = false;
```
These variables 1.) set the ground level and 2.) create a boolean variable to test whether or not the deadFish seed is falling.
Then in draw(), I added the code:

```Javascript
  if (fishIsFalling) {
    fishY = fishY + fishSpeed;

    if (fishY > ground) {
      fishIsFalling = false;
      fishY = -50;
```

The first portion of the code allows for the fish to fall when the ```fishIsFalling``` variable is true. The second portion resets the fish to the top of
the canvas once it reaches the ground, preparing it to fall again once the mouse is clicked.

I then created a seperate ```function mousePressed``` with the code:

```Javascript
  if (!fishIsFalling) {
  fishIsFalling = true;
  fishX = random(0, 300);
```

This code tests whether or not the fishIsFalling, and makes it reset to fall randomly on the x-axis.


Challenge #5: https://editor.p5js.org/averyhas/sketches/rGT9Epu5p
Make the sprite change when interacting with/"catching" the seed.

I intilalized four new global variables for this sketch:

```Javascript
let fishEaten = 0; // Starting variable for "scoreboard"

let catY;
let catX;
let catIsFed;
```

The first one being the starting variable for my "scoreboard," or counter (which counts how many fish the player has caught), the second and third being
the x and y coordinates for the cat sprite, and the fourth being a variable telling whether or not the player has caught the seed.

I then called the paramters for these variables within my draw function:

```Javascript
  fishIsFalling = false;
  catIsFed = false;
  catX = mouseX;
  catY = 250;
```

I also created the text for my scoreboard:

```Javascript
  fill("gray");
  stroke("white");
  strokeWeight(4);
  textSize(25);
  textFont("Georgia");
  text("Fish Eaten:", 100, 50); // "Fish Eaten" scoreboard.
  text(nf(fishEaten, 2, 0), 250, 50);
```

Lastly, within this function I updated the ```if (fishY > ground)``` conditional so that the scoreboard would either go down when a player misses a fish
or go up when a player catches a fish, and created code which triggered the sprite to change when the seed is close enough.
  
```Javascript
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
```
