class mango{
    constructor(x,y,height){
        var box_option={
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,height,height,box_option);
        World.add(world,this.body);
        this.h=height;
        this.image=loadImage("Images/mango.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.h, this.h);
        pop();
    }
}