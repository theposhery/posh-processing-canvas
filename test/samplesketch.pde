int rii;

void setup() {
size(600, 600);
}


void draw() {

background(0,0);

for(float i = 120; i<=480; i+=120) {
  for(float j = 120; j<=480; j+=120){

    if(mousePressed) {
       fill(random(255), random(255), random(255), 80);
    } else {
      fill(random(255), random(255), random(255), 80);

    leaf(i, j);
  }
}

}
}

void leaf(float Cx, float Cy) {
noStroke();
//fill(random(255), random(255), random(255), 100);
beginShape();
vertex(Cx, Cy);
bezierVertex(Cx+30, Cy+5, Cx+40, Cy+50, Cx, Cy+80);
bezierVertex(Cx-15, Cy+20, Cx-30, Cy+25, Cx, Cy);
//bezierVertex(Cx+10, Cy+5, Cx+20, Cx+40, Cx, Cy+80);
endShape();
}

void mouseClicked() {
}
