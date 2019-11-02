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
