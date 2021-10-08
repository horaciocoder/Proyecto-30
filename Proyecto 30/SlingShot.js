class Slingshot {
    constructor($bodyA, $pointB, $stiffness, $length) {
        var $properties = {
            bodyA: $bodyA,
            pointB: $pointB,
            stiffness: $stiffness,
            length: $length
        }
        this.sling = Constraint.create($properties);
        World.add(world, this.sling);
    }
    break() {
        this.sling.bodyA = null;
    }
    attach($body) {
        this.sling.bodyA = $body;
    }
    display() {
        if (this.sling.bodyA) {
        var $pointA = this.sling.bodyA.position;
        var $pointB = this.sling.pointB;
        strokeWeight(5);
        stroke("cyan");
        line($pointA.x, $pointA.y, $pointB.x, $pointB.y);
        }
    }
}