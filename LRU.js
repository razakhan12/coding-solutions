/**
 * @param {number} capacity
 */

// 1. Clarification questions edge cases


// 2. solutioning
// 3. coding
// 4. testing

class Node{
    constructor(prev,next,val){
        this.val = val ? val : undefined;
        this.prev = prev ? prev : undefined;
        this.next = next ? next : undefined;
    }
}

class dLinkedList{
    constructor(){
        this.head = new Node();
        this.tail = new Node();
        
        this.head.next= this.tail;
        this.tail.prev = this.head;
    }
    
    addNodetoHead(val){
        let newNode = new Node();
        newNode.val = val;

        let headNext = this.head.next;
        this.head.next = newNode;
        headNext.prev = newNode;
        
        newNode.next = headNext;
        newNode.prev = this.head;
        return newNode;
    }
    
    removeNodeTail(){
        let tailNode = this.tail.prev;
        this.deleteNode(tailNode);
    }
    
    deleteNode(node){
        let prevNode = node.prev;
        let nextNode = node.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
    
    getTailNodeVal(){
        return this.tail.prev;
    }
    
    
}




var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.dlist = new dLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    console.log(this.map.get(key))
    if(this.map.has(key)){
        let nodeVal =  this.map.get(key);
        this.dlist.deleteNode(nodeVal);
        this.dlist.addNodetoHead(nodeVal.val);
        return nodeVal.val;
    }
    else 
        return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.map.has(key)){
      this.map.get(key).val = value;
      let node = this.map.get(key);
      this.dlist.addNodetoHead(node.val);
      this.dlist.deleteNode(node);
  }
    else{
        if(this.map.size < this.capacity){
            let newNode = this.dlist.addNodetoHead(value);
            this.map.set(key,newNode);
        }
        else if(this.map.size > this.capacity){
            this.removeNodeTail();//TODO: Check if we can actually remove and the value is less.
            let newNode = this.dlist.addNodetoHead(value);
            this.map.set(key,newNode);
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */