var diam1 = 0;

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background("#005566");
  fill("#add8e6");
  stroke("#ffff00");
  strokeWeight(5);
  //ellipse needs for value in this order: x position, y position, diameter 1 diameter 2
  //this follows the mouse 
  ellipse(mouseX-10,mouseY-10,20,20);
  fill("#ff000");
  noStroke();
  //this ellipse to grow
  ellipse(100,250,diam1,diam1);
  rectMode(CENTER);
  rect(width/2,height/2,20,20);
  triangle(20,100,50,70,70,100); 
  stroke("#ffff00");
  strokeWeight(3);
  line(width/2,height/4,width/4,height/4);
  strokeWeight(10);
  //random postion point
  point(random(width),random(height));
  noStroke();
  textSize(20);
  textFont("Georgia");
  textStyle(ITALIC);
  fill("ffff00");
  text("morning mmp100", width-200,100);
}
function mousePressed(){
  if (diam1>=50){
     diam1=0;
  }else{
      diam1 = diam1+5;
  }
}