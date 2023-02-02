const str = 'My name is Natallia';

console.log(str.repeat(3));
console.log(str.includes('n'));
console.log(str.lastIndexOf('is'));
console.log(str.slice(3,));
console.log(str.slice(3, 7));


const studentIt = [
    {firstName: 'Иван',
    lastName:'Иванов',
    age: 18},
    {firstName: 'Петя',
    lastName:'Петров',
    age: 27},
    {firstName: 'Лена',
    lastName:'Сидорова',
    age: 44}
];

const studenIt2 = [
    {firstName: 'Света',
    lastName:'Герасимова',
    age: 31}
];

const names = studentIt.map(elem => elem.firstName);
console.log(names);

const age = studentIt.filter(elem => elem.age > 20);
console.log(age);

const age2 = studentIt.every(elem => elem.age >= 18);
console.log(age2);

const studentItNew = studentIt.concat(studenIt2);
console.log(studentItNew);

const student = studentIt.sort(function (a, b) {
    if (a.firstName > b.firstName) {
        return 1;
    }
    if (a.firstName < b.firstName) {
        return -1;
    }
    return 0;
});

console.log(student);

