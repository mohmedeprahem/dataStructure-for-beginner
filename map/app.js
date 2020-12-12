class myMap {
    constructor(){
        this.count = 0;
        this.collection = {};
    }

    set(key, value){
        this.collection[key] = value;
        this.count++;
    }
    
    has(key){
        return (key in this.collection);
    }

    value(){
        let result = [];
        for(let key of Object.keys(this.collection)){
            result.push(this.collection[key]);
        }
        return result.length > 0 ? result : null;
    }
    delete(key){
        let result = [];
        if(key in this.collection){
            delete this.collection[key];
            this.count--;
        }
    }

    countMap(){
        return this.count
    }
    get(key){
        return (key in this.collection) ? this.collection[key] : null;
    }
}
let map = new myMap();
map.set('moahmed', 1);
map.set('kamal', 10);
map.set('anas', 20);

console.log(map.has('moahmed'));
console.log(map.get('moahmed'));
console.log(map.has('anas'));
console.log(map.value());
console.log(map.countMap());
map.delete('anas');
console.log(map.countMap());
console.log(map.has('anas'));
console.log(map.value());
