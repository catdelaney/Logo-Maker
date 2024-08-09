function generateSVG(answers) {
 if(answers.Shape === "circle") {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" stroke="black" stroke-width="2" fill="${answers.ShapeColor}" />
  <text x="100" y="105" font-family="Arial" font-size="20" fill="${answers.TextColor}" text-anchor="middle">
${answers.Text}  
</text>
</svg>`
 }
//  if else(answers.Shape === triangle)
 }

module.exports = generateSVG;