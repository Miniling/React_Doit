function Shape(x, y) {
    this.name = 'Shape';
    this.move(x, y);
}

Shape.create = function(x, y) { return new Shape(x, y) };

/*
Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function() {
    return 0;
}
*/

/* 자바스크립트 방식 클래스 생성/상속 */
Shape.prototype = {
    move: function(x, y) {
        this.x = x;
        this.y = y;
    },
    area: function() {
        return 0;
    }
};

var s = new Shape(0, 0);
s.area();   // 0

function Circle(x, y, radius) {
    Shape.call(this, x, y);     // 부모.call() : 부모 클래스 호출하여 초깃값 상속
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
    area: function() {
        return this.radius * this.radius;
    }
});

var c = new Circle(0, 0, 10);
c.area();   // 100


/* 자바 방식 클래스 생성/상속 */
class Shape {
    static create(x, y) { return new Shape(x, y); }
    name = 'Shape';
    constructor (x, y) {
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}

var s2 = new Shape(0, 0);
s2.area();   // 0

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if (this.radius==0) return super.area();
        return this.radius * this.radius;
    }
}

var c2 = new Circle(0, 0, 10);
c2.area();  // 100