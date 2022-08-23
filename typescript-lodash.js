var _ = require('lodash');
var members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 }
];
//question1
//get array of first names of everyone
var firstname = _.map(members, function (value) {
    var name = _.split(value.name, " ", 2);
    return name[0];
});
console.log(firstname);
//question2
//Make everyone's last names in UPPERCASE in given array of objects
var res = _.map(members, function get(value) {
    var names = value.name;
    var lastindex = names.split(' ');
    var x = lastindex[0];
    var y = lastindex[1].toLocaleUpperCase();
    var ans = x + ' ' + y;
    console.log(ans);
});
//question3
//Get entries where age is between 41-60
var u1 = _.filter(members, function (u) { return u.age >= 41 && u.age <= 60; });
console.log(u1);
//question4
//Get average age
var mean_val = _.mean([20, 40, 41, 17, 45, 51]);
console.log(mean_val);
//question5
//Get Person with maximum age
var max_obj = _.maxBy(members, 'age');
console.log(max_obj);
//question6
//Divide persons in three groups, result should look like
//{
//  'young': [],
//    'old': [],
//  'noage': []
//  }
//  Less than 35yrs is young, above 35 is old
var arr1 = [];
var arr2 = [];
var arr3 = [];
var objec = _.map(members, function get(value) {
    if (value.age < 35) {
        arr1.push(value.age);
    }
    else if (value.age > 35) {
        arr2.push(value.age);
    }
    else {
        arr3.push(value.age);
    }
});
var obje = {
    'young': arr1,
    'old': arr2,
    'noage': arr3
};
console.log(obje);
//question8
//extract first and second element using destructing
console.log(_.nth(members, 0));
console.log(_.nth(members, 1));
//question9
//Create a new array instance adding a new member at index 0,and keeping existing afterwards
members.splice(0, 0, { name: 'harita' });
console.log(members);
//question1o
// Extract properties of object using destructuring
var result = _.each(members, function (value) {
    console.log(value.name);
    console.log(value.age);
});
//question11
//Rename extracted property of object while destructing
Object.keys(members).forEach(function (key) {
    members[key].number = members[key].age;
    delete members[key].age;
});
console.log(members);
//question12
var obj3 = [];
Object.keys(members).forEach(function (key) {
    obj3.push(members[key].name);
    obj3.push(members[key].age);
});
var newArray = _.clone(obj3);
console.log(obj3);
//question7
//add a new member to same members array instance at index 2
var count = 0;
Object.keys(members).forEach(function (key) {
    count++;
    if (count == 2) {
        _.set(members[key], 'gender', 'male');
    }
});
console.log(members);
//question13
//Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
var newobj = _.clone(members);
Object.keys(newobj).forEach(function (key) {
    _.set(newobj[key], 'gender', 'male');
});
console.log(newobj);
//question14
//Use reduce function on array and object
var array = [1, 2, 3, 4, 5];
var res = _.reduce(array, function sum(acc, value) {
    return acc + value;
}, 0);
console.log(res);
var obja = [
    {
        prod_name: "A",
        price: 2300
    },
    {
        prod_name: "B",
        price: 200
    },
    {
        prod_name: "C",
        price: 2100
    },
];
var res = _.reduce(obja, function sum(acc, value) {
    return acc + value.price;
}, 0);
console.log(res);
