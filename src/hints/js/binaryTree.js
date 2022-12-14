// Бинарное дерево
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  add(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }

    let currentNode = this.root

    while(currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return
        }

        currentNode = currentNode.left
      } else {
          if (!currentNode.right) {
            currentNode.right = newNode
            return
          }
  
          currentNode = currentNode.right
      }
    }

  }

  preOrder(node, callback) {
    if (!node) {
      return
    }
    if (callback) {
      callback(node)
    }

    this.preOrder(node.left, callback)
    this.preOrder(node.right, callback)
  }

  inOrder(node, callback) {
    if (!node) {
      return
    }

    this.inOrder(node.left, callback)
    if (callback) {
      callback(node)
    }
    this.inOrder(node.right, callback)
  }

  postOrder(node, callback) {
    if (!node) {
      return
    }

    this.postOrder(node.left, callback)
    this.postOrder(node.right, callback)
    if (callback) {
      callback(node)
    }
  }

  traversDFS(callback, method) {
    if (method === 'preOrder') {
      return  this.preOrder(this.root,callback)
    }
    if (method === 'inOrder') {
      return  this.inOrder(this.root,callback)  
    }
    return  this.postOrder(this.root,callback)
  }

  traverseBFS(callback) {
    const queue = [this.root]

    while(queue.length) {
      const node = queue.shift();
      callback(node);

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

  }
}
const myTree = new BinaryTree()
myTree.add(8),myTree.add(7),myTree.add(9),myTree.add(5),myTree.add(10),
myTree.add(20),myTree.add(6),myTree.add(2),myTree.add(11)

// myTree.traversDFS((node) => {
//   console.log(node.value)},'preOrder') //8,7,5,2,6,9,10,20,11,

// myTree.traversDFS((node) => {
//   console.log(node.value)},'inOrder') //2,5,6,7,8,9,10,11,20

// myTree.traversDFS((node) => {
//   console.log(node.value)},'postOrder') //2,6,5,7,11,20,10,9,8

myTree.traverseBFS((node) => {
  console.log(node.value)}) //8,7,9,5,10,2,6,20,11  горизонтально по уровню