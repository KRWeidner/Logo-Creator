const { Square, Circle, Triangle } = require("./lib/shapes");

class Validate {}

Validate.prototype.renderTriangle = (color) => {
    const triangle = new Triangle();
    triangle.setColor(color);
    return triangle.render();
};

Validate.prototype.renderSquare = (color) => {
    const square = new Square();
    square.setColor(color);
    return square.render();
};

Validate.prototype.renderCircle = (color) => {
    const circle = new Circle();
    circle.setColor(color);
    return circle.render();
};

module.exports = Validate;