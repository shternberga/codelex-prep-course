import { Level } from "./levels";

export class Cell {
  isOpen: boolean = false;
  mines: number = 0;
  isBomb: boolean = false;
  isFlag: boolean = false;
  isUnsure: boolean = false;
  x: number = 0;
  y: number = 0;
}


export class Minesweeper {
  level: Level;
  cells: Cell[][];
  columns: number;
  rows: number;
  mines: number;
  tense: boolean;
  questionMarksToggle: boolean;
  gameIsStarted: boolean;
  ticks: number;

  constructor(level: Level) {
    this.level = level;
    this.cells = [];
    this.columns = level.columns;
    this.rows = level.rows;
    this.mines = level.mines;
    this.tense = false;
    this.questionMarksToggle = false;
    this.setCells();
    this.setMines();
    this.setClues();
    this.gameIsStarted = false;
    this.ticks = 0;
  }

  columnsCount(): number {
     return this.columns;
  }

  getCells(): Cell[][] {
    return this.cells;
  }

  getNeighbors(x: number, y: number, cells: Cell[][]): Cell[] {
    const neighbors = [];
    if (x > 0) {
      if (y > 0) {
        neighbors.push(cells[x-1][y-1]);
      }
      if (y < cells.length-1) {
        neighbors.push(cells[x-1][y+1]);
      }
      neighbors.push(cells[x-1][y]);
    }
    if (x < cells.length-1) {
      if (y > 0) {
        neighbors.push(cells[x+1][y-1]);
      }
      if (y < cells.length-1) {
        neighbors.push(cells[x+1][y+1]);
      }
      neighbors.push(cells[x+1][y]);
    }
    if (y > 0) {
      neighbors.push(cells[x][y-1]);
    }
    if (y < cells.length-1){
      neighbors.push(cells[x][y+1]);
    }   
    return neighbors;
  }

  setClues() {
    for (let n = 0; n < this.cells.length; n++) {
      for (let k = 0; k < this.cells.length; k++) {
        if (!this.cells[n][k].isBomb) this.cells[n][k].mines = this.getNeighbors(n, k, this.cells)
                                                              .filter(cell => cell.isBomb)
                                                              .length;
      }      
    }
  }

  setMines() {
    this.mines = this.currentLevel().mines;
    let y: number = 0;
    let x: number = 0;
    if (this.mines == 9999) {
      this.cells.forEach(row => {
        row.forEach(cell => {
          cell.isBomb = true;
        })
      });
      y = Math.floor(Math.random() * ((this.columns - 1) - 0)) + 0;
      x = Math.floor(Math.random() * ((this.rows - 1) - 0)) + 0;
      this.cells[x][y].isBomb = false;
    } 
    else {      
    let bombs: number = 0;
      while (bombs < this.mines) {
        y = Math.floor(Math.random() * ((this.columns - 1) - 0)) + 0;
        x = Math.floor(Math.random() * ((this.rows - 1) - 0)) + 0;
        if (!this.cells[x][y].isBomb){
          this.cells[x][y].isBomb = true;
          bombs += 1;
        } 
      }
    }
  }

  setCells() {
    this.columns = this.currentLevel().columns;
    this.rows = this.currentLevel().rows;
    let cells: Cell[][] = [];
    for (let c = 0; c < this.columns; c++) {
      cells[c] = [];
      for (let r = 0; r < this.rows; r++) {
        cells[c][r] = new Cell;
        cells[c][r].x = c;
        cells[c][r].y = r;     
      }      
    }
    this.cells = cells;
  }

  onLeftMouseDown(x: number, y: number) {
    this.tense = true;
    this.gameIsStarted = true;
  }

  onLeftMouseUp(x: number, y: number) {    
    this.tense = false;
    this.leftClick(x, y);
  }

  leftClick(x: number, y: number) {
    if (!this.cells[x][y].isOpen){
      if (!this.cells[x][y].isFlag && !this.cells[x][y].isUnsure) {
        if (this.cells[x][y].isBomb) this.openAllCellsWithBombs();
        else {
          this.cells[x][y].isOpen = true;
          if (this.cells[x][y].mines === 0) {
            let neighbors = this.getNeighbors(x, y, this.cells);
            neighbors.forEach(neighbor => {
              if (!neighbor.isFlag && !neighbor.isOpen){
                this.leftClick(neighbor.x, neighbor.y);
              }
            });
          }
        }
      }
    }
  }

  openAllCellsWithBombs() {
    this.cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb) cell.isOpen = true;
      })
    });
  }
    
  onRightMouseUp(x: number, y: number) { 
    if (this.isQuestionMarksEnabled()) {
      if (this.cells[x][y].isFlag) {
        this.cells[x][y].isFlag = false;
        this.cells[x][y].isUnsure = true;
      } 
      else if (this.cells[x][y].isUnsure) this.cells[x][y].isUnsure = false;
      else if (!this.cells[x][y].isUnsure && !this.cells[x][y].isOpen) this.cells[x][y].isFlag = true;
    }   
    else this.cells[x][y].isFlag = this.cells[x][y].isFlag ? false : true;
  }

  isTense(): boolean {
    return this.tense;
  }

  timePassed(): number {
    if (this.gameIsStarted && !this.isLost() && !this.isWon())
        this.ticks ++;

    return this.ticks;
  }

  minesLeftCount() {
    let flaged: number = 0;
    this.cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isFlag) flaged += 1;
      })
    });
    return this.mines - flaged;
  }

  reset() {
    this.setCells();
    this.setMines();
    this.setClues();
    this.gameIsStarted = false;
    this.ticks = 0;
  }

  currentLevel(): Level {
    return this.level;
  }

  selectLevel(level: Level) {
    this.level = level;
  }

  isLost(): boolean {
    let isLost: boolean = false;
    this.cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb && cell.isOpen) isLost = true;
      })
    });
    return isLost;
  }

  isWon(): boolean {
    let isOpen: number = 0;
    this.cells.forEach(row => {
      row.forEach(cell => {
        if (!cell.isBomb && cell.isOpen) isOpen += 1;
      })
    })
    return (this.cells.length * this.cells.length - this.mines) == isOpen;
  }

  isQuestionMarksEnabled(): boolean {

    return this.questionMarksToggle;
  }

  toggleQuestionMarksEnabled() {
    this.questionMarksToggle = this.questionMarksToggle ? false : true;
  }

  setQuestionMarks(value: boolean) {
    this.questionMarksToggle = value;
  }

  testCells(testCells: Cell[][]) {
    for (let c = 0; c < testCells.length; c++) {
      for (let r = 0; r < testCells.length; r++) {
        testCells[c][r].x = c;
        testCells[c][r].y = r;     
      }      
    }
    this.cells = testCells;
  }
  
}
