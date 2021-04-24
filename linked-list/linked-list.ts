class Node<T> {
  public value: T;
  public next?: Node<T>;
  public prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> {
  private head?: Node<T>;
  private end?: Node<T>;

  push(val: T): void {
    const node = new Node(val);

    if (this.end === undefined) {
      this.head = node;
      this.end = node;
      return;
    }
    this.end.next = node;
    node.prev = this.end;
    this.end = node;
  }

  unshift(val: T): void {
    const node = new Node(val);

    if (this.head === undefined) {
      this.head = node;
      this.end = node;
      return;
    }
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  pop(): T | undefined {
    const node = this.end;
    this.end = node?.prev;
    if (this.end === undefined) {
      this.head = undefined;
    }
    return node?.value;
  }

  shift(): T | undefined {
    const node = this.head;
    this.head = node?.next;
    if (this.head === undefined) {
      this.end = undefined;
    }
    return node?.value;
  }

  count(): number {
    let count = 0;
    let node = this.head;
    while (node !== undefined) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(val: T): void {
    let node = this.head;
    while (node !== undefined) {
      if (node.value === val) {
        if (node.prev !== undefined) {
          node.prev.next = node.next;
        }
        if (node.next !== undefined) {
          node.next.prev = node.prev;
        }
        if (node === this.head) {
          this.head = node.next;
          if (this.head === undefined) {
            this.end = undefined;
          }
        }
        if (node === this.end) {
          this.end = node.prev;
          if (this.end === undefined) {
            this.head = undefined;
          }
        }
        return;
      }
      node = node.next;
    }
  }
}