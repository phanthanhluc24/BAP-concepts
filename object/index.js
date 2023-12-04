const arr=[]
arr.push(1)
console.log(arr);
// assigning by reference
const reference = [1]
const refCopy=reference
reference.push(2)
console.log(refCopy,reference);
//== and ===
const arrHref=["Hi!"]
const arrHref1=arrHref
console.log(arrHref==arrHref1);// true

const arr1= ["Hi!"]
const arr2= ["Hi!"]
console.log(arr1===arr2);// false

// Passing Parameters through Functions
const hundred=100
const two=2

function multiple(x,y) {
    return x*y
}

const towHundred=multiple(hundred,two)
console.log(towHundred);// 200

// pure function

function changeImpure(person){
    person.age=25
    return person
}
const alex={
    name:"Luc",
    age:20
}
const changedAlex=changeImpure(alex)
console.log(alex);
console.log(changedAlex);
console.log(alex===changedAlex);