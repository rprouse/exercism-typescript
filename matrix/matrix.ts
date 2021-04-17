class Matrix {
  readonly rows: number[][];
  readonly columns: number[][];

  constructor(matrix: string) {
    this.rows = matrix.split('\n')
      .map(r => r.split(' ').map(i => parseInt(i)));

      // Pivot rows assuming all rows are of equal length
      this.columns = [];
      for(let r = 0; r < this.rows[0].length; r++) {
        this.columns.push([]);
        for(let c = 0; c < this.rows.length; c++) {
          this.columns[r].push(this.rows[c][r]);
        }
      }
  }
}

export default Matrix
