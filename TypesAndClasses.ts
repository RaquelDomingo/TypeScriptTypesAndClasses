//myNum = 5;
let myNum: number = 5;

// myString = "Hello Universe";
let myString: string = "Hello Universe";

// myArr = [1,2,3,4];
let myArr = number[1,2,3,4];

// myObj = { name:'Bill'};
let myObj = {name: 'Bill'};

// anythingVariable = "Hey";
let anything: any = "Hey";

// anythingVariable = 25; 
let anything: any = 25;

// arrayOne = [true, false, true, true]; 
let arrayOne = [true, false, true, true];

// arrayTwo = [1, 'abc', true, 2];
let arrayTwo = [1, 'abc', true, 2];

// myObj = { x: 5, y: 10 };
let myObj = { x: 5, y: 10 };


// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
// 	throw new Error('Error message');
// }

class MyNode {
    val: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val)
function myFunction() {
    console.log("Hello World")
    return
}
function sendingErrors() {
    throw new Error('Error message')
}