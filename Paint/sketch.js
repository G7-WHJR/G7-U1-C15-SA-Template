var colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet"];
var currentColor;

function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("white");
    header();
}

function draw()
{
  if (mouseIsPressed)
   {
    if (mouseX < 51) {
      colorChange();
    }
    drawing();
  }
  
    var y = 50;
    for (i = 0; i < colors.length; i++){
        var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
        currentColor.appear();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function colorChange() {
  
    if (mouseY > 50 && mouseY < 100) 
    {
      currentColor = "white";
    } 
    else if (mouseY > 100 && mouseY < 150) 
    {
      currentColor = "black";
    } 
    else if (mouseY > 150 && mouseY < 200) 
    {
      currentColor = "red";
    } 
    else if (mouseY > 200 && mouseY < 250) 
    {
      currentColor = "blue";
    } 
    
}

function drawing() {
    if (mouseX > 100 && mouseY > 100)
    {
        stroke(currentColor);
        strokeWeight(3); 
        line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);
  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

    

