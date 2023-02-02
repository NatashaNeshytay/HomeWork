let studentIt = [
    {firstName: 'Иван',
    lastName:'Иванов',
    age: 18},
    {firstName: 'Петя',
    lastName:'Петров',
    age: 27},
    {firstName: 'Лена',
    lastName:'Сидорова',
    age: 44}
]

let names = studentIt.map( studentIt => studentIt.firstName());
console.log(names);