var count = 5000;
console.log(count);

count = 1.000004 + 0.000006;
console.log(count);

var amount = 6000;
var name = 'haha';

console.log('name ='+name+', amount = '+amount);
console.log(`name = ${name}, amount = ${amount}`);

var emp = {
    id:1234,
    name:'haha',
    'address':'my home'
}
console.log(emp);

var myarray = [];

myarray[0] = 1000;
myarray[10] = 'haha';
myarray[999] = emp;

// console.log(myarray);rf

//typeof : 연산자
console.log(typeof myarray);
