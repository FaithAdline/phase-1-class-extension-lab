// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides !== 3) return false;
  
      const [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides !== 4) return false;
  
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
  
    get area() {
      if (this.isValid) {
        const side = this.sides[0];
        return side * side;
      } else {
        return NaN; // Invalid square, return Not a Number
      }
    }
  }
  
  // Testing the classes
  const triangle = new Triangle([3, 4, 5]);
  console.log('Is the triangle valid?', triangle.isValid); // Should print: true
  console.log('Triangle perimeter:', triangle.perimeter); // Should print: 12
  
  const square = new Square([4, 4, 4, 4]);
  console.log('Is the square valid?', square.isValid); // Should print: true
  console.log('Square area:', square.area); // Should print: 16
  
  const invalidSquare = new Square([4, 4, 4, 5]);
  console.log('Is the invalid square valid?', invalidSquare.isValid); // Should print: false
  console.log('Invalid square area:', invalidSquare.area); // Should print: NaN
  