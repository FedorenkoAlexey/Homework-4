function DriveCar() {
  let _petrol = 0;
  let _distance = 0;
  function calculate(gas) {
    _petrol += gas;
    _distance += gas * 10;
  }
  function driveWay(km) {
    _petrol -= km / 10;
    _distance -= km;
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
let car = new DriveCar(20);

car.addGas();
car.addGas();
car.addGas();
car.addGas();
car.addGas();
car.addGas();
car.drive();
console.log(car.petrol());
console.log(car.distanse());
