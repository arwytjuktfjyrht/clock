function setup() {
  angleMode(DEGREES);
}

function draw() {
  background(200,200,200); 
  translate(200,200);

  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(7);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);

  noFill();

  stroke(255 , 0 , 0);
  arc(0,0,300,300,-90,scAngle-90);
  
  stroke(0,255,0);
  arc(0,0,300-14,300-14,-90,mnAngle-90);
  
  stroke(0,0,255);
  arc(0,0,300-14-14,300-14-14,-90,hrAngle-90);

  drawSprites();
}