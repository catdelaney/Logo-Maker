# Logo-Maker

## Description
This Node.js command-line application generates a custom SVG logo. Users can input up to three characters for the logo text, select a shape (Circle, Triangle, or Square), and specify colors for both the text and shape using color keywords or hexadecimal values. The application creates a logo.svg file based on these inputs. To use, clone the repository, install dependencies with `npm install`, and run `node index.js` to generate your logo. 

## Walk-Through Video
[Video](https://www.loom.com/share/b8e5dbbe232142fb82784e34aef235f5?sid=48c05112-b77d-4342-9d2c-5b3814b140e8)

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Links
Deployed Link: https://catdelaney.github.io/Logo-Maker/

GitHub Repo: https://github.com/catdelaney/Logo-Maker