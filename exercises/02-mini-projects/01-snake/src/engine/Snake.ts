import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  snake: Cell[] = [
    new Cell(2, 0),
    new Cell(1, 0),
    new Cell(0, 0)
  ];
  direction: Direction = "Right";

  setDirection(direction: Direction) {
    if (this.direction !== "Left" && direction == "Right") this.direction = direction;
    if (this.direction !== "Right" && direction == "Left") this.direction = direction;
    if (this.direction !== "Up" && direction == "Down") this.direction = direction;
    if (this.direction !== "Down" && direction == "Up") this.direction = direction;
  }

  move() {
    let snakeX = this.snake[0].x;
    let snakeY = this.snake[0].y;
    this.snake.pop();
    if (this.direction == "Left") snakeX -= 1;
    if (this.direction == "Right") snakeX += 1;
    if (this.direction == "Up") snakeY -= 1;
    if (this.direction == "Down") snakeY += 1;
    let newHead = {
      x: snakeX,
      y: snakeY
    }
    this.snake.unshift(newHead);
  }

  grow() {
    for (let index = 0; index < 3; index++) {
      let snakeX = this.snake[index].x;
      let snakeY = this.snake[index].y;
      let newBodyCell = {
        x: snakeX,
        y: snakeY
      }
      this.snake.unshift(newBodyCell);      
    }
  }

  getHead(): Cell {
    return this.snake[0];
  }

  isSnake(cell: Cell): boolean {
    for (let i = 1; i < this.snake.length; i++) {
      if (this.snake[i].x == cell.x && this.snake[i].y == cell.y) {
        return true;
      }      
    }
    return false;  
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.snake.slice(1).reverse();
  }
}
