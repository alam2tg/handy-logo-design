const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./utils/shapes');

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
		message: "Color: Enter a color keyword (ex: 'Blue') or a 6 character hexidecimal code)"
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
console.log(questions)

function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data, function(err) {
		if (err) {
			return console.log(err)
		}
		console.log(answers)
	})
}

async function init() {
	let svgFileName = "./generatedLogo/logo.svg"
	const answers = await inquirer.prompt(questions)
		.then((answers) => {
			console.log(answers)
			const svg = new Shape()

			let userShape;

			if(userShapeType === "Square") {
				userShape = new Square(answers.text, answers.textColor);
			}
			else if (userShapeType === "Circle") {
				userShape = new Circle(answers.text, answers.textColor);
			}
			else if (userShapeType === "Triangle") {
				userShape = new Triangle(answers.text, answers.textColor);
			}

			userShape.setColor(answers.shapeColor)
			
			svg.setShape(userShape.render())

			writeToFile(svgFileName, svg.render())
			
			})

}
init();