class maxHeep {
    constructor(){
        this.heep = [null];
    }

    insert(data){
        this.heep.push(data);
        let i = this.heep.length-1;
        if(this.heep.length > 2){
            while(Math.floor(i / 2) !== 0 && this.heep[i] > this.heep[Math.floor(i / 2)] ){
                [this.heep[Math.floor(i / 2)], this.heep[i]]  = [this.heep[i], this.heep[Math.floor(i / 2)]];
                i = Math.floor(i / 2);
            }
        }
        console.log(this.heep);
    }

    remove(){
        let biggest = this.heep[1];
        this.heep[1] = this.heep[this.heep.length - 1];
        let i = 1;
        let left = i * 2;
        let right = i * 2 + 1;
        while(this.heep[left] > this.heep[i] || this.heep[right] > this.heep[i]){
            if(this.heep[left] > this.heep[right]){
                [this.heep[i], this.heep[left]]  = [this.heep[left], this.heep[i]];
                i = this.heep[left]
            } else {
                [this.heep[i], this.heep[right]]  = [this.heep[right], this.heep[i]];
                i = this.heep[right];
            }
            left = i * 2;
            right = i * 2 + 1;
        }
        this.heep.pop();
        console.log(this.heep);
        return biggest
    }
}

let h1 = new maxHeep();
h1.insert(4);
h1.insert(10);
h1.insert(1);
h1.insert(3);
h1.insert(9);
h1.insert(5);

h1.remove();
h1.remove();
h1.remove();