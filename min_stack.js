class Node{
    constructor(val){
        this.minValue = Infinity;
        this.next = null;
        this.prev = null;
        this.val = val
    }
}

class doublyLL{
    constructor(){
        this.head = new Node(null);
        this.tail = new Node(null)
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
        
    }
    
    push(Node){
          if(this.getFromHead() === undefined){
            Node.minValue = Math.min(Node.minValue, Node.val);
        }
        else{
            Node.minValue = Math.min(this.getFromHead(),Node.val);
        }
        let nextNode = this.head.next;
        this.head.next = Node;
        Node.prev = this.head;
        Node.next = nextNode;
        nextNode.prev = Node;
        }
    
    getFromHead(){//return Node
        return this.head.next.val
    }
    
    deleteNode(Node){
        let prev = Node.prev;
        let next = Node.next;
        prev.next = next;
        next.prev = prev;
    }
    pop(){
        let Node = this.head.next;
        deleteNode(Node);
    }
    
    getMin(){
        return this.head.next.min
    }
}







var MinStack = function() {
  let list = new doublyLL();  
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let node = new Node(val);
    this.list.push(node);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.list.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.list.getFromHead();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.list.getMin();
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */