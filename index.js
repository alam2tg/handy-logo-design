const fs = require('fs');
const inquirer = require('inquirer');
const {Shape, Circle, Square, Triangle} = require('./lib/shapes');

class SVG {
	constructor() {
		this.textEl = '';
		this.shapeEl = '';
	}
	render() {
		return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
	}
	//set text 
	setTextEl(text,color) {
		this.textElement = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`
	}
	setShapeEl(shape) {
		this.shapeEl = shape.render()
	}
}

//create questions
const questions = [
	{
		type: "input",
		name: "text",
		message: "Text: Enter up to 3 characters for logo",
		validate: textInput => {
			if (textInput.length <= 3) {
				return true;
			}}
	},{
		type: "input",
		name: "textColor",
		message: "Text-Color: Enter a color keyword (ex: 'Blue') or a 6 character hexidecimal code)"
	}, {
		type: "input",
		name: "shapeColor",
		message: "Shape-Color: Enter a color keyword or a 6 character hexidecimal code"
	},{
		type: "list",
		name: "shapeType",
		message: "Choose the shape for your logo from the following...",
		choices: ["Circle", "Square", "Triangle"]
	}
]

async function init() {
	inquirer.prompt(questions)
		.then((answers) => {
			const svg = new Shape()
			let userShape;

			if(answers.shapeType === "Square") {
				userShape = new Square(answers.text, answers.textColor);
			}
			else if (answers.shapeType === "Circle") {
				userShape = new Circle(answers.text, answers.textColor);
			}
			else if (answers.shapeType === "Triangle") {
				userShape = new Triangle(answers.text, answers.textColor);
			}

			userShape.setColor(answers.shapeColor)
			
			svg.setShape(userShape.render())

			fs.writeFileSync("./generatedLogo/logo.svg", svg.render())
			
			console.log(answers)
			})

}
init();