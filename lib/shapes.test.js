// import all classes, just like in the index.js
const { Shapes, Triangle, Circle, Square } = require("./shapes.js");

//create test for each shape
// each shape should be tested for a render method 
//CIRCLE TEST
describe('Circle class', () => {
    it('should render the shape circle', () => {
        //arrange
        const circle = new Circle()
        //act
        const svg = circle.render();
        //assert
        const expectedSvg = `<circle cx="150" cy="100" r="80" fill=""/><text x="150" y="110" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expect(expectedSvg).toEqual(svg);
    })
})
// TRIANGLE TEST
describe('Trianlge class', () => {
    it('should render the shape triangle', () => {
        const triangle = new Triangle();
        const svg = triangle.render();
        const expectedSvg = `<polygon width="200" height="200" points="50,200 250,200 150,0" fill=""/><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expect(expectedSvg).toEqual(svg);
    })
})
//SQUARE TEST
describe('Square class', () => {
    it('should render the shape square', () => {
        const square = new Square();
        const svg = square.render();
        const expectedSvg = `<rect x="90" y="40" width="120" height="120" fill=""/><text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		//   const expectedShape =`<rect x="90" y="40" width="120" height="120" fill=""/>`
		//   const expectedText = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="undefined">undefined</text>`
		  expect(svg).toEqual(expectedSvg);
    })
})
