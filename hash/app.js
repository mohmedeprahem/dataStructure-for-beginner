/* class hashTable {
    constructor(){
        this.storage = [];
        this.storageLimit = 5;
    }

    hash(string, map){
        let hash = 0;
        for(let i = 0; i < string.length; i++){
            hash += string.charCodeAt(i);
        }
        return hash % map
    }

    print(){
        return this.storage;
    }

    add(key, value){
        let index = this.hash(key, this.storageLimit);
        if(this.storage[index] === undefined){
            this.storage[index] = [[key, value]];
        } else {
            let added = false;
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    this.storage[index][i][1] = value;
                    added = true;
                }
            }
            if(!added){
                this.storage[index].push([key, value]);
            }
        }
    }

    remove(key){
        let index = this.hash(key, this.storageLimit);
        if(this.storage[index][0][0] === key && this.storage[index].length === 1 ){
            delete this.storage[index];
        } else{
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    delete this.storage[index][i];
                }
            }
        }
    }

    lockUp(key){
        let index = this.hash(key, this.storageLimit);
        if(this.storage[index] === undefined){
            return 'not found';
        } else {
            for(let i = 0; i < this.storage[index].length; i++){
                if(this.storage[index][i][0] === key){
                    return this.storage[index][i][1];
                }
            }
        }
    }
}

let h1 = new hashTable();
h1.add('mohamed', 1);
h1.add('kamal', 20);
h1.add('anas', 15);

console.log(h1.lockUp('kamal'));
console.log(h1.print());
h1.add('kamal', 3);
console.log(h1.lockUp('kamal'));
console.log(h1.print());
h1.remove('kamal');
console.log(h1.lockUp('kamal'));
console.log(h1.print()); */

let x = [{a: 1},2,3];
let y = [...x];
y.shift();
console.log(x)
console.log(y)