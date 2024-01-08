let dim;
let winW;
let winH;
let frames;
let frameAdd = 0.0;
let savedTime;
let resetTime = 10000;
let choose = 0;
let strobe = true;
let savedBG = 0;
let step = 0.25;

function setup() {
    winW = 1200;
    winH = 886;
    createCanvas(1200, 886);
    dim = width / 2;
    background(0);
    colorMode(HSB, 360, 100, 100);
    noStroke();
    ellipseMode(RADIUS);
    frameRate(1);
    frames = 1;
    savedTime = millis();
}
function draw() {
    if (strobe == true) {
        let bOrW = int(random(0, 2));
        if (bOrW == 1) {
            background(0);
        } else {
            background(255);
        }
    } else {
        background(0);
    }
    drawGradient(winW / 4, winH / 2);
    drawGradient((winW / 4) * 3, winH / 2);
    let passedTime = millis() - savedTime;
    if (passedTime > resetTime) {
        choose = int(random(0, 2));
        savedTime = millis();
    }
    if (choose == 0) {
        frames = frames + step;
        strobe = true;
    } else if ((choose == 1) && (frames >=2)){
        frames = frames - step;
        strobe = false;
    } else if (frameRate < 1) {
        frameRate = 1;
    }
  
    if (frames > 120){
      choose = 1;
      step = 0;
      frames = 60;
    }
    frameRate(frames);
  
    console.log(frames);
    console.log(choose);
}
function drawGradient(x, y) {
    let radius = dim / 2 - 75;
    let h = random(0, 360);
    for (let r = radius; r > 0; --r) {
        fill(h, 90, 90);
        ellipse(x, y, r, r);
        h = (h + 1) % 360;
    }
}
