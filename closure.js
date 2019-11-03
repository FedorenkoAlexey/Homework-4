function DriveCar() {
  let _petrol = 0;
  let _distance = 0;

  function calculate(gas) {
    _petrol += gas;
    _distance += gas * 10;
  }

  function driveWay(km) {
    if (_distance <= 0) {
      console.log("First add petrole");
    } else {
      _petrol -= km / 10;
      _distance -= km;
    }
  }
  return {
    addGas: function() {
      calculate(1);
    },
    drive: function() {
      driveWay(10);
    },
    petrol: function() {
      return _petrol;
    },
    distanse: function() {
      return _distance;
    }
  };
}
let car = new DriveCar();

// car.addGas(); // add 1 liters petrol
// car.addGas();
// car.addGas();
// car.addGas();
// car.addGas();
// car.addGas();

// car.drive(); // drive 10km
// car.drive();
console.log("Have gas: " + car.petrol() + " liters");
console.log("You can drive: " + car.distanse() + " km");
