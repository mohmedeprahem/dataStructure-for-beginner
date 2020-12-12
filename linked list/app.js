class Node {
    constructor(element){
        this.element  = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    size(){
        return this.length;
    }

    head(){
        return this.head;
    }

    add(element){
        let newNode = new Node(element);
        let currentIndex = this.head;
        if(currentIndex === null){
            this.head = newNode;
        } else {
            function addNode(node){
                if(node.next === null){
                    node.next = newNode;
                } else {
                    node = node.next;
                    addNode(node);
                }
            }
            addNode(currentIndex);
        }
        this.length++;
    }

    remove(element){
        if(this.head === null){
            return null;
        }
        if(this.head.element === element){
            this.head = this.head.next;
            return;
        }
        let node = this.head;
        function findAndRemove(node){
            if(node === null){
                return null;
            }
            if(node.element === element){
                this.length--;
                return node.next;
            }
            node.next = findAndRemove(node.next);
            return node;
        }
    }

    isEmpty(){
        return this.length === 0;
    }
    indexOf(element){
        let index = -1;
        let node = this.head;
        while(node){
            index++;
            
            if(node.element === element){
                return index
            }
            node = node.next;
        }
    }
    elementAt(index){
        if(index >= this.length){
            return undefined;
        }
        let count = 0;
        let node = this.head;
        while(count !== index){
            count++;
            node = node.next;
        }
        return node.element;
    }

    addAt(index, element){
        let node = new Node(element)
        if(index >= this.length){
            return undefined;
        }
        let count = 0;
        let currentIndex = this.head;
        let perivuseIndex;
        if(index === 0){
            node.next = currentIndex;
            this.head = node;
        } else {
            while(count !== index){
                perivuseIndex = currentIndex;
                currentIndex = currentIndex.next;
                count++;
            }
            perivuseIndex.next = node;
            node.next = currentIndex;
        }
        this.length++;
    }

    removeAt(index){
        if(index >= this.length){
            return undefined;
        }
        let count = 0;
        let currentIndex = this.head;
        let perivuseIndex;
        if(index === 0){
            this.haed = currentIndex.next;
        } else {
            while(count !== index){
                perivuseIndex = currentIndex;
                currentIndex = currentIndex.next;
                count++;
            }
            perivuseIndex.next = currentIndex.next;
        }
        this.length--;
    }
}
let l1 = new LinkedList();
l1.add('mohamed');
l1.add('kamal');
l1.add('anas');

console.log(l1.indexOf('mohamed'));

console.log(l1.elementAt(1));

console.log(l1.addAt(1, 'dad'));
console.log(l1.indexOf('kamal'));
console.log(l1.indexOf('anas'));
console.log(l1.indexOf('dad')); 
l1.removeAt(1);
console.log(l1.elementAt(1));