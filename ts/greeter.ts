// class Student {
//   fullName: string;
//   constructor(public firstName, public middleInitial, public lastName) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }

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

class Animal {
  move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
      console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();