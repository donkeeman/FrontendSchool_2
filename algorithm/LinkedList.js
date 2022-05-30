class Node{
    constructor(data){
        this.head = data;
        this.tail = null;
    }
}

class LinkedList{
    constructor(){
        let init = new Node("init");
        this.head = init;
        this.tail = init;
        this.length = 0;
    }
    append(data){
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        this.data.push(data);
    }
    insert(index, data){
        let currentNode = this.head;
        currentNode = currentNode.next;
        for(let i = 0; i<index-1; i++){
            currentNode = currentNode.next;
        }
        let newNode = new Node(data);
        newNode.next = currentNode.next;
        currentNode.next = currentNode;
        this.length++;
    }
    length(){
        return this.length;
    }
    toString(){
        let currentNode = this.head;
        currentNode = currentNode.next;
        let data = ``;
        for(let i = 0; i<data.length; i++){
            data += `${currentNode.data}, `;
            currentNode = currentNode.next;
        }
        return `[${this.data.slice(0, -2)}]`;
    }
}