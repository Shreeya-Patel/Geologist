class Stone{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 150;
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
    
        push();
        strokeWeight(3);
        fill('pink')
        rect(520, 520, this.width, this.height);
        pop();
      }
}
