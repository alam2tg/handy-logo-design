// create class with constructor for color and color value.

class Shape {
	constructor() {
		this.color='';
	}
	setColor(color){
		this.color=color;
	}
}

class Circle extends Shape {
	render() {
		return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
	}
}

class Square extends Shape {
	render() {
		return `<rect x="90" y="40" width="120" height="120" fill="${this.color}"`
	}
}

class Triangle extends Shape {
	render() {
		return `<polygon width="200" height="200" points="50,200 250,200 150,0" fill="${this.color}">`
	}
}

module.exports = {Circle, Square, Triangle}


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

