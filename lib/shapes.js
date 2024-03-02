class Shape {
  constructor(text, textColor, color) {
    this.text = text;
    this.textColor = textColor;
    this.color = color;
    this.container = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    this.textElement = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<circle cx="150" cy="100" r="80" fill="${this.color}" />${this.textElement}</svg>`;
    }
}

class Square extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<rect x="85" y="35" width="130" height="130" fill="${this.color}" />${this.textElement}</svg>`;
    }
}

class Triangle extends Shape {
  constructor(text, textColor, color, shape) {
    super(text, textColor, color);
    this.shape = shape;
  }
    render() {
        return `${this.container}<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />${this.textElement}</svg>`;
    }
}

module.exports = { Shape, Circle, Square, Triangle };