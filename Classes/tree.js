class tree{
    constructor(x,y){
        var treeSprite;
        this.image=loadImage("Images/tree.png");
        treeSprite=createSprite(x,y);
        treeSprite.addImage(this.image);
        treeSprite.scale=0.5;
    }
    display(){
    }
}