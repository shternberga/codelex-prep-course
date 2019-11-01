/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {

  rowsArr: any[];
  columnsArr: any[];

  constructor(private matrix: string) {
    this.matrix = matrix;
    this.rowsArr = this.setRows();
    this.columnsArr = this.setColumns();
  }


  get rows() {
    return this.rowsArr;
  }

  get columns() {
    return this.columnsArr;
  }

  setRows() {
    let rows: any[] = [];
    let rowsArr = this.matrix.split(/\n/g);
    for (let i = 0; i < rowsArr.length; i++) {
      rows[i] = rowsArr[i].split(' ');
      for (let index = 0; index < rows[i].length; index++) {
        rows[i][index] = parseInt(rows[i][index]);        
      }
    }
    return rows;
  }

  setColumns() {
    let result: any[] = [];
    for (let i = 0; i < this.rowsArr[0].length; i++) {
      for (let index = 0; index < this.rowsArr.length; index++) {
        if (this.rowsArr[index][i]) {
          result[i] = result[i] || [];
          result[i].push(this.rowsArr[index][i]);  
        }      
      }
    }
    return result;
  }

  // setColumns() {
  //   let columns: any[] = [];
  //   this.rowsArr.forEach(function (row) {
  //     row.forEach(function (n: number, index: number) {
  //       columns[index] = columns[index] || [];
  //       columns[index].push(n);
  //     });
  //   });
  //   return columns;
  // }
}

export { Matrix };
