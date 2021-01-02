function setup() {
  angleMode(DEGREES);
}

function draw() {
  background(200,200,200); 
  translate(200,200);

  sc = second();
  mn = sc/60+minute();
  hr = mn/60+hour();

  strokeWeight(7);

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  nsc = scAngle-90;
  nmn = mnAngle-90;
  nhr = hrAngle-90;

  noFill();

  stroke(255 , 0 , 0);
  arc(0,0,300,300,-90,scAngle-90);

  rotate(nsc);
  line(0,0,100,0);
  rotate(nsc*-1);
  
  stroke(0,255,0);
  arc(0,0,300-14,300-14,-90,mnAngle-90);

  rotate(nmn);
  line(0,0,80,0)
  rotate(nmn*-1);
  
  stroke(0,0,255);
  arc(0,0,300-14-14,300-14-14,-90,hrAngle-90);

  rotate(nhr);
  line(0,0,50,0);
  rotate(nhr*-1);

  drawSprites();
}
