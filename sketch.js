let gridSize = 30; 
let gridOffset = 5;
let size = 15; //30  size = gridSize - 2 * gridOffset;
let scatter = 15; //30
let sizeVariation = 20; //30
let row = 14;
let col = 14;
let color_index = 5;
let width = 300;
let eye = 125;
let nose = 5;
let mouth =2 ;

let probchart = [50, 50, 50, 50]; // square, circle, triangle, empty

const SQRT_3 = Math.sqrt(3);

function setup() {
  const canvas = createCanvas(450, 450);
  canvas.parent('sketch-holder');
  // setupSlider(0, 30, 15, 550, 20, "scatter", scatterSliderFunc);
  // setupSlider(0, 100, 50, 550, 50, "space", emptyFunc);
  // setupSlider(0, 30, 15, 550, 80, "size", sizeSliderFunc);
  // setupSlider(0, 40, 20, 550, 110, "variation", sizeVariationFunc);
  // setupSlider(0, 100, 50, 550, 140, "square", squareFunc);
  // setupSlider(0, 100, 50, 550, 170, "circle", circleFunc);
  // setupSlider(0, 100, 50, 550, 200, "triangle", triangleFunc);
  // setupSlider(0, 11, 5, 550, 230, "color", colorFunc);
  
  // setupSlider(100, 180, 140, 550, 260, "eye", eyeFunc);
  // setupSlider(3, 7, 5, 550, 290, "nose", noseFunc);
  // setupSlider(1, 10, 5, 550, 320, "mouth", mouthFunc);
  noLoop();
}

function draw() {
  background(225);
  noStroke();
  for (let x = 0; x < col; x++) {
    for (let y = 0; y < row; y++) {
      drawGrid(x, y);
    }
  }

  push();
  fill("#000000");
  sliderText.forEach(slider => {
    text(slider.text, slider.x, slider.y);
  })
  pop();

  face(eye,nose,mouth);
}

function setupSlider(min, max, defaultValue,
  posx, posy, text, callback) {
  const slider = createSlider(min, max, defaultValue);
  slider.position(posx, posy);
  slider.input(callback);
  sliderText.push({
    x: posx - 50,
    y: posy + 15,
    text: text
  });
}

function scatterSliderFunc(e) {
  scatter = parseInt(e.target.value);
  redraw();
}

function sizeSliderFunc(e) {
  size = parseInt(e.target.value);
  gridOffset = (gridSize - e.target.value) / 2;
  redraw();
}

function sizeVariationFunc(e) {
  sizeVariation = parseInt(e.target.value);
  redraw();
}

function squareFunc(e) {
  probchart[0] = parseInt(e.target.value);
  redraw();
}

function circleFunc(e) {
  probchart[1] = parseInt(e.target.value);
  redraw();
}

function triangleFunc(e) {
  probchart[2] = parseInt(e.target.value);
  redraw();
}

function emptyFunc(e) {
  probchart[3] = parseInt(e.target.value);
  redraw();
}

function colorFunc(e) {
  color_index = parseInt(e.target.value);
  redraw();
}

function eyeFunc(e){
  eye = parseInt(e.target.value);
  redraw();
}

function noseFunc(e){
  nose = parseInt(e.target.value);
  redraw();
}


function mouthFunc(e){
  mouth = parseInt(e.target.value);
  redraw();
}

const sliderText = [];

function drawRect(x, y) {
  const vSize = getRandomRange(size - sizeVariation, size + sizeVariation);
  rect(x * gridSize + gridOffset + getRandomRange(-scatter, scatter),
    y * gridSize + gridOffset + getRandomRange(-scatter, scatter),
    vSize, vSize);
}

function drawCircle(x, y) {
  const vSize = getRandomRange(size - sizeVariation, size + sizeVariation);

  circle(x * gridSize + gridSize / 2 + getRandomRange(-scatter, scatter),
    y * gridSize + gridSize / 2 + getRandomRange(-scatter, scatter),
    vSize);
}

function drawTriangle(x, y) {
  const vSize = getRandomRange(size - sizeVariation, size + sizeVariation);

  const cx = x * gridSize + gridSize / 2;
  const cy = y * gridSize + gridSize / 2;
  const length = vSize / 2; // Probably could be larger
  triangle(cx, cy - length,
    cx - length / 2 * SQRT_3, cy + length / 2,
    cx + length / 2 * SQRT_3, cy + length / 2);
}

function drawEmpty(x, y) {}

const functionList = [drawRect, drawCircle, drawTriangle, drawEmpty];

function drawGrid(x, y) {
  randomColor();
  
  const total = probchart.reduce((total, num) => total + num);
  const rnd = Math.floor(Math.random() * total);
  
  let current = 0;
  probchart.forEach((prob, index) => {
    current += prob; 
    if (rnd <= current && rnd > current - prob) {
      functionList[index](x, y);
    }
  });
}


const colorList = 
[["#282726", "#54504c", "#86817c","#d6cab0"],
["#1d3752", "#214d72", "#2c7695","#50bfc3"],
["#3a3e98", "#5256bc", "#527cbc","#4ab1d8"],
["#0fbde9", "#9d47b6", "#e6639b","#2f3bad"],
["#4535aa", "#d6d1f5", "#ed639e","#b05cba"],
["#ead7c1", "#444B8E", "#A84A7F","#F6948E"],
["#662377", "#A82973", "#EF5064","#FC867D"],
["#874356", "#C65D7B", "#F68989","#F6E7D8"],
["#FB938F", "#F2CAC8", "#C36B85","#FDBB75"],
["#7C50B9", "#E267AA", "#FF6F9B","#FFC36D"],
["#DC5990", "#FF5978", "#FFC876","#F2EAE3"],
["#674a40", "#50a3a4", "#fcaf38","#f95335"]]

let selectedColors = ["#282726", "#54504c", "#86817c","#d6cab0"];

function randomColor() {
  fill(getRandom(selectedColors));
}

function getRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function getRandomRange(min, max) {
  const range = max - min;
  return Math.random() * range + min;
}

function face(d,e,f){
  
  translate(-40,-30);
  //eye
  // noFill();
  // stroke(255);
  // strokeWeight(3);
  // for (x = d; x>0; x -= 20){
  // ellipse(width/2,width/2,x,x);
  // }
  let width = 340;
  let startx = width/2-(d/2)*tan(PI/3);
  let starty = width/2;
  let endx = width/2+(d/2)*tan(PI/3);
  let endy = width/2;
  
  let index_x = (d/2)*tan(PI/3);
  let index_y = d/2;
  
  strokeWeight(8);
  stroke(255);
  
  beginShape();
  curveVertex(startx, starty);
  curveVertex(startx, starty);
    curveVertex(width/2, width/2-d/3); //max
  curveVertex(endx, endy);
  curveVertex(endx, endy);
endShape();  
  
  // beginShape();
  // curveVertex(endx, endy);
  // curveVertex(endx, endy);
  //   curveVertex(endx+d/2, endy-d/2); //max
  //  curveVertex(endx+(d/2)*tan(PI/3), endy);
  // curveVertex(endx+(d/2)*tan(PI/3), endy);
  // endShape();  
  
  
  line(startx,starty,endx+(d/2)*tan(PI/3),endy);
  for (i = 1; i< ((d/2)*tan(PI/3)/20) ;i++){
   line(endx+i*20, endy, endx+i*20, endy+d*0.2);
    
  }
  

  push();
  for (let i = 0; i < 4; i++){
  noFill();
  beginShape();
  curveVertex(width/2-(d/2)*tan(PI/3) + i * (index_x/4), width/2 );
  curveVertex(width/2-(d/2)*tan(PI/3) + i * (index_x/4), width/2);
    curveVertex(width/2, width/2+(4-i)*d/8); //max
  curveVertex(width/2+(d/2)*tan(PI/3) - i * (index_x/4), width/2);
  curveVertex(width/2+(d/2)*tan(PI/3) - i * (index_x/4), width/2);
endShape();  
  }
  pop();
  
  
  //nose
  let nose_startx = endx;
  let nose_starty = endy+e*20;
  
  push();
  beginShape(TRIANGLES);
  strokeWeight(8);
  vertex(endx,endy+8)
  vertex(nose_startx, nose_starty);
  vertex(nose_startx - e*10, nose_starty-e*5);
  endShape();
  pop();
  
  push();
  fill(255);
  beginShape(TRIANGLES);
  strokeWeight(7);
  vertex(nose_startx-10, nose_starty+2);
  vertex(nose_startx - e*10-2, nose_starty+2);
  vertex(nose_startx - e*10-2, nose_starty-e*5+6);
  endShape();
  
  pop();
  

  line(nose_startx - e*10-2, nose_starty-e*5+8, nose_startx-e*10-2, nose_starty+ e*10);
  
  //mouth
  
  let mouth_startx = nose_startx-e*10;
  let mouth_starty = nose_starty+ e*10;
  noFill();
  stroke(255);
  push();
  strokeWeight(10);
  translate(mouth_startx,mouth_starty);
  beginShape();
  curveVertex(-f*3-50, 10);
  curveVertex(-f*3-50, 10);
  curveVertex(-40, -20-f*3);
  curveVertex(0, 0);
  curveVertex(40, -20-f*2);
  curveVertex(40+5*f, 10);
  curveVertex(-30-5*f, f*3+10);
  curveVertex(10, f*5+30);
  curveVertex(40+3*f, f*3+10);
  curveVertex(40+3*f, f*3+10);
  endShape(); 
  pop();
}