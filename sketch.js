function setup() {
    const width = 700;
    const height = 700;
  
    createCanvas(width, height);
  
    const backgroundColor = color('lightblue');
    const shapeColor = color('gray');
  
    
    background(backgroundColor);
  
    
    function drawCircle(x, y, radius) {
      fill(shapeColor);
      ellipse(x, y, radius);
    }
  
    
    function drawSquare(x, y, size) {
      fill(shapeColor);
      rect(x, y, size, size);
    }
  
    function drawTriangle(x, y, size) {
      fill(shapeColor);
      triangle(x, y, x + size, y, x + size / 2, y - size);
    }
  
    drawCircle(width / 2, height / 2, width / 4); 
    drawSquare(width / 4, height / 4, width / 2); 
    drawTriangle(width * 3 / 4, height / 4, width / 2);
}

  