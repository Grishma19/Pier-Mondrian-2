function setup() {
  createCanvas(800, 1000);
  background("fffffff");

  var colors = ["red", "green", "white", "blue", "black", "yellow"];
  var sizes = [700, 900, 400, 400];
  // strokeWeight(6);

  var x = 0;
  var y = 0;

  var currentWidth = random(sizes);
  var currentHeight = random(sizes);

  while (y < height) {
    x = 0;
    while (x < width) {
      fill(random(colors));
      strokeWeight(6);
      rect(x, y, currentWidth, currentHeight);
      x = x + currentWidth;
    }
    y = y + currentHeight;
  }
}
