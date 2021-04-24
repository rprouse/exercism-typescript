export default class BinarySearchTree {
  left?: BinarySearchTree;
  right?: BinarySearchTree;

  constructor(public data: number) { }

  insert(value: number): void {
    if (value <= this.data) {
      this.left ?
        this.left.insert(value) :
        this.left = new BinarySearchTree(value);
    } else {
        this.right ?
          this.right.insert(value) :
          this.right = new BinarySearchTree(value);
    }
  }

  each(cb: (_: number) => void): void {
    this.left?.each(cb);
    cb(this.data);
    this.right?.each(cb);
  }
}