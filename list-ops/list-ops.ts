type FilterOp<T> = (item: T) => boolean;
type MapOp<T> = (item: T) => T;
type FoldOp<T> = (accumulator: T, item: T) => T;

export default class List<T> {
  values: T[];

  constructor(values?: T[]) {
    this.values = values ?? [];
  }

  length(): number {
    return this.values.length;
  }

  append(list: List<T>): List<T> {
    const result = new List(this.values);
    list.values.forEach((item) => result.values.push(item));
    return result;
  }

  concat(list: List<T> | List<List<T>>): List<T> {
    const result = new List<T>(this.values);
    list.values.forEach((item: T | List<T>) => {
      item instanceof List ? result.append(item) : result.values.push(item);
    });
    return result;
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