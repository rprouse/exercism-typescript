type FilterOp<T> = (item: T) => boolean;
type MapOp<T> = (item: T) => T;
type FoldOp<T> = (accumulator: T, item: T) => T;

export default class List<T> {
  values: T[];

  constructor(values?: T[]) {
    this.values = values ?? [];
  }

  length(): number {
    return 0;
  }

  append(_: List<T>): List<T> {
    return this;
  }

  concat(_: List<T> | List<List<T>>): List<T> {
    return this;
  }

  filter(_: FilterOp<T>): List<T> {
    return this;
  }

  map(_: MapOp<T>): List<T> {
    return this;
  }

  foldl(_: FoldOp<T>, accumulator: T): T {
    return _(accumulator, this.values[0]);
  }

  foldr(_: FoldOp<T>, accumulator: T): T {
    return _(accumulator, this.values[0]);
  }

  reverse(): List<T> {
    return this;
  }
}