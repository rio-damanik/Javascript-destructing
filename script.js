const students = ["Alice", "Bob", "Charlie", "Maria", "Edward", "Bobby"];

// array
const [student1, student2, student3, student4, student5, student6] = students;

console.log(student1); // Alice - 0
console.log(student2); // Bob - 1
console.log(student3); // Charlie - 2
console.log(student4); // maria - 3
console.log(student5); // Edward - 4
console.log(student6); // Bobby - 5

console.log(student1, student2);
console.log(students);

// Destructing array

const [studentsatu, stundentdua, studenttiga, ...otherstudents] = students;
console.log(student1, student2, student3, otherstudents);

// Object
const iphone15pro = {
  model: "Iphone 15 pro",
  price: 1000,
  color: "black",
  specfication: {
    processor: "A17 Bionic",
    storage: "128gb",
    camera: {
      front: "12MP",
      rear: "48MP",
    },
    battery: "3200mAh",
  },
  availability: "in Stock",
};

const { model, price, color } = iphone15pro;
console.log(model); //Iphone 15 pro
console.log(price); // 1000
console.log(color); // Black

console.log(iphone15pro);

// Object for Alias

const iphone14ProMax = {
  model: "iPhone 14 Pro Max",
  price: 1099,
  color: "Deep Purple",
  specifications: {
    processor: "A16 Bionic",
    storage: "256GB",
    camera: {
      front: "12MP",
      rear: "48MP",
    },
    battery: "4323mAh",
  },
  availability: "In Stock",
};

// destructing Object with Alias

const {
  model: phoneModel,
  price: phonePrice,
  color: phoneColor,
  specifications: {
    processor: pscr,
    storage: strg,
    camera: { front: frontCam, rear: rearCam },
  },
  availability: stockStatus,
} = iphone14ProMax;

console.log(phoneModel); // iPhone 14 Pro Max
console.log(phonePrice); // 1099
console.log(phoneColor); // Deep Purple
console.log(pscr); // A16 Bionic
console.log(strg); // 256GB
console.log(frontCam); // 12MP
console.log(rearCam); // 48MP
console.log(stockStatus); // In Stock

console.log(iphone14ProMax);

// Default Value

const student = {
  name: "Alice",
  age: 20,
  major: "Information System",
  address: {
    city: "Bogor",
  },
};

// Destructuring Default Value
const {
  name,
  age,
  major,
  gpa = 3.5,
  address: { city, state = "Jawa Barat", country = "Indonesian" } = {},
} = student;

console.log(name); // Alice
console.log(age); // 20
console.log(major); // Computer Science
console.log(gpa); // 4.0 (default value)
console.log(city); // Bogor
console.log(state); // Jawa Barat (default value)
console.log(country); // Indonesia (default value)

console.log(student);
