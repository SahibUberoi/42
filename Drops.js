class Drops {
    constructor(x,y){
        var options = {
            friction : 0.1
        }
        this.drops = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.drops);

    }
    display(){
        ellipse(this.drops.position.x,this.drops.position.y,50,50);

    }
}