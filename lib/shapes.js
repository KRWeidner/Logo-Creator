//creating parent shape class
class Shape {
    constructor(logoText, color) {
        this.logoText = logoText;
        this.color = color;
    }
}

//creating triangle class which inherits from shape class
class Triangle extends Shape {
    constructor(logoText, color) {
        super(logoText, color);
        this.points = "150, 18 244, 182 56, 182";
    }

    render(){
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }
}

//creating square class which inherits from shape class
class Square extends Shape {
    constructor(logoText, color) {
        super(logoText, color);
        this.points = "200, 56 200, 200 56, 200 56, 56";
    }

    render(){
        return `<polygon points="${this.points}" fill="${this.color}" />`
    }
}

//creating circle class which inherits from shape class
class Circle extends Shape {
    constructor(logoText, color) {
        super(logoText, color);
        this.radius = "85";
        this.cx = "150";
        this.cy = "95"
    }

    render(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.color}" />`
    }
}