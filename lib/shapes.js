//creating parent shape class
class Shape {
    constructor(logoText, color, textColor) {
        this.logoText = logoText;
        this.color = color;
        this.textColor = textColor;
    }
}

//creating triangle class which inherits from shape class
class Triangle extends Shape {
    constructor(logoText, color, textColor) {
        super(logoText, color, textColor);
        this.points = "150, 5 244, 182 56, 182";
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }
    setColor(color) {
        this.color = color;
    }
    setText(logoText) {
        this.logoText = logoText;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

//creating square class which inherits from shape class
class Square extends Shape {
    constructor(logoText, color, textColor) {
        super(logoText, color, textColor);
        this.points = "245, 42 245, 245 42, 245 42, 42";
    }

    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }
    setColor(color) {
        this.color = color;
    }
    setText(logoText) {
        this.logoText = logoText;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

//creating circle class which inherits from shape class
class Circle extends Shape {
    constructor(logoText, color, textColor) {
        super(logoText, color, textColor);
        this.radius = "85";
        this.cx = "150";
        this.cy = "115"
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`
    }
    setColor(color) {
        this.color = color;
    }
    setText(logoText) {
        this.logoText = logoText;
    }
    setTextColor(textColor) {
        this.textColor = textColor;
    }
}

module.exports = { Triangle, Circle, Square }