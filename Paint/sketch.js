// An array of all the colors used in this code.
let colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet", "grey"];
let currentColor;

function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 

    // Set the background to white, and move the line to setup();
    background("white");
  
    header();
    

}

function draw()
{
  //Call drawing() function to begin drawing the line on the canvas if mouse is pressed. 
  //change color if mouseX is less than 51
  
  
  
    let y = 50;
    for (i = 0; i < colors.length; i++){

       //make an object for each color box:
        var currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
        currentColor.appear();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function colorChange() {
  
    if (mouseY > 50 && mouseY < 100) {
      currentColor = "white";
    
    } else if (mouseY > 100 && mouseY < 150) {
      currentColor = "black";
    
    } else if (mouseY > 150 && mouseY < 200) {
      currentColor = "red";
    
    } else if (mouseY > 200 && mouseY < 250) {
      currentColor = "blue";
    
    } 
    else if (mouseY > 250 && mouseY < 300) {
      currentColor = "green";
    
    } 
    
}

//Function that does the drawing
function drawing() {
  
    if (mouseX > 100 && mouseY > 100)
    {
        stroke(currentColor); //sets drawing color
        strokeWeight(3); //thichkess of drawing line
        line(pmouseX, pmouseY, mouseX, mouseY); //draws a line that follows the mouse
  }
}

//display instruction
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

    

