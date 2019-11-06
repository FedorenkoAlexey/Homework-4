let array = [99, 3, 1, 15, 8, 22, 2, 4];

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

array.myEach(function(el, i, array) {
  console.log(el);
});

Array.prototype.myMap = function(callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};

let arrMap = array.myMap(function(el, i, array) {
  x = el * 2;
  return x;
});

console.log(arrMap);

Array.prototype.mySort = function(callback) {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - 1; j++) {
      if (this[j] > this[j + 1]) {
        let newMax = this[j];
        this[j] = this[j + 1];
        this[j + 1] = newMax;
      }
    }
  }
  return this;
};
let sortArr = array.mySort();
console.log(sortArr);
