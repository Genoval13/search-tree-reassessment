const Tree = require('./tree2');

describe('addChild', () => {
  it('should add a new child to the tree in the correct sorted position', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.addChild(-5);
    myTree.addChild(2);
    myTree.addChild(8);
    myTree.addChild(50);

    expect(myTree.root.left.value).toEqual(1);
    expect(myTree.root.right.value).toEqual(10);
    expect(myTree.root.left.left.value).toEqual(-5);
    expect(myTree.root.right.right.value).toEqual(50);
  });
});

describe('printBreadthFirst', () => {
  it('should print all nodes in a tree in breadth first order', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.addChild(-5);
    myTree.addChild(2);
    myTree.addChild(8);
    myTree.addChild(50);

    expect(myTree.printBreadthFirst()).toEqual([5, 1, 10, -5, 2, 8, 50]);
  });
});

describe('removeChild', () => {
  it('should remove the child with the given value', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.addChild(-5);
    myTree.addChild(2);
    myTree.addChild(8);
    myTree.addChild(50);

    myTree.removeChild(2);
    myTree.removeChild(8);

    expect(myTree.root.left.left.value).toEqual(-5);
    expect(myTree.root.right.right.value).toEqual(50);
  });
});