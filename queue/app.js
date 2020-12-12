/* let storage = {};
let count = 1;
storage["count"] = 'mohamed';
console.log(storage); */
class queue {
    constructor(){
        this.collection = [];
    }

    // to view element of collection
    values(){
        return this.collection;
    }

    // add element
    enqueue(element){
        this.collection.push(element);
    }

    // remove element
    dequeue(){
        return this.collection.shift();
    }

    // view front element
    front(){
        console.log(this.collection[0]);
    }

    size(){

        return this.collection.length;
    }
    
}

let queue1 = new queue();
queue1.enqueue('a');
queue1.enqueue('b');
queue1.enqueue('c');

queue1.front();
console.log(queue1.values());
queue1.dequeue();
console.log(queue1.size());
console.log(queue1.values());
queue1.front();