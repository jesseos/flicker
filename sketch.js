let dim;
let winW;
let winH;
let frames;
let frameAdd = 0.0;
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
}
function draw() {
    background(0);
    drawGradient(winW / 4, winH / 2);
    drawGradient((winW / 4) * 3, winH / 2);
    frameAdd += 0.001;
    frames = frames + frameAdd;
    frameRate(frames);
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
