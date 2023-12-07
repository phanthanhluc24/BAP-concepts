function person() {
    console.log(`Hello ${this.name}`);  
}

const people={name:"Phan Thanh Luc"}

person.call(people)
person.apply(people)

const sayHello=person.bind(people)
sayHello()