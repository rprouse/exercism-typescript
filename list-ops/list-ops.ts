type FilterOp<T> = (item: T) => boolean;
type MapOp<T> = (item: T) => T;
type FoldOp<T> = (accumulator: T, item: T) => T;

export default class List<T> {
  values: T[];

  constructor(values?: T[]) {
    this.values = values ?? [];
  }

  private add(item: T): void {
    this.values.push(item);
  }

  length(): number {
    return this.values.length;
  }

  append(list: List<T>): List<T> {
    const result = new List(this.values);
    list.values.forEach((item) => result.add(item));
    return result;
  }

  concat(list: List<T> | List<List<T>>): List<T> {
    const result = new List<T>(this.values);
    list.values.forEach((item: T | List<T>) => {
      item instanceof List ? result.append(item) : result.add(item);
    });
    return result;
  }

  filter(filterOp: FilterOp<T>): List<T> {
    const result = new List<T>();
    this.values.forEach(item => {
      if (filterOp(item)) result.add(item);
    });
    return result;
  }

  map(mapOp: MapOp<T>): List<T> {
    const result = new List<T>();
    this.values.forEach(item => {
      result.add(mapOp(item));
    });
    return result;
  }

  foldl(foldOp: FoldOp<T>, accumulator: T): T {
    this.values.forEach(item => {
      accumulator = foldOp(accumulator, item);
    });
    return accumulator;
  }

  foldr(foldOp: FoldOp<T>, accumulator: T): T {
    for (let idx = this.values.length - 1; idx >= 0; idx--) {
      accumulator = foldOp(accumulator, this.values[idx]);
    };
    return accumulator;
  }

  reverse(): List<T> {
    const result = new List<T>();
    for (let idx = this.values.length - 1; idx >= 0; idx--) {
      result.add(this.values[idx]);
    }
    return result;
  }
}