    class Node {
        constructor(){
            this.key = new Map();
            this.end = false;
        }
        setEnd(){
            this.end = true;
        }
        thisEnd(){
            return this.end;
        }
    }

    class Trie{
        constructor(){
            this.root = new Node();
        }

        add(word, node = this.root){
            if(word.length === 0){
                node.setEnd();
            } else if(!node.key.has(word[0])){
                node.key.set(word[0], new Node());
                return this.add(word.substr(1), node.key.get(word[0]));
            } else {
                return this.add(word.substr(1), node.key.get(word[0]));
            }
        }

        isWord(word){
            let node = this.root;
            if(node.key.size() === 0){
                return false;
            }
            while(word.length !== 0){
                if(node.key.has(word[0])){
                    node = node.key.get(word[0]);
                    word = word.substr(1);
                } else {
                    return false;
                }
            }
            return node.end === true;
        }

        print(){
            let words = new Array();
            function search(node, string){
                if(node.keys.size != 0){
                    for(let letter of node.key.keys()){
                        search(node.key.get(letter), string.concat(letter))
                    }
                    if(node.isEnd()){
                        words.push(string);
                    };
                } else {
                    string.length > 0 ? words.push(string) : undefined;
                    return;
                }
        }
        saerch(this.root, new String());
        return words.length > 0 ? words : null;
    }