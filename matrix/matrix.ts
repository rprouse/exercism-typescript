type Array2D = number[][];

class Matrix {
  readonly rows: Array2D;
  readonly columns: Array2D;

  constructor(matrix: string) {
    this.rows = matrix.split('\n')
      .map(r => r.split(' ').map(i => parseInt(i)));

    // Pivot rows assuming all rows are of equal length
    this.columns = this.rows.map((_, col) =>
      this.rows.map((row) => row[col])
    );
  }
}

export default Matrix
