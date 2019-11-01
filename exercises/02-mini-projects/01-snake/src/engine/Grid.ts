import { Cell } from "./Cell";
import { Configuration } from "./Configuration";

export class Grid {
  private configuration: Configuration;
  apples: Cell[];

  constructor(configuration: Configuration) {
    this.configuration = configuration;
    this.apples = [];
    this.seed();
  }

  seed(): void {
    for (let i = 0; i < 5; i++) {
      let apple = new Cell(
        this.generateRandomNumber(this.configuration.nbCellsX, 0),
        this.generateRandomNumber(this.configuration.nbCellsY, 0)
      )    
      
      do {
        apple = new Cell(
          this.generateRandomNumber(this.configuration.nbCellsX, 0),
          this.generateRandomNumber(this.configuration.nbCellsY, 0)
        )  
      } while (this.isAppleInside(apple));

      this.apples.push(apple);
    }
  }

  generateRandomNumber(max: number, min: number): number {
    const result = Math.floor(Math.random() * ((max - 1) - min)) + min;
    return result;
  }

  isAppleInside(cell: Cell): boolean {

    for (let i = 0; i < this.apples.length; i++) {
      if (this.apples[i].x == cell.x && this.apples[i].y == cell.y) {
        console.log("APPLE!");
        return true;
      }      
    }
    return false;
  }

  removeApple(cell: Cell): void {
    this.apples = this.apples.filter((c) => c.x !== cell.x && c.y !== cell.y);
  }

  isDone(): boolean {
    if (this.apples.length == 0) {
      return true;
    } else return false;
  }

  getApples(): Cell[] {
    return this.apples;
  }
}
