export default class BinarySearchTree {
  left?: BinarySearchTree;
  right?: BinarySearchTree;

  constructor(public data: number) { }

  insert(value: number): void {
    if (value <= this.data) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BinarySearchTree(value);
      }
    } else {
        if (this.right) {
          this.right.insert(value);
        } else {
          this.right = new BinarySearchTree(value);
        }
    }
  }

  each(callback: (data: number) => void): void {
    this.left?.each(callback);
    callback(this.data);
    this.right?.each(callback);
  }
}