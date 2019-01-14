const tree = require('./tree2');

describe('addChild', () => {
  it('should add a new child to the tree in the correct sorted position', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.children[0].addChild(-5);
    myTree.children[0].addChild(2);
    myTree.children[1].addChild(8);
    myTree.children[1].addChild(50);

    expect(myTree.children[0]).toEqual(1);
    expect(myTree.children[1]).toEqual(10);
    expect(myTree.children[0].children[0]).toEqual(-5);
    expect(myTree.children[1].children[1]).toEqual(50);
  });
});

describe('printBreadthFirst', () => {
  it('should print all nodes in a tree in breadth first order', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.children[0].addChild(-5);
    myTree.children[0].addChild(2);
    myTree.children[1].addChild(8);
    myTree.children[1].addChild(50);

    expect(myTree.printBreadthFirst()).toEqual(5, 1, 10, -5, 2, 8, 50);
  });
});

describe('removeChild', () => {
  it('should remove the child with the given value', () => {
    let myTree = new Tree(5);

    myTree.addChild(1);
    myTree.addChild(10);
    myTree.children[0].addChild(-5);
    myTree.children[0].addChild(2);
    myTree.children[1].addChild(8);
    myTree.children[1].addChild(50);

    myTree.removeChild(2);
    myTree.removeChild(8);

    expect(myTree.children[0].children).toEqual([{value: -5, children: null}]);
    expect(myTree.children[1].children).toEqual([{value: 50, children: null}]);
  });
});