const nums = [10, 36, 28, 504, 29, 8, 47]
const areGreater = nums.every(num => num >= 8)
console.log(areGreater);

const odds = nums.filter(function(num) {
    return num % 2 !== 0
})
console.log(odds);

const users = [
    {name:'Natalia', age:40},
    {name:'Elena', age:35},
    {name:'Ekaterina', age:34},
    {name:'Tatiana', age:50}
]

const isAllUsersElena = users.every(users => {
    return users.name === 'Elena'
})
console.log(isAllUsersElena);

const findMax = function(arr) {
    arr.sort((a, b) => a-b)
    console.log(arr[arr.length-1])
}
findMax([5, 2, 49, 47, 32, 34, 6, 46, 9, 16]);

let str = "my name is Natalia";
let result = str.split("").reverse( ).join("");

console.log(result);

let employees = {
	boss: 'Ekaterina',
	headTeacher: 'Elena',
	accordionTeacher: 'Alla',
	guitarTeacher: 'Anna'
};

let employees2 = {
    cymbalsTeacher: 'Natalia',
    solfeggioTeacher: 'Elena'
};

const keys = Object.keys(employees);
const keys2 = Object.keys(employees2);
const concat = keys.concat(keys2);
const length = Object.keys(employees).length;

console.log(keys);
console.log(keys2);
console.log(concat);
console.log(length);
