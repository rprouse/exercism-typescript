export default class BinarySearchTree {
  left?: BinarySearchTree;
  right?: BinarySearchTree;

  constructor(public data: number) { }

  insert(value: number): void {
    if (value <= this.data) {
      if (this.left === undefined) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else {
        if (this.right === undefined) {
          this.right = new BinarySearchTree(value);
        } else {
          this.right.insert(value);
        }
    }
  }

  each(callback: (data: number) => void): void {
    this.left?.each(callback);
    callback(this.data);
    this.right?.each(callback);
  }
}