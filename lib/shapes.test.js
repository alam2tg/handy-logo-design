// import all classes, just like in the index.js
const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

//create test for each shape
// each shape should be tested for a render method 

//CIRCLE TEST
describe('Circle class', () => {
    it('should render the shape circle', () => {
        //arrange
        const circle = new Circle('SVG', 'pink');
        //act
        const svg = circle.render();
        //assert
        const expectedSVG = `<circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="110" font-size="50" text-anchor="middle" fill="pink">SVG</text>`
    })
})
// TRIANGLE TEST
describe('Trianlge class', () => {
    it('should render the shape triangle', () => {
        const triangle = new Triangle('SVG', 'pink');
        const svg = triangle.render();
        const expectedSVG = `<polygon width="200" height="200" points="50,200 250,200 150,0" fill="pink" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="pink">SVG</text>`
    })
})
//SQUARE TEST
describe('Square class', () => {
    it('should render the shape square', () => {
        const square = new Square('SVG', 'pink');
        const svg = square.render();
        const expectedSVG = `<rect x="90" y="40" width="120" height="120" stroke="black" fill="pink" stroke-width="5"/><text x="90" y="110" font-size="60" text-anchor="middle" fill="pink">SVG</text>`
    })
})
