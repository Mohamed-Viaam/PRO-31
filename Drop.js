class Drop {
    constructor(x, y){
        var options = { 
            restitution: 0.1,
            friction: 0.1
        }
        this.body = Bodies.circle(x, y, 6, options);
        this.r = 7;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        noStroke();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
        pop();
    }

    updateDrops(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 1000), y:random(0, 100)});
        }
    }
}