function setup() {
    Canvas = createCanvas(400,350);
    Canvas.position(100,200);
}
function draw() {
    fill('red');
    stroke('red');
    circle(50, 50, 70);
    circle(350, 300, 70);
    circle(350, 50, 70);
    circle(50, 300, 70);
    fill('green');
    stroke('green');
    rect(45,85,15,180,);
    rect(85,40,230,15,);
    rect(345,85,15,180,);
    rect(85,290,230,15,);
}