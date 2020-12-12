class pQueue {
    constructor(){
        this.collection = [];
    }

    // view all elements
    values(){
        return this.collection;
    }



    // add element
    enqueue(element){
        if(this.isEmpty()){
            this.collection.push(element);
        } else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(added === false){
                this.collection.push(element);
            }
        }
    }
        // check if collection is empty
        isEmpty(){
            return this.collection.length === 0;
        }

    // delete frist element
    dequeue(){
        if(!this.isEmpty()){
            return this.collection.shift();
        }
        return `collection is empty`;
    }

    // size of collection
    size(){
        return this.collection.length;
    }
}

let pQueue1 = new pQueue();
pQueue1.enqueue(['mohamed', 3]);
pQueue1.enqueue(['kamal', 1]);
pQueue1.enqueue(['anas', 2]);
console.log(pQueue1.values());
pQueue1.enqueue(['asfd', 2]);
console.log(pQueue1.values());
