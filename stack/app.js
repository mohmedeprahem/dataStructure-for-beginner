/* window.age = 10;
let Name =() =>{
    this.x =() => {
        console.log(this.age)
    }
}



let mohamed = new Name();
mohamed.age = 14;

Name.prototype.year = function() {
    console.log('1000');
}; 

mohamed.x() */
class Stack {
    constructor(){
        this.count = 0;
        this.storage = {}
    }

    // add item
    push(value){
        this.storage[this.count] = value;
        this.count++;
    }

    // remove item
    pop(){
        if(this.count === 0){
            return undefined;
        }
        let result = this.storage[--this.count];
        delete this.storage[this.count]
        return result;
    }

    // meny of item
    size(){
        return this.count;
    }

    // last item
    peek(){
        return this.storage[this.count - 1];
    }
}

let myStack = new Stack();

console.log(myStack.pop());
myStack.push('a');
myStack.push('b');
myStack.push('c');
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
