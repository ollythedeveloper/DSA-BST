const BST = require('./BST.js')

function number3() {
    const answer3 = new BST();
    answer3.insert(3)
    answer3.insert(1)
    answer3.insert(4)
    answer3.insert(6)
    answer3.insert(9)
    answer3.insert(2)
    answer3.insert(5)
    answer3.insert(7)
    return answer3
}

const answer3 = number3()

console.log(answer3)

function number3_2() {
    const answer2 = new BST();
    answer2.insert('E')
    answer2.insert('A')
    answer2.insert('S')
    answer2.insert('Y')
    answer2.insert('Q')
    answer2.insert('U')
    answer2.insert('E')
    answer2.insert('S')
    answer2.insert('T')
    answer2.insert('I')
    answer2.insert('O')
    answer2.insert('N')
    return answer2
}

const answer2 = number3_2()

console.log(answer2)


/* 
4. Returns all the values of the tree recursively?
Runtime of the algorithm is O(log n)
*/

function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

function main() {
    const testTree = new BST();
    testTree.insert(4)
    testTree.insert(3)
    testTree.insert(5)
    testTree.insert(12)
    testTree.insert(1)
    testTree.insert(2)
    testTree.insert(6)
    testTree.insert(10)
    testTree.insert(11)
    testTree.insert(100)
    testTree.insert(200)
    return testTree
}

const testTree = main()

console.log(tree(testTree))

//5. Return height
const findHeight = (tree) => {
    // if the tree is empty, return 0
    if (tree === null) return 0;
    else {
      // find L and R depths
      let leftDepth = findHeight(tree.left);
      let rightDepth = findHeight(tree.right);
  
      // //return the greater value (depth) + 1 for the root node
      // if (leftDepth > rightDepth) {
      //   return leftDepth + 1;
      // } else {
      //   // if right is greater or they are the same, return the right
      //   return rightDepth + 1;
      // }
      return leftDepth > rightDepth
        ? leftDepth + 1
        : rightDepth + 1
    }
  };

  console.log('Height: ' + findHeight(testTree))


//6. Is it a BST?
const isBST = (tree) => {
    // base case for recursion - bottom of the tree
    if (!tree.left && !tree.right) {
      return true;
    }
    // if it has a left
    if (tree.left) {
      // If the left value is greater or equal than it's not a BST
      if (tree.left.value >= tree.value) {
        return false;
      }
      // move down the tree recursively
      isBST(tree.left);
    }
    if (tree.right) {
      if (tree.right <= tree.value) {
        return false;
      }
      isBST(tree.right);
    }
    //default
    return true;
  };

  console.log('Is BST? ' + isBST(testTree))

//7. Find third largest

const findThirdLargest = (BST) => {
  if (tree === null) return 0;
  // create an array to hold values
  let results = [];
  // traverse function
  results.push(BST.key)
  const _traverse = (tree) => {
    // base case to stop recursion when  undefined
    if (tree.left) {
      results.push(tree.left.key);
      _traverse(tree.left);
    }
    // push the value to the results array
    if (tree.right) {
      results.push(tree.right.key);
      _traverse(tree.right);
    }
  };

  _traverse(BST);
  console.log(results)
  if (results.length < 3) {
    return "The tree has less than 3 nodes";
  } else {
    console.log(results.sort((a, b) => b - a))
    return results.sort((a, b) => b - a)[2];
  }
};

console.log('Find Third Largest: ' + findThirdLargest(testTree))

// 8. Balanced BST
//A binary search tree is balanced if and only if the depth 
//of the two subtrees of every node never differ by more than 1.
const isBalanced = (tree) => {
  if (!tree) {
    return false;
  }
  if (!tree.right && !tree.left) {
    return true;
  }
  if (Math.abs(findHeight(tree.right) - findHeight(tree.left)) > 1) {
    return false;
  }
  return true;
};

console.log('Tree is Balanced? ' + isBalanced(testTree));

/*
7. 
You are given two arrays which represent two sequences of keys 
that are used to create two binary search trees. Write a program 
that will tell whether the two BSTs will be identical or not 
without actually constructing the tree. You may use another data structure 
such as an array or a linked list but don't construct the BST. 
What is the time complexity of your algorithm? 
E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays 
but will create the exact same BSTs and your program should return true.
*/

const sameBST = (array1, array2) => {
  if (array1.length !== array2.length) {
    //if they aren't the same length, they will not be the same BST
    return false;
  }
  if (array1[0] !== array2[0]) {
    //if they don't have the same first index, they will be different BSTs
    return false;
  }
  //base case
  if (array1.length === 0) {
    return true;
  }
  //filter left side of array1
  let leftArray1 = array1.filter((i) => i < array1[0]);
  //filter right side of array1
  let rightArray1 = array1.filter((i) => i > array1[0]);
  //filter left side of array2
  let leftArray2 = array2.filter((i) => i < array2[0]);
  //filter right side of array2
  let rightArray2 = array2.filter((i) => i > array2[0]);
  // return !sameBST(leftArray1, leftArray2)
  //   ? false
  //   : sameBST(rightArray1, rightArray2)
  //   ? true
  //   : false;
  return !sameBST(leftArray1, leftArray2) || !sameBST(rightArray1, rightArray2)
};

const arr1 = [3, 5, 4, 6, 1, 0, 2];
const arr2 = [3, 1, 5, 2, 4, 6, 0];
const arr3 = [3, 1, 4, 6, 0, 2, 5];
const arr4 = [3, 8];

console.log('Same BST? ' + sameBST(arr1, arr2));
console.log('Same BST? ' + sameBST(arr2, arr3));
console.log('Same BST? ' + sameBST(arr2, arr4));
