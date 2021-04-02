class Farmer {
    constructor(x,y,width,height){
        var options = {
        isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("farmer.png");
    
    }
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
            image(this.image,200,570, this.width, this.height);    
        }
        
    }