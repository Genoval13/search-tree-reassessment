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
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor (value) {
    this.root = {value: value, left: null, right: null};
  }

  addChild (value) {
     let newNode = new Node(value);
     let cur = this.root;
     while (cur) {
      if (!cur.left && !cur.right) {
        if (value < cur.value) {
          cur.left = newNode;
          break;
        } else {
          cur.right = newNode;
          break;
        }
      } else if (value < cur.value && !cur.left) {
        cur.left = newNode;
        break;
      } else if (value < cur.value && cur.left) {
        cur = cur.left;
      } else if (value > cur.value && !cur.right) {
        cur.right = newNode;
        break;
      } else if (value > cur.value && cur.right) {
        cur = cur.right;
      } 
    }
     return newNode;
  };
 
  printBreadthFirst () {
    let cur;
    let arr = [];
    let queue = [this.root];

    while (queue.length > 0) {
      cur = queue.shift();
      arr.push(cur.value);

      if (!cur.left || !cur.right) {
        continue;
      }

      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }
    }

    return arr;
  };
  
  removeChild (value) {
    let cur;
    let queue = [this.root];

    while (queue.length > 0) {
      cur = queue.shift();
      
      if (!cur.left || !cur.right) {
        continue;
      }

      if (cur.left.value === value) {
        if (cur.left.left) {
          cur.left = cur.left.left;
        } else if (cur.left.right) {
          cur.left = cur.left.right;
        } else {
          cur.left = null;
        }
      } else if (cur.right.value === value) {
        if (cur.right.left) {
          cur.right = cur.right.left;
        } else if (cur.right.right) {
          cur.right = cur.right.right;
        } else {
          cur.right = null;
        }
      }

      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }
    }
  };
  
};

module.exports = Tree;