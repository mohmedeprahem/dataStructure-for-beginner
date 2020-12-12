/* class mySet{
    constructor(){
        this.collection = [1, 2, 3, `mohamed`]
        this.obj = {
            x: this.collection,
            y: `mohamed`
        }
        return this.collection;
    }
    add(value){
        this.collection.push(value);
    }
    delete(){
        this.collection.pop();
    }
}
let set1 = new mySet();
console.log(set1);
let set2 = new Set([4, 5, 6]);
console.log(Array.isArray(set2));
console.log(set2)
module.exports = {set1}; */

/* const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj);

// done!
// obj = { banana: 1, orange: 2, meat: 4 } */

/* console.log(obj) */
class mySet {
    constructor(){
        this.collection = []
        return this.collection;
    }

    has(element){
       return this.collection.indexOf(element) !== -1;
    }

    add(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    }

    delete(element){
        if(this.has(element)){
            let result = this.collection.indexOf(element);
            this.collection.splice(result, 1);
            return true;
        }
        return false;
    }

    size(){
        return this.collection.length();
    }

    intersection(ontherSet){
        let intersectionSet = new mySet();
        let firstSet = this;
        firstSet.foreEach((e) => {
            if(ontherSet.has(e)){
                intersectionSet.add(e);
            }
        })
        return intersectionSet
    }
}

let setFirst = new mySet();
setFirst.add('a');
setFirst.add('b');
setFirst.add('c');
setFirst.add('d');
console.log(setFirst);
