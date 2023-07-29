const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require(".utils/shapes");

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
			if (textInput.length > 3) {
				console.log("Please enter a character count 3 or less")
			} else {
				return true;
			}
		}
	},{
		type: "input",
		name: "text-color",
		message: "Color: Enter a color keyword (ex: 'Blue') or a 6 character hexidecimal code)"
	}, {
		type: "input",
		name: "shape-color",
		message: "Shape-Color: Enter a color keyword or a 6 character hexidecimal code"
	},{
		type: "list",
		name: "shape",
		message: "Choose the shape for your logo from the following...",
		choices: ["Circle", "Square", "Triangle"]
	}
]

//writefile
function writeToFile(fileName, data) {
	return fs.writeFileSync(path.join(process.cwd(), fileName), data, function(err) {
		if (err) {
			return console.log(err)
		}
	})
}

async function init() {
	const svgFileName = "./generatedLogo/logo.svg"
	let svg = '';


	const answers = await inquirer.prompt(questions);

	//text input
	let 

	//font-color input

	//shape color input

	//shape input

	//writeToFile(fileName, data)

}