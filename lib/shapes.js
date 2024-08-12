class Shape{
  constructor(){
    this.Color = ""
  }
  setColor(Color){
    this.Color = Color
  }
}

class Circle extends Shape{
  render(){
    return `<circle cx="150" cy="100" r="80" stroke="black" stroke-width="2" fill="${this.Color}" />`
  }
}

class Triangle extends Shape{
  render(){
    return `<polygon points="150,20 270,180 30,180" stroke="black" stroke-width="3" fill="${this.Color}" />`
  }
}

class Square extends Shape{
  render(){
    return `<rect x="110" y="60" width="80" height="80" stroke="black" stroke-width="3" fill="${this.Color}" />`
  }
}

module.exports = { Shape, Circle, Triangle, Square };