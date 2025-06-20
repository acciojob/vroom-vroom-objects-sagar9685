// Complete the js code
function Car(make, model) {
		this.make = make;
	this.model = model;
}

Car.prototype.getMakeModel = function () {

	return `${this.make} ${this.model}`;
	
};


function SportsCar(make, model, topSpeed) {
  // Inherit make and model from Car
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit prototype from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};


 
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
