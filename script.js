mode = 0;
{ //pictures
let bg;
let stoplight;
let game2;;
let wall;
let sky;
let enter;
let greencar;
} //let pictures
let y;
let x = 25;
let count = 0;
let myFont;
let dotFont;

{ //variables for type the word
playgame = 0;

}

//https://editor.p5js.org/Bzhurrilol/sketches/5ynwtbPqL
//^^^ Game2

function preload() { //put all images here
  // preload() runs once
  bg = loadImage('pictures/cityskyline.png');
  stoplight = loadImage('pictures/stoplight.png');
  game2 = loadImage('pictures/picture.jpg');
  wall = loadImage('pictures/brickwall.png');
  sky = loadImage('pictures/sky.jpg');
  enter = loadImage('pictures/enter.png');
  greencar = loadImage('pictures/greencar.png');
  
  myFont = loadFont('fonts/BallFont.ttf');
  dotFont = loadFont('fonts/Dots.ttf');
  
}

function setup() {
  createCanvas(600, 400); //width, height


}

function draw() {
console.log(mouseX, mouseY);
  if(mode == 0){
    Menu();
  }
  
  if(mode == 1){
    dontTouchWall();
  }
  
  if(mode == 2){
    traceTheLetter();
  }
  
  if(mode == 3){
    typeTheWordStartScreen();
    if (playgame == 1){
      typeTheWordStart();
    }
  }
}


function Menu(){
  background('white');
  background(sky);
  image(bg, 0, 185, 0, 250);

  { //dont touch wall
    image(wall, 25, 25, 215, 73);
  } //Dont touch the wall menu graphic
    
  { //type the word graphics
    noStroke();
    fill('green');
    circle(250, 186, 37);
    
    textSize(20);
    fill('yellow');
    text("F", 244, 193);
    
    fill('yellow');
    circle(300, 186, 37);
    
    fill('green');
    text("U", 294, 193);
    
    fill('red');
    circle(350, 186, 37);
    
    fill('yellow');
    text("N", 344, 193);
  } //Type the Word menu graphics
  
  { //Trace the letter
    textSize(50);
    textFont(dotFont);
    fill('black');
    text("A B C", 400, 125);
  } //Trace the Letter menu graphic

  behindProgressWall(); //show progress bar for Wall
  behindProgressTrace(); //show progress bar for Trace the letter
  behindProgressType(); //show progress bar for Type the Word
}

function dontTouchWall(){ //game 1
  background('blue')
  circle(25,25,25)
  backButton();
}

function traceTheLetter(){ //game 2
  //textSize(60);
  background(game2);
  backButton();
  //https://editor.p5js.org/Bzhurrilol/sketches/5ynwtbPqL
  
  
  
}

function typeTheWordStartScreen(){ //zachary
  roadScreen(0,0);
  textSize(50);
  fill('black');
  textFont('Trebuchet MS');
  text("Welcome to", 165, 50);
  textSize(35);
  text("Type the Word!", 180, 90);
  line(300, 0, 300, height);
  line(0, 200, width, 200);

  stroke(1);
  fill('black');
  rect(129, 189, 52, 32)
  image(enter, 130, 190, 50, 30);
  image(greencar, 90, 257, 25, 37);
  image(greencar, 120, 257, 25, 37);
  image(greencar, 150, 257, 25, 37);
  image(stoplight, 87, 320, 70, 70);
  fill('red');
  circle(127, 378, 17);
  
  textSize(20);
  fill('black');
  text('How to Play:', 50, 120, 126, 141);
  textSize(17);
  noStroke();
  text('- Type the word\n\n- Press Enter\n\n- Get all cars pass the line\n\n- If the light is red, you lose', 25, 150, 170, 295);

  image(stoplight, 214, 149, 151, 151);
  noStroke();
  fill('green');
  circle(300, 186, 37);
  fill('yellow');
  circle(300, 230, 37);
  fill('red');
  circle(300, 274, 37);

  stroke('RGB(128, 128, 128)');
  strokeWeight(4);
  fill('rgb(217, 217, 217)');
  rect(440, 175, 100, 50);
  noStroke();
  fill('black');
  text('  Click to\n    Play!', 450, 180, 528, 210);
  strokeWeight(2);
  backButton();
  }
// image(stoplight, 450, 25, 150, 150); in-game size

function mouseClicked(){
  if(mode == 0){ //when we are on the menu
    //clicking box 1
    if(mouseX > 40 && mouseX < 225){
      if(mouseY > 45 && mouseY < 86){
        print("clicked here on dont touch the wall")
        mode = 1;
      }
    }
    
    //click Trace the Letter
      if(mouseX > 377 && mouseX < 542){
        if(mouseY > 45 && mouseY < 87){
          print("clicked on trace the letter")
          mode = 2;
      }
    }
    
    //click Type the word
      if(mouseX > 227 && mouseX < 377){
        if(mouseY > 125 && mouseY < 166){
          print("clicked here on type the word")
          mode = 3;
      }
    }
  }

  if(mode == 3){
    if(mouseX > 450 && mouseX < 550){
      if(mouseY > 175 && mouseY < 225){
        print("Clicked play game on game 3");
        playgame = 1;
      }
    }
  }
  
  if(mode != 0){
    if(mouseX > 15 && mouseX < 65){
      if(mouseY > 15 && mouseY < 40){
        mode = 0;
        playgame = 0;
      }
    }
  }
}

function typeTheWordStart(){
  roadScreen();
}

function testColor(){
  let c = get(mouseX, mouseY);
    if (c[0] == 0 && c[1] == 0 && c[2] == 0 && c[3] == 255){
      console.log("this is black");
    }
    if (c[0] == 255 && c[1] == 255 && c[2] == 255 && c[3] == 255){
      console.log("this is white");
    }
}

function behindProgressType(){

  { //type word progress bar
  let progress = 15; //test progress for type the word
  let total = 150; //total score needed
    
  fill('white'); //begin fill of rectangle
  rect(227,125,150,40); //initial rect position
  noStroke(); //dont stroke the red bar
  fill(255,170,153); //red start
  rect(228,125,150,40); //make red bar 
  fill('black'); //black text
  stroke(2);
  textSize(22);
  textFont('Trebuchet MS');
  text('Type the Word', 231, 152); //text
  
  if (progress < total){
    for (let i = 5; i <= progress; i += 5) {
      noStroke();
      fill(51,255,51); //green fill for rect
      rect(228,125,i,40);
      fill('black'); //retype the word
      stroke(2);
      text('Type the Word', 231, 152);
    }
  }
  else{ //shouldnt get here if points correctly given
    fill(51,255,51); //green fill if progress > total
    rect(228,125,150,40);
    fill('black');
    text('Type the Word', 241, 150);
    }
  } //type word progress bar
}

function behindProgressTrace(){

  { //trace letter progress bar
  let progress = 15; //test progress for type the word
  let total = 165; //total score needed

  stroke(2);
  fill('white'); //begin fill of rectangle
  rect(377, 45, 165, 40); //initial rect position
  noStroke(); //dont stroke the red bar
  fill(255,170,153); //red start
  rect(377,45,165,40); //make red bar 
  fill('black'); //black text
  stroke(2);
  textSize(23);
  textFont(myFont);
  text('Trace the Letter', 380, 74); //text
  
  if (progress < total){
    for (let i = 5; i <= progress; i += 5) {
      noStroke();
      fill(51,255,51); //green fill for rect
      rect(377,45,i,40);
      fill('black'); //retype the word
      stroke(2);
      text('Trace the Letter', 380, 74);
    }
  }
  else{ //shouldnt get here if points correctly given
    fill(51,255,51); //green fill if progress > total
    rect(377,45,165,40);
    fill('black');
    stroke(2);
    text('Trace the Letter', 380, 74);
    }
  } //trace the letter progress bar
}

function behindProgressWall(){

  { //dont touch wall progress bar
  let progress = 15; //test progress for type the word
  let total = 185; //total score needed

  stroke(2);
  fill('white'); //begin fill of rectangle
  rect(40,45,185,40); //initial rect position
  noStroke(); //dont stroke the red bar
  fill(255,170,153); //red start
  rect(40,45,185,40); //make red bar 
  fill('black'); //black text
  stroke(2);
  textSize(20);
  textFont('Arial');
  text('Don’t Touch the Wall',40,71); //text
  
  if (progress < total){
    for (let i = 5; i <= progress; i += 5) {
      noStroke();
      fill(51,255,51); //green fill for rect
      rect(40,45,i,40);
      fill('black'); //retype the word
      stroke(2);
      text('Don’t Touch the Wall',40,71);
    }
  }
  else{ //shouldnt get here if points correctly given
    fill(51,255,51); //green fill if progress > total
    rect(40,45,185,40);
    fill('black');
    text('Don’t Touch the Wall',40,71);
    }
  } //dont touch wall progress bar
}

function roadScreen(x, y){
  fill(211, 211, 211);
  rect(0,0, 600, 400);
  fill(224, 224, 224);
  for (let index = 0; index < 8; index++) {
    rect(x, y, 75, 400);
    x+= 75;
  }
  fill('white');
  x=0;
  for (let index = 0; index < 8; index++) {
    rect(x, y, 40, 400);
    x+= 75;
  }
}


function backButton(){
  stroke(2);
  fill('white');
  rect(15, 15, 50, 25)
  fill('black')
  textSize(15);
  textFont('Verdana')
  noStroke();
  text("BACK", 19, 34);
}
