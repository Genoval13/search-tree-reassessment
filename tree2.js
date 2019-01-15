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

      if (!cur.left && !cur.right) {
        continue;
      }

      if (cur.left !== null) {
        queue.push(cur.left);
      }

      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }

    return arr;
  };
  
  removeChild (value) {
    let found = false;
    let parent = null;
    let cur = this.root;
    let childCount, replacement, replacementParent;

    while (!found && cur) {
      if (value < cur.value) {
        parent = cur;
        cur = cur.left;
      } else if (value > cur.value) {
        parent = cur;
        cur = cur.right;
      } else {
        found = true;
      }
    }

    if (found) {
      childCount = (cur.left !== null ? 1 : 0 +
                    cur.right !== null ? 1 : 0);
    
      if (cur === this.root) {
        switch(childCount) {
          case 0: 
            this.root = null;
            break;

          case 1: 
            this.root = (cur.right === null ? cur.left : cur.right)
            break;

          case 2:
            replacement = this.root.left;

            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            if (replacementParent !== null) {
              replacementParent.right = replacement.left;
              replacement.right = this.root.right;
              replacement.left = this.root.left;
            } else {
              replacement.right = this.root.right;
            }

            this.root = replacement;
        }
      } else {
        switch (childCount) {
          case 0: 
            if (cur.value < parent.value) {
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;

          case 1: 
            if (cur.value < parent.value) {
              parent.left = (cur.left === null ? cur.right : cur.left);
            } else {
              parent.right = (cur.left === null ? cur.right : cur.left);
            }
            break;

          case 2: 
            replacement = cur.left;
            replacementParent = cur;

            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            replacementParent.right = replacement.left;
            replacement.right = cur.right;
            replacement.left = cur.left;

            if (cur.value < parent.value) {
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }
        }
      }
    }
  };
  
};

module.exports = Tree;