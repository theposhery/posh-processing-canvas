module.exports =
// this code was autogenerated from PJS
(function($p) {

var rii = 0;

function setup() {
$p.size(600, 600);
}
$p.setup = setup;
setup = setup.bind($p);

function draw() {
$p.background(0,0);

for(var i =  120;  i<=480;  i+=120) {
for(var j =  120;  j<=480;  j+=120){
if($p.__mousePressed) {
$p.fill($p.random(255), $p.random(255), $p.random(255), 80);
} else {
$p.fill($p.random(255), $p.random(255), $p.random(255), 80);

    leaf(i, j);
}
}
}
}
$p.draw = draw;
draw = draw.bind($p);

function leaf(Cx, Cy) {
$p.noStroke();
 $p.beginShape();
$p.vertex(Cx, Cy);
$p.bezierVertex(Cx+30, Cy+5, Cx+40, Cy+50, Cx, Cy+80);
$p.bezierVertex(Cx-15, Cy+20, Cx-30, Cy+25, Cx, Cy);
 $p.endShape();
}
$p.leaf = leaf;
leaf = leaf.bind($p);

function mouseClicked() {

}
$p.mouseClicked = mouseClicked;
mouseClicked = mouseClicked.bind($p);

})
