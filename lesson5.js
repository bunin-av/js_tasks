const array = [22, 25, 39, 2, 99, 65, 32, 7]

for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - 1 - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }
    }
}

console.log(array)

const strings = ["Alex", "900", "redux", "Bob", "Юрий"]

console.log(strings.sort())

const numbers = [1, 1000, 90, 2, 150]

console.log(numbers.sort())

const compareNums = (a, b) => {
    if (a <= b) {
        return -1
    } else {
        return 1
    }
}

const compareNums2 = (a, b) => a - b

console.log(numbers.sort(compareNums))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Andrew",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];
console.log(students
  .sort((a,b)=>a.scores - b.scores)
  .reverse()
)

console.log(students.sort((a,b)=>a.name<b.name ? -1 : 1))