// Add your Circle class here

class Circle{
  constructor (radius){
          this.radius = radius
  }
  
  get diameter (){
    return 2 * this.radius
  }

  get circumference (){
    return this.diameter * Math.PI
  }
      
}