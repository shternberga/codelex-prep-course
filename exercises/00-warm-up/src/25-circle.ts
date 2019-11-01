export {};

function Circle(radius: number) {
  this.radius = radius;
  this.area = function() {
    return this.radius * this.radius * 3.14;
  };
  this.perimeter = function() {
    return 2 * this.radius * 3.14;
  };
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85
