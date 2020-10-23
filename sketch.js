var weight,speed
var car 
var wall




function setup() {
  createCanvas(1600,400);
  
  
  speed = random(55,90);
  weight = random(400,1500);
  wall = createSprite(1200,200,20,200);
  
  car = createSprite(100,200,60,20);

}

function draw() {
  background(0);

  
 
 
 

  car.velocityX=speed

  if (wall.x-car.x<(car.width+wall.width)/2){

     car.velocityX= 0
     var deformation = 0.5*weight*speed*speed/22500

     textSize(15)

    if (deformation>180){

            car.shapeColor = color(255,0,0)
            text("D- - Red",100,200)
    }

    if   (deformation<180 && deformation>100){

      car.shapeColor = color(230,230,0)
      text("B+ - Yellow",100,200)


    }

    if(deformation<100){

      car.shapeColor = color(0,255,0)
      
      text("A- - Green",100,200)
    }
  }

  drawSprites();
}