class Stone {
    constructor(x,y,width,height,angle){
        var options = {
        isStatic:false,
        restitution: 0,
        friction: 2,
        density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("stone.jpg");
    
    }
        display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            //translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            rotate(angle);
            translate(this.body.position.x, this.body.position.y);
            image(this.image,0,0, this.width, this.height);    
            pop();
        }
        
    }