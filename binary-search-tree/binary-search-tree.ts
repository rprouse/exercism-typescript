export default class BinarySearchTree {
  left?: BinarySearchTree;
  right?: BinarySearchTree;

  constructor(public data: number) { }

  insert(value: number): BinarySearchTree {
    if (value <= this.data) {
      this.left = this.left?.insert(value) ??
        new BinarySearchTree(value);
    } else {
        this.right = this.right?.insert(value) ??
        new BinarySearchTree(value);
    }
    return this;
  }

  each(cb: (_: number) => void): void {
    this.left?.each(cb);
    cb(this.data);
    this.right?.each(cb);
  }
}