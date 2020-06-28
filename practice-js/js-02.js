// array = [1, 3, 7, 5, 6]; // number

// string
// const stringArray = array.map(function(element) {
//     return element.toString();
// });

// double
// [2, 6, 14, 10, 12]

// console.log(stringArray);

const students = [
  {
    name: "Nam",
    age: 24,
    gender: "male",
  },
  {
    name: "Mai",
    age: 22,
    gender: "female",
  },
  {
    name: "Trang",
    age: 23,
    gender: "female",
  },
  {
    name: "An",
    age: 20,
    gender: "male",
  },
  {
    name: "Thien",
    age: 27,
    gender: "male",
  },
];

// Cach 1 - basic
// .forEach()
students.forEach((element) => {
  console.log(element);
  if(element.gender === 'male') {
      male++;
  }
});

// Cach 2 - advanced
// .filter()

