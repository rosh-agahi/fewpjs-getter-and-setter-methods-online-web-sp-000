// Add your Circle class here

class Circle{
  constructor(radius) {
          this.radius = radius
  }
  
  get diameter() {
    return 2 * this.radius
  }

  get circumference() {
    return this.diameter * Math.PI
  }
  
  set diameter(newDiameter) {
    this.radius = newDiameter/2
  }

  set circumference(newCircumference) {
    this.radius = newCircumference/(2*Math.PI)
  }
  
  get area() {
    return (this.radius**2) * Math.PI
  }
      
}