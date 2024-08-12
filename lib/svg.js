class SVG{
    constructor(){
        this.TextElement = ""
        this.ShapeElement = ""
    }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.ShapeElement}${this.TextElement}</svg>`;
    }
    setTextElement(color,text){
        this.TextElement = `<text x="150" y="130" font-family="Arial" font-size="20" fill="${color}" text-anchor="middle">${text}</text>`
    }
    setShapeElement(shape){
        this.ShapeElement = shape.render()
    }
}

module.exports = SVG;