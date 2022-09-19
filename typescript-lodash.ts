import * as _ from "lodash";

export type m = {name: string, age?: number};
const members: m[] = [
    { name: 'Laveesh Gupta', age: 20},
    { name: 'Yash Jangid', age: 40},
    { name: 'Firoz Khan', age: 41},
    { name: 'Amrit Srivastava', age: 17},
    { name: 'Chandraprakash Sharma'},
    { name: 'Swpril Ahuja', age: 45},
    { name: 'Yogesh Khatri', age: 51},
  ];

  //question1
  //get array of first names of everyone
  const firstNames: string[] = _.map( members, (value) => {
    let length: number=2;
    const name = _.split(value.name, " " , length);
    return name[0];
 });
 console.log(firstNames);


 //question2
 //Make everyone's last names in UPPERCASE in given array of objects
const lastNames: string[] = _.map(members, (value) => {
  let length: number = 2;
  const name = _.split(value.name, " ", length);
  return _.toUpper(name[1]);
});
console.log(lastNames);

 //question3
  //Get entries where age is between 41-60
  const getTheAgeOfMember : m[] = _.filter(members, member => { 
    _.inRange(member.age, 41, 60)
  })
  console.log(getTheAgeOfMember);


  //question4
  //Get average age
  const getAverageAgeOfMembers : number = _.mean([20, 40, 41, 17, 45, 51]);  
  console.log(getAverageAgeOfMembers);


  //question5
  //Get Person with maximum age
  const getMaximumAgeOfMembers : m = _.maxBy(members, 'age');  
  console.log(getMaximumAgeOfMembers);


//question6
//Divide persons in three groups, result should look like
//{
//  'young': [],
//    'old': [],
//  'noage': []
//  }
//  Less than 35yrs is young, above 35 is old
type ageGroup = {[x:string] : number[] | undefined }
const groupMembersByAge :ageGroup = _.groupBy(members, (member) =>{
  if(member.age<35){
    return 'young'
  }
  else if(member.age>35){
    return 'old'
  }
  else{
    return 'noage'
  }
}
)
console.log(groupMembersByAge);



//question8
//extract first and second element using destructing
const [a,b, ...rest] = members
console.log('First and second element: ', a ,b);
console.log('members', rest);



//question9
//Create a new array instance adding a new member at index 0,and keeping existing afterwards
 let addNewArrayOfMember : m[] = [{name : 'Harita sharma', age : 22}, ...members]
 console.log('New Array', addNewArrayOfMember);




//question1o
// Extract properties of object using destructuring
   _.map(members, member => {
    const {name,age} = member
    console.log('name of member', name);
    console.log('age of member' , age);
  });





  //question11
  //Rename extracted property of object while destructing
   _.map(members, member => {
    const {name: n, age} = member
   
   console.log('rename the key', n);
   console.log(age);
   })





//question12
//destructure any property of object and use spread operator to get remaining properties in an object
const [x, ...rest1] = members
console.log('element: ', x );
console.log('members', rest1);



//question13
//Create a new object by copying using spread operator, override one of the properties
// to assign a new value in the same step

var addNewProperty = members.map(item => ({
  ...item, gender: 'male'
}))
console.log(addNewProperty);




//question14
//Use reduce function on array and object
var total = [20,22,30].reduce(function (a,b) { return a+b;});
console.log("total is:" +total);

//question7
//add a new member to same members array instance at index 2
// members.splice(2,0, {name : 'Harita sharma', age: 22});
// console.log(members)
let addNewArrayOfMemberAtIndex : m[] = [a, b,  {name : 'Harita sharma', age : 22}, ...members]
console.log('New Array', addNewArrayOfMemberAtIndex);
