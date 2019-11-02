let arrow = [99, 3, 1, 15, 8, 22, 2, 4];

let myEach = function(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
};

myEach(arrow, function(el) {
  console.log(el);
});

let myMap = function(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
};

let arrMap = myMap(arrow, function(el) {
  x = el * 2;
  return x;
});

console.log(arrMap);

let mySort = function(arrow) {
  for (let i = 0; i < arrow.length - 1; i++) {
    for (let j = 0; j < arrow.length - 1; j++) {
      if (arrow[j] > arrow[j + 1]) {
        let elem = arrow[j];
        arrow[j] = arrow[j + 1];
        arrow[j + 1] = elem;
      }
    }
  }
  return arrow;
};
let sortArr = mySort(arrow);
console.log(sortArr);
