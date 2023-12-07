// Tạo constructor function
function Person(name) {
    this.name = name;
  }
  
  // Thêm phương thức vào prototype
  Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Tạo đối tượng từ constructor
  const john = new Person('John');
  john.sayHello(); // Output: Hello, my name is John
  
  // Tạo constructor và kế thừa từ Person
function Student(name, grade) {
    Person.call(this, name); // Gọi constructor của Person để thiết lập name
    this.grade = grade;
  }
  
  // Kế thừa từ prototype của Person
  Student.prototype = Object.create(Person.prototype);
  
  // Thêm phương thức riêng của Student
  Student.prototype.displayGrade = function() {
    console.log(`${this.name} is in grade ${this.grade}`);
  };
  
  // Tạo đối tượng từ constructor Student
  const student1 = new Student('Alice', 5);
  student1.sayHello();      // Output: Hello, my name is Alice
  student1.displayGrade();  // Output: Alice is in grade 5
  