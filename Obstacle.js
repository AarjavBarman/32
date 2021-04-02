class House {
    constructor(x,y,width,height){
        var options = {
        isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("house.png");
    
    }
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
            image(this.image,500,550, this.width, this.height);    
        }
        
    }