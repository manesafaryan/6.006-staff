class Node {
    constructor(value) {
      this.value = value;
      this.right = null;
      this.left = null;
      this.parent = null;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
      this.parent = null;
    }

    subtreeAt() {
      
    }

    subtreeFirst(node) {
      if (node.left == null) return node;
      return this.subtreeFirst(node.left);
    }

    subtreeLast(node) {
      if (node.right === null) return node;
      return this.subtreeLast(node);
    }

    successor(node) {
      if (node.right) return this.subtreeFirst(node.right);
      while (node) {
        if (node === node.parent.left) return node.parent;
        node = node.parent;
      }
    }

    predecessor(node) {
      if (node.left) return node.left;
      while (node) {
        if (node === node.parent.right) return node.parent;
        node = node.parent;
      }
    }
  
    insert(node) {
      if (this.root === null) this.root = node;
      else this.insertNode(this.root, node);
    }

    insertNode(node, newNode) {
      if(node === null) return newNode
      if(newNode.value > node.value) {
          node.right = this.insertNode(node, newNode)
      }
      else node.left = this.insertNode(node, newNode)
      return node
    }

    delete(node) {
      if (!node.left && !node.right) {
        if (node.parent.left === node) {node.parent.left = null; return}
        else {node.parent.right = null; return}    
      }
      if (node.left) {
        let temp = node;
        predecessor = this.predecessor(node);
        node = predecessor;
        predecessor = temp;
      } else if (node.right) {
        let temp = node;
        successor = this.successor(node);
        node = successor;
        successor = temp;
  
      }
      this.delete(node)
    }

    inOrder() {
      function inOrderTraversal(node) {
        if (node == null) return;
        inOrderTraversal(node.left);
        console.log(node.value);
        inOrderTraversal(node.right);
      }
      inOrderTraversal(this.root);
    }

    preOrder() {
      function preOrderTraversal(node) {
        if (node === null) return;
        console.log(node);
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
      }
      preOrderTraversal(this.root);
    }
    
    postOrder() {
      function postOrderTraversal(node) {
        if (node === null) return;
        postOrderTraversal(node.left);
        postOrderTraversal(node.right);
        console.log(node);
      }
      postOrderTraversal();
    }
  }
  
  const BST = new BinarySearchTree();
  let node3 = new Node(3);
  BST.insert(new Node(5));
  BST.insert(new Node(10));
  BST.insert(node3);
  BST.insert(new Node(6));
  BST.insert(new Node(20));
  BST.inOrder();
  console.log(BST.successor(node3));
  console.log(BST.predecessor(node3));
  console.log(BST);
  BST.delete(node3)
  BST.inOrder();
  console.log(BST)