// ==============================
// PLEASE READ THE USAGE BELOW BEFORE WRITING CODE
// The goal is for you to write the code for the Tree structure 
// so that it can be used by others in the examples below:
// ==============================

// Creating the tree && connecting nodes
// ==================
// let myTree = new Tree(5);
// myTree.addNode(1);
// myTree.addNode(10);

// VISUAL:     5
//            / \
//           1   10

// Adding grand children:
// ==================
// myTree.addNode(-5) 
// myTree.addNode(2)
// myTree.addNode(8)
// myTree.addNode(50)
//
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2   8   50

//printBreadthFirst:
//==================
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2   8   50
//myTree.printBreadthFirst()
//5,1,10,-5,2,8,50

// Removing children:
// ==================
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2  8    50

// myTree.removeNode(10)
// VISUAL:       5
//             /   \
//            1     8
//          /  \     \
//        -5    2     50

// implement the following :
// Properties:
// value -> returns value of node it was given when it was created
// children -> returns direct children of a node as an array
// Methods: 
// addChild()
// printBreadthFirst()
// removeChild()

class Node {
  constructor (value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor (value) {
    this.root = {value: value, children: []};
    this.size = 1;
  }

  addChild (value) {
     let newNode = new Node(value);
     let cur = this.root;
     while (cur) {
       if (cur.children.length === 0) {
         cur.children.push(newNode);
         break;
       } else if (cur.children.length === 1) {
         if (value < cur.value) {
           if (cur.children[0] < cur.value) {
             cur = cur.children[0];
           } else {
             cur.children.unshift(newNode);
             break;
           }
         } else {
           if (cur.children[0] > cur.value) {
             cur = cur.children[0];
           } else {
             cur.children.push(newNode);
             break;
           }
         } 
       } else {
         if (cur.value < value) {
           cur = cur.children[1];
         } else {
           cur = cur.children[0];
         }
       }
     }
     this.size++
     return newNode;
  };
 
  printBreadthFirst () {
    let BFS = [];
    let cur = this.root;
    
  }

};

let myTree = new Tree(5);

myTree.addChild(1);
myTree.addChild(10);
myTree.addChild(-5);
myTree.addChild(2);
myTree.addChild(8);
myTree.addChild(50);

console.log(myTree);

module.exports = Tree;