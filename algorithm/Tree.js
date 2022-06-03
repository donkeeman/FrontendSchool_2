class Node {
    constructor(data){
        this.data = data;
        // 이진트리가 아닌 경우
        // this.child = [];
        // 이진트리인 경우
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(data){
        let init = new Node(data);
        this.root = init;
        this.length = 0;
    }

    length(){
        return this.length;
    }
    
    insert(data){
        let newNode = new Node(data);
        let currentNode = this.root;

        while(currentNode) {
            if (data === currentNode.data){
                // 데이터가 현재 노드의 데이터와 값이 같으면 추가x
                return;
            }
            if (data < 순회용현재노드.data){
                // 데이터가 현재 노드의 데이터보다 작다면 왼쪽 자식으로
                // 왼쪽 자식 자리가 비어있지 않으면 그 아래로 내려감
                if(!currentNode.left){
                    currentNode.left = newNode;
                    this.length++;
                    return;
                }
                currentNode = currentNode.left;
            }
            if (data > currentNode.data){
                // 데이터가 현재 노드의 데이터보다 크다면 오른쪽 자식으로
                // 오른쪽 자식 자리가 비어있지 않으면 그 아래로 내려감
                if(!currentNode.right){
                    currentNode.right = newNode;
                    this.length++;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    // 깊이 우선 탐색 (왼쪽 아래 우선)
    // 스택 이용
    DFS() {
        let result = [];
        let stack = [this.root];

        while (stack.length !== 0){
            let current = stack.pop();
            if (current.right){
                stack.push(current.right);
            }
            if (current.left){
                stack.push(current.left);
            }
            result.push(current.data);
        }
        return result;
    }

    // 너비 우선 탐색 (왼쪽 오른쪽 우선)
    // 큐 이용
    BFS() {
        let result = [];
        let queue = [this.root];

        while (queue.length !== 0){
            let current = queue.shift();
            if (current.left){
                queue.push(current.left);
            }
            if (current.right){
                queue.push(current.right);
            }
            result.push(current.data);
        }
        return result;
    }
}