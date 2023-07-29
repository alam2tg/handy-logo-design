// import all classes, just like in the index.js
const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

//create test for each shape
// each shape should be tested for a render method 
describe('Shapes class', () => {
	it('should render the type of shape', () => {
		 //arrange
		 const shape = new Shapes();
		 //act
		 const svg = shape.render();
		 //assert
		 const expectedSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">square</svg>`
		 expect(svg).toEqual(expectedSvg);
	})
})
//CIRCLE TEST
describe('Circle class', () => {
    it('should render the shape circle', () => {
        //arrange
        const circle = new Circle()
        //act
        const svg = circle.render();
        //assert
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill=""/><text x="150" y="110" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expect(svg).toEqual(expectedSvg);
    })
})
// TRIANGLE TEST
describe('Trianlge class', () => {
    it('should render the shape triangle', () => {
        const triangle = new Triangle();
        const svg = triangle.render();
        const expectedSvg = `<polygon width="200" height="200" points="50,200 250,200 150,0" fill="blue" /><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expected(svg).toEqual(expectedSvg);
    })
})
//SQUARE TEST
describe('Square class', () => {
    it('should render the shape square', () => {
        const square = new Square();
        const svg = square.render();
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill=""/><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expect(svg).toEqual(expectedSvg);
    })
})
