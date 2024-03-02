// Import the classes from shapes.js
const { Shape, Circle, Square, Triangle } = require('./shapes.js'); 

describe('Shape', () => {
  it('should create a new Shape', () => {
    const shape = new Shape('abc', 'black', 'white');
    expect(shape.text).toBe('abc');
    expect(shape.textColor).toBe('black');
    expect(shape.color).toBe('white');
  });
});

describe('Circle', () => {
  it('should create a new Circle', () => {
    const circle = new Circle('abc', 'black', 'white', 'circle');
    expect(circle.text).toBe('abc');
    expect(circle.textColor).toBe('black');
    expect(circle.color).toBe('white');
    expect(circle.shape).toBe('circle');
  });
});

describe('Square', () => {
  it('should create a new Square', () => {
    const square = new Square('abc', 'black', 'white', 'square');
    expect(square.text).toBe('abc');
    expect(square.textColor).toBe('black');
    expect(square.color).toBe('white');
    expect(square.shape).toBe('square');
  });
});

describe('Triangle', () => {
  it('should create a new Triangle', () => {
    const triangle = new Triangle('abc', 'black', 'white', 'triangle');
    expect(triangle.text).toBe('abc');
    expect(triangle.textColor).toBe('black');
    expect(triangle.color).toBe('white');
    expect(triangle.shape).toBe('triangle');
  });
});

describe('Square', () => {
    it('should create a new Square', () => {
        const square = new Square('abc', 'green', 'white', 'square');
        expect(square.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="85" y="35" width="130" height="130" fill="white" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="green">abc</text></svg>');
    })
})

describe('Circle', () => {
    it('should create a new Circle', () => {
        const circle = new Circle('abc', 'blue', 'red', 'circle');
        expect(circle.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">abc</text></svg>');
    })
})

describe('Triangle', () => {
    it('should create a new Triangle', () => {
        const triangle = new Triangle ('abc', 'blue', 'red', 'triangle');
        expect(triangle.render()).toEqual('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="blue">abc</text></svg>');
    })
})