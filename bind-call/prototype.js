function Introduce(name,province,place) {
    this.name=name
    this.province=province
    this.place=place
}

Introduce.prototype.sayHello=function(){
    console.log(`Hello everyone, my name is ${this.name}, I come from ${this.province}`);
}

Introduce.prototype.doAction=function(){
    console.log(`Today I running at ${this.place}`);
}

const luc=new Introduce("Phan Thanh Luc","Quang Tri","My Khe beat")
luc.sayHello()
luc.doAction()