"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var _ = require("lodash");
var members = [
    { name: 'Laveesh Gupta', age: 20 },
    { name: 'Yash Jangid', age: 40 },
    { name: 'Firoz Khan', age: 41 },
    { name: 'Amrit Srivastava', age: 17 },
    { name: 'Chandraprakash Sharma' },
    { name: 'Swpril Ahuja', age: 45 },
    { name: 'Yogesh Khatri', age: 51 },
];
//question1
//get array of first names of everyone
var firstNames = _.map(members, function (value) {
    var length = 2;
    var name = _.split(value.name, " ", length);
    return name[0];
});
console.log(firstNames);
//question2
//Make everyone's last names in UPPERCASE in given array of objects
var lastNames = _.map(members, function (value) {
    var length = 2;
    var name = _.split(value.name, " ", length);
    return _.toUpper(name[1]);
});
console.log(lastNames);
//question3
//Get entries where age is between 41-60
var getTheAgeOfMember = _.filter(members, function (member) {
    _.inRange(member.age, 41, 60);
});
console.log(getTheAgeOfMember);
//question4
//Get average age
var getAverageAgeOfMembers = _.mean([20, 40, 41, 17, 45, 51]);
console.log(getAverageAgeOfMembers);
//question5
//Get Person with maximum age
var getMaximumAgeOfMembers = _.maxBy(members, 'age');
console.log(getMaximumAgeOfMembers);
var groupMembersByAge = _.groupBy(members, function (member) {
    if (member.age < 35) {
        return 'young';
    }
    else if (member.age > 35) {
        return 'old';
    }
    else {
        return 'noage';
    }
});
console.log(groupMembersByAge);
//question8
//extract first and second element using destructing
var a = members[0], b = members[1], rest = members.slice(2);
console.log('First and second element: ', a, b);
console.log('members', rest);
//question9
//Create a new array instance adding a new member at index 0,and keeping existing afterwards
var addNewArrayOfMember = __spreadArray([{ name: 'Harita sharma', age: 22 }], members, true);
console.log('New Array', addNewArrayOfMember);
//question1o
// Extract properties of object using destructuring
_.map(members, function (member) {
    var name = member.name, age = member.age;
    console.log('name of member', name);
    console.log('age of member', age);
});
//question11
//Rename extracted property of object while destructing
_.map(members, function (member) {
    var n = member.name, age = member.age;
    console.log('rename the key', n);
    console.log(age);
});
//question12
//destructure any property of object and use spread operator to get remaining properties in an object
var x = members[0], rest1 = members.slice(1);
console.log('element: ', x);
console.log('members', rest1);
//question13
//Create a new object by copying using spread operator, override one of the properties
// to assign a new value in the same step
var addNewProperty = members.map(function (item) { return (__assign(__assign({}, item), { gender: 'male' })); });
console.log(addNewProperty);
//question14
//Use reduce function on array and object
var total = [20, 22, 30].reduce(function (a, b) { return a + b; });
console.log("total is:" + total);
//question7
//add a new member to same members array instance at index 2
// members.splice(2,0, {name : 'Harita sharma', age: 22});
// console.log(members)
var addNewArrayOfMemberAtIndex = __spreadArray([a, b, { name: 'Harita sharma', age: 22 }], members, true);
console.log('New Array', addNewArrayOfMemberAtIndex);
