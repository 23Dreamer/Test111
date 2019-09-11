// class Student {
//   fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person : Person) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// document.body.innerHTML = greeter(user);
// type MapToPromise<T> = { [K in keyof T]: Promise<T[K]> };
// type Coordinate = [number,number];
// type PromiseCoordinate = MapToPromise<Coordinate>; 
// let isDone: boolean = false;
// let decLiteral: number = 5;
// let aaa: string = "bob";
// aaa = 'Student';
// let sec: string =  `hello world!`;
// let arr: number[] = [23,34];
// let list: Array<number> = [1,2,3];
// let x: [string, number]
// x = ['sd',23]
// enum Color {red, green, blue}
// let c:Color = Color.blue;
// let txt: any = '2'
// txt = 2
// function backVoid(): void{
//   console.log(23);
// }
// class Greeter {
//   greeting: string;
//   constructor(message: string) {
//       this.greeting = message;
//   }
//   greet() {
//       return "Hello, " + this.greeting;
//   }
// }
// let greeter = new Greeter("world");
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof! Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
