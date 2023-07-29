// create class with constructor for color and color value.

class Shape {
	constructor() {
		this.color='';
		this.shape='';
	}
	setColor(color) {
		this.color = color;
	}
	setShape(shape) {
		this.shape = shape;
	}
	render() {
		return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">${this.shape}</svg>`
	}
}

class Circle extends Shape {
	constructor(text, textColor){
		super();
		this.text = text;
		this.textColor = textColor;
	}
	render() {
		return `<circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
	}
}

class Square extends Shape {
	constructor(text, textColor){
		super();
		this.text = text;
		this.textColor = textColor;
	}
	render() {
		return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
	}
}

class Triangle extends Shape {
	constructor(text, textColor){
		super();
		this.text = text;
		this.textColor = textColor;
	}
	render() {
		return `<polygon width="200" height="200" points="50,200 250,200 150,0" fill="${this.color}"/><text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
	}
}

module.exports = {Shape, Circle, Square, Triangle}


/* Comments */

/*polygon uses points - last connects to first 

x middle = 150
bottom-left = 150 - half-width
bottom-right = 150 + half-width
width = 150... 
left = 150-75,75 right = 150+75 225

height = 2 Area / Base
area = heiht*width/2
width=150, height = 150
y top = height - (height-triangle height)/2)
y top = 200 - (200-150)/2 = 175
y bottom = 0 + (200-150)/2 = 25

too small, use 200 height/width
width too small, use full width
*/

