const { Shape, Circle, Triangle, Square } = require('./shapes');


describe('Shape Classes', () => {
  test('Circle render method returns correct SVG string', () => {
    const circle = new Circle();
    circle.setColor('red');
    const expectedSvg = '<circle cx="150" cy="100" r="80" stroke="black" stroke-width="2" fill="red" />';
    expect(circle.render()).toBe(expectedSvg);
  });

  test('Triangle render method returns correct SVG string', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    const expectedSvg = '<polygon points="150,20 270,180 30,180" stroke="black" stroke-width="3" fill="blue" />';
    expect(triangle.render()).toBe(expectedSvg);
  });

  test('Square render method returns correct SVG string', () => {
    const square = new Square();
    square.setColor('green');
    const expectedSvg = '<rect x="110" y="60" width="80" height="80" stroke="black" stroke-width="3" fill="green" />';
    expect(square.render()).toBe(expectedSvg);
  });

  test('Shape setColor method correctly sets the color', () => {
    const shape = new Shape();
    shape.setColor('purple');
    expect(shape.Color).toBe('purple');
  });

  test('Circle setColor method correctly sets the color', () => {
    const circle = new Circle();
    circle.setColor('yellow');
    expect(circle.Color).toBe('yellow');
  });

  test('Triangle setColor method correctly sets the color', () => {
    const triangle = new Triangle();
    triangle.setColor('orange');
    expect(triangle.Color).toBe('orange');
  });

  test('Square setColor method correctly sets the color', () => {
    const square = new Square();
    square.setColor('pink');
    expect(square.Color).toBe('pink');
  });
});
