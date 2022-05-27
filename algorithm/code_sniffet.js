class Stack{
    constructor(){
        this.arr = [];
    }
    push(data){
        this.arr.push(data);
    }
    pop(index){
        if(index > this.arr.length -1)
            return this.arr.pop();
        let result = this.arr.splice(index,1);
        return result;
    }
    top(){
        return this.arr[length-1];
    }
    bottom(){
        return this.arr[0];
    }

}