/* let x = null;
let y = x;
x = {
    a : 1,
    b : 'c'
}
console.log(y); */

/* let x = 2;
if(x < 1){
    console.log('hi');
} else {
    let y = () => {
        console.log(':)')
    }
} */
class Node {
    constructor(data, right = null, left = null){
        this.data = data;
        this.right = right;
        this.left = left;
    }
}

class SBN {
    constructor(){
        this.root = null;
    }

    add(data){
        if(this.root === null){
            this.root = new Node(data)
            return this.root;
        } else {
            let node = this.root;
            function addValue(node){
                if(node.data > data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return true;
                    } else {
                        node = node.left;
                        return addValue(node);
                    }
                } else if(node.data < data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return true;
                    } else {
                        node = node.right;
                        return addValue(node);
                    }
                } else {
                    return null;
                }
            }
            addValue(node);
            
        }
    }

    findMin(){
        if(this.root === null){
            return false
        } 
        let node = this.root;
        let current = (function findLeft(){
            if(node.left !== null){
                node = node.left;
                return findLeft();
            }else {
                return node.data;
            }
        })();
        return current;
    }

    findMax(){
        if(this.root === null){
            return false
        } 
        let node = this.root;
        let current = (function findRight(){
                        if(node.right !== null){
                            node = node.right;
                            return findRight();
                        }else {
                            return node.data;
                        }
        })();
        return current;
    }
    isPresent(data, getData = false){
        let node = this.root;
        let perent = this.root;
        const current = (function search(node){
            if(node === null){
                return false;
            } else if(node.data === data){
                if(getData){
                    return {node, perent};
                }
                return true;
            } else if(node.data > data){
                perent = node;
                node = node.left;
                return search(node);
            } else {
                perent = node;
                node = node.right;
                return search(node);
            }
        })(node)
        return current;
    }

    /* remove(data){
        let {node, perent} = this.isPresent(data, true);
        function perentNode(arrow){
            if(perent.left.data === data){
                perent.left = node[arrow];
            }else  {
                perent.right = node[arrow];
            }
        }

        if(!node){
            return `${data} not found`;
        } else if(node.left === null && node.right === null){
            node = null;
            return `successed1`;
        }else if(node.left === null || node.right === null){
            if(node.left === null){
                perentNode('right')
                return `successed2`;    
            } else {
                perentNode('left')
                return `successed3`;    
            }
        }else{
            let tempNode = node.right;
            let lastTempNodeRight = null;
            if(tempNode.left === null){
                tempNode.left = node.left;
                perentNode('right')
                return `successed4`;
            } else {
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                lastTempNodeRight = tempNode;
                while(lastTempNodeRight.right !== null){
                    lastTempNodeRight = lastTempNodeRight.right;
                }
                tempNode.left = node.left;
                lastTempNodeRight.right = node.right;
                if(perent.left.data === data){
                    perent.left = tempNode;
                }else  {
                    perent.right = tempNode;
                }
                return `successed5`;
            }
        }
    } */

    findMinHeight(node = this.root){
        if(node == null){
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if(left < right){
            return left + 1;
        } else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root){
        if(node == null){
            return 0;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if(left > right){
            return left + 1;
        } else {
            return right + 1;
        }
    }
    isBalanced(){
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    inOrder(node = this.root){
        if(node === null){
                return ' ';
        } else {
                return this.inOrder(node.left) + node.data.toString() + this.inOrder(node.right);
        }
    };

    preOrder(node = this.root){
        if(node === null){
                return '';
        } else {
                return node.data.toString() + this.preOrder(node.left) + this.preOrder(node.right);
        }
    };

    postOrder(node = this.root){
        if(node === null){
                return '';
        } else {
                return  this.postOrder(node.left) + this.postOrder(node.right) + node.data.toString();
        }
    };
    levelOrder(){
        let Q = [];
        let result = [];
        if(this.root !== null){
            Q.push(this.root);
            while(Q.length > 0){
                let node = Q.shift();
                result.push(node.data);
                if(node.left !== null){
                    Q.push(node.left);
                }
                if(node.right !== null){
                    Q.push(node.right);
                }
            }
            return result;
        } else {
            return null;
        }
    }

    // remove node
    remove(data){
        let node = this.root;
        if(node === null){
            return null;
        }else {
            if(data === this.root.data){
                this.root = null;
            } else {
                let findAndRemove =(node) => {
                    if(node === null){
                        return null;
                    }
                    if(data < node.data){
                        node.left = findAndRemove(node.left);
                    }
                    if(data > node.data){
                        node.right = findAndRemove(node.right);
                    }
                    if(node.data === data){
                        if(node.left === null && node.right === null){
                            return null;
                        }
                        
                    }
                }
            }
        }

    }
}
let bTree = new SBN();
bTree.add(10)
bTree.add(20)
bTree.add(2)
bTree.add(1)
bTree.add(7)
bTree.add(6)
bTree.add(4)
bTree.add(5)


console.log(bTree.findMin());
console.log(bTree.findMax());
console.log(bTree.findMinHeight());
console.log(bTree.isPresent(6));

console.log(bTree.findMaxHeight());
console.log(bTree.inOrder());
console.log(bTree.preOrder());
console.log(bTree.postOrder());
console.log(bTree.levelOrder());
 

console.log(bTree.isPresent(5));

