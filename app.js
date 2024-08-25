let array = [1, 2, 5, 4, 6, 3, 7, 6, 8, 9];

let newArray = [];

for (let i = 0; i < array.length; i++) {
  if (newArray.includes(array[i])) {
    console.log(array[i]);
    break;
  } else {
    newArray.push(array[i]);
  }
}
