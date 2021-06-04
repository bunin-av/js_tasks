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

const mapFn = s => ({name: s.name})

function map(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i])
    }
    return newArr
}

let q = map(students, mapFn)
console.log(q)

function filter(arr, func) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

function isMarried(arr){
    return arr.isMarried
}

console.log(filter(students,isMarried))


function find(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])){
            return arr[i]
        }
    }
}

console.log(find(students,isMarried))
