// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     let newNode = new Node(value);

//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let currentNode = this.root;
//     while (true) {
//       if (value === currentNode.value) {
//         return null;
//       }

//       if (value < currentNode.value) {
//         if (currentNode.left === null) {
//           currentNode.left = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.left;
//         }
//       }

//       if (value > currentNode.value) {
//         if (currentNode.right === null) {
//           currentNode.right = newNode;
//           return this;
//         } else {
//           currentNode = currentNode.right;
//         }
//       }
//     }
//   }

//   // find value

//   find(value) {
//     if (this.root === null) {
//       return false;
//     }
//     let currentNode = this.root;
//     let found = false;
//     while (!found && currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else {
//         found = true;
//       }
//     }
//     return currentNode;
//   }
// }

// let s1 = new BST();
// console.log(s1.insert(100));
// console.log(s1.insert(50));
// console.log(s1.find(50));

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) {
        return null;
      }
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      }

      if (value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }
    let currentNode = this.root;
    let found = false;

    while (!found && currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }

    return currentNode;
  }
}

let s1 = new BTS();
console.log(s1.insert(100));
console.log(s1.insert(50));
console.log(s1.insert(192));
console.log(s1.insert(3));
console.log(s1.find(33));
