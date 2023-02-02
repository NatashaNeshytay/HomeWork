const email = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@+[a-zA-Z0]+\.[a-zA-Z0]+/;
const isEmail = (str) => email.test(str);

console.log(isEmail('mail@mail.312412'))
console.log(isEmail('mail213_123@mail.com'))
console.log(isEmail('_@mail.ru'))
console.log(isEmail('324mail@mail.ru'))
console.log(isEmail('t@test.ru'))

