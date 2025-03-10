// function movieReview(title : String) : String | Number{
//     if(title=="barfi") {
//         return "a must watch!";
//     }
//     else{
//         return Math.floor(Math.random()*10);
//     }
// }
// let review : String | Number = movieReview("barfi");
// if(typeof(review)=='string'){
//     console.log(`Review of movie is: ${review}`)
// }
// else{
//     console.log(`The rating is ${review}/10`);
// }
// console.log("hello world\n")
// //Interfaces
// //first interface
// interface Person{
//     name:string;
//     age: number;
//     greet() : string;
// }
// let user1 : Person={
//     name : "Alice",
//     age: 25,
//     greet: ()=> {return "helloooo"}
// }
// function introduce(person : Person){
//     console.log(`Hey there, I am ${person.name} and my age is ${person.age}`);
//     console.log(person.greet());
// }
// introduce(user1);
// //example of interfaces with functions and how to use it
// interface orderPurchase{
//     purchase(item : string) : number;
// }
// const firstOrder= {
//     purchase : (purchasedItem)=>{
//         console.log(`Your ${purchasedItem} will be delivered soon! Thanks for the purchase.`);
//         return 80000;
//     }
// }
// console.log(firstOrder.purchase("sofa"));
// //extend interfaces
// interface LivingAnimals {
//     name : string;
//     race : string;
//     carnivorous : boolean;
// }
// interface Human{
//     country : string;
//     gender : string;
//     age: number;
//     occupation : string;
// }
// interface Indian extends LivingAnimals, Human {
//     aboutMySelf() : void;
// }
// let person1 : Indian = {
//     name : "Varun",
//     race : "Human",
//     gender: "male",
//     carnivorous : false,
//     country : "India",
//     occupation : "SWE",
//     age: 25,
//     aboutMySelf : () => {
//         printInfo(person1);
//     }
// }
// let printInfo=(man : Indian) => {
//     console.log(`Hi my name is ${man.name}. I am a ${man.age}, ${man.gender}. ${man.carnivorous ? "I am a vegetarian" : "I am a non vegetarian"} I come from ${man.country}. My profession is ${man.occupation}.`)
// }
// person1.aboutMySelf();
//Classes
// class Library{
//     name : string;
//     constructor (autorName : string){
//         name =autorName;
//     }
// }
//the above code can be written in the following way also
// class Library {
//     //this will automatically create a property name and will set its value when the object is created
// //     constructor (public name : string) {}
// // }
// //static Properties
// class Library {
//     static description : string = "this property is class specific and does not depend upone the instance of this class created";
//     constructor (public name : string) {}
// }
// const lib= new Library("books");
// console.log(lib.name);
// console.log(Library.description);
//setter and getter
// class setterGetter {
//     //using static properties inside a class
//     static word : string = "thisisalonglongword";
//     constructor  (){
//         console.log(setterGetter.word);
//     }
//     private _producer : string ="";
//     set producer(prop : string){
//         this._producer=prop;
//     }
//     get producer() :string {
//         return this._producer.toUpperCase();
//     }
// }
// const newInst= new setterGetter();
// newInst.producer="hana";
// console.log(newInst.producer);
// // Inheritance in TS
// class SuperClass {
//     public heyo : string = "from SuperClass";
//     constructor (public process : string, public space : number){
//         console.log(`The process is ${this.process} and it takes ${this.space}MB of memory inside CPU.`);
//     }
//     print() : void {
//         console.log("hello from SuperClass");
//     }
// }
// class SubClass extends SuperClass {
//     constructor (process : string, space : number, feasible : boolean){
//         super(process,space);
//         if(feasible) console.log(`Hence not this process is not feasible`);
//     }
//     print ( ) : void {
//         console.log("hello from SubClass");
//     }
// }
// const inst= new SubClass("fetch", 123,true);
// inst.print();
//Function methods
//1) find method
var students = [
    { name: "Alice", score: 75 },
    { name: "Bob", score: 82 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 78 },
];
var studentAbove80 = students.find(function (student) {
    if (student.score > 80)
        return student;
});
console.log(studentAbove80);
//2) forEach
var prices = [100, 250, 375, 450];
// Use forEach() to log each price
// Your code here
prices.forEach(function (value) {
    console.log("Price $".concat(value));
});
//3) filter method
var ages = [12, 25, 17, 19, 30, 16, 22];
// Use filter() to get adults
var adults = ages.filter(function (val) {
    return val >= 18;
});
console.log(adults); // Expected output: [25, 19, 30, 22]
//4) reduce method
var numbers = [5, 10, 15, 20, 25];
// Use reduce() to find the sum
var total = numbers.reduce(function (val1, val2) {
    return val1 + val2;
});
console.log(total); // Expected output: 75
//5) map method
var celsiusTemperatures = [0, 10, 20, 30, 40];
// Use map() to convert to Fahrenheit
var fahrenheitTemperatures = celsiusTemperatures.map(function (val) {
    var farTemperature = (val * (9 / 5)) + 32;
    return farTemperature;
});
console.log(fahrenheitTemperatures);
// Expected output: [32, 50, 68, 86, 104]
//exercise
var employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Mark", salary: 75000 }
];
// Step 1: Use map() to increase salaries by 10%
var updatedSalaries = employees.map(function (emp) {
    var newSalary = emp.salary * 1.1;
    return { name: emp.name, salary: newSalary };
});
console.log(updatedSalaries);
// Expected output: [{ name: "John", salary: 55000 }, { name: "Jane", salary: 66000 }, { name: "Mark", salary: 82500 }]
// Step 2: Use reduce() to find total payroll expense
var totalPayroll = employees.reduce(function (acc, emp) {
    return acc + emp.salary;
}, 0);
console.log(totalPayroll);
console.log(Object.keys(employees));
