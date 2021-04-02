class Bird {
    constructor(x,y,width,height,angle){
        var options = {
        isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("bird.jpg");
        this.Visibility=255;
    
    }
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
            image(this.image,750,400, this.width, this.height);
        
    }
}