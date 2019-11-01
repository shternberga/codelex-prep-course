
export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-","-", "-", "-","-", "-", "-"];

  getCells(): XO[] {
    return  this.cells;
  }

  getTurn(): XO {
    const countX = this.cells.filter(cell => cell == 'X').length;
    const countO = this.cells.filter(cell => cell == 'O').length;

    return countX == countO ? 'X' : 'O';
  
  }

  getWinner(): XO {
    if (this.leftDiagonal() 
    || this.rightDiagonal() 
    || this.checkRows()
    || this.checkColumns()
    ) return this.getTurn() == 'X' ? 'O' : 'X';
    return "-";
  }

  rightDiagonal(): boolean { 
    if (this.cells[6] == this.cells[4] && this.cells[6] == this.cells[2] && this.cells[6] !== "-")
      return true; 

    return false;
  }

  leftDiagonal(): boolean { 
    if (this.cells[0] == this.cells[4] && this.cells[0] == this.cells[8] && this.cells[0] !== "-")
      return true; 

    return false;
  }

  checkColumns(): boolean { 
    for (let i = 0; i < 3; i++) {
      if (this.cells[i] == this.cells[i+3] && this.cells[i] == this.cells[i+6] && this.cells[i] !== "-")
      return true; 
    } 
    return false;
  }

  checkRows(): boolean{
     if (this.cells[0] == this.cells[1] && this.cells[0] == this.cells[2] && this.cells[0] !== "-")return true;
      else if (this.cells[3] == this.cells[4] && this.cells[3] == this.cells[5] && this.cells[3] !== "-")return true;
      else if (this.cells[6] == this.cells[7] && this.cells[6] == this.cells[8] && this.cells[6] !== "-")return true;
    // for (let i = 0; i < this.cells.length; i += 3) {  
    //   if (this.cells[i] == this.cells[i+1] && this.cells[i] == this.cells[i+2] && this.cells[i] !== "-")
    //   return true;    
    // }
    else return false;
  }

  isTie(): boolean {
    for (let i = 0; i < this.cells.length; i++) {
      if (this.cells[i] == "-") {
        return false;
      }      
    }
    return true;
  }

  onClick(i: number): void {
    
    if(this.cells[i] == '-'){
      this.cells[i] = this.getTurn();
    }
    console.log(`cell ${i} clicked`);
  }

  restart(): void {
    this.cells = ["-", "-", "-","-", "-", "-","-", "-", "-"];
    console.log("restart called");
  }
}