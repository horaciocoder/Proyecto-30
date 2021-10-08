class Polygon {
    constructor($x, $y, $width, $height) {
        var $options = {
            density: 1,
            friction: 1,
            restitution: 0.7    
        }
        this.body = Bodies.rectangle($x, $y, $width, $height, $options);
        World.add(world, this.body);
        this.width = $width;
        this.height = $height;
        this.image = loadImage("polygon.png");
        this.visibility = 255;
    }
    display() {
        var $pos = this.body.position;
        var $angle = this.body.angle
        push();
        translate($pos.x, $pos.y);
        rotate($angle);
        imageMode(CENTER);
        tint(255, this.visibility);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}