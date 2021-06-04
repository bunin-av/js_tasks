const todolistID_1 = '11231-23213'
const todolistID_2 = '11541-23213'

const tasks = {
    [todolistID_1]: [
        {id: 1, title: "CSS", isDone: false},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "React", isDone: false},
    ],
    [todolistID_2]: [
        {id: 1, title: "CSS", isDone: false},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "CSS", isDone: false}
    ]
}

console.log(tasks[todolistID_1][2].title) // => React


function f(a, b = 2, c) {
    console.log(b)
}

f(1, undefined, 3)


//.reduce

const numbers = [1, 2, 3, 4, 5]

console.log(numbers.reduce((acc, el) => acc + el, 0))


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

//sum
console.log(students.reduce((acc, el) => acc + el.scores, 0))

//find
console.log(students.reduce((acc, el) => {
    if (el.name === "Bob") {
        acc = el
    }
    return acc
}, null))

//filter
console.log(students.reduce((acc, el) => {
    if (el.isMarried) {
        acc.push(el)
    }
    return acc
}, []))

//map
console.log(students.reduce((acc, el) => {
    acc.push(el.name)
    return acc
}, []))


