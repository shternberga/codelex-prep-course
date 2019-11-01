import { Snake } from './Snake'
import { Cell } from './Cell'

describe("Snake", () => {
    it("should take three cells at the beginning", () => {
        const snake = new Snake()

        expect(snake.getHead()).toEqual(new Cell(2, 0))
        expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)])
    })

    it("should be able to move", () => {
        const snake = new Snake()

        const oldHead = snake.getHead()
        const oldTail = snake.getTail()

        snake.move()

        expect(snake.getHead()).not.toEqual(oldHead)
        expect(snake.getTail()).not.toEqual(oldTail)
    })

    it("should be able to set new direction - down, up, right, left", () => {
        const snake = new Snake()

        snake.setDirection("Down")
        expect(snake.getDirection()).toEqual("Down")
        snake.setDirection("Right")
        expect(snake.getDirection()).toEqual("Right")
        snake.setDirection("Up")
        expect(snake.getDirection()).toEqual("Up")
        snake.setDirection("Left")
        expect(snake.getDirection()).toEqual("Left")        
    })

    it("should be able to change direction of moving snake - down", () => {
        const snake = new Snake()

        const oldHeadY = snake.getHead().y

        snake.setDirection("Down")
        snake.move()
        expect(snake.getHead().y).toBe(oldHeadY + 1)      
    })

    it("should be able to change direction of moving snake - up", () => {
        const snake = new Snake()

        const oldHeadY = snake.getHead().y
        snake.setDirection("Up")
        snake.move()
        expect(snake.getHead().y).toBe(oldHeadY - 1)  

    })

    it("should be able to change direction of moving snake - right", () => {
        const snake = new Snake()

        const oldHeadX = snake.getHead().x

        snake.setDirection("Right")
        snake.move()
        expect(snake.getHead().x).toBe(oldHeadX + 1) 
    })

    it("should be able to change direction of moving snake - left", () => {
        const snake = new Snake()
        snake.move()
        snake.setDirection("Down")
        snake.move()

        const oldHeadX = snake.getHead().x

        snake.setDirection("Left")
        snake.move()
        expect(snake.getHead().x).toBe(oldHeadX - 1) 
    })

    it("should be able to grow exectly by 3 cells", () => {
        const snake = new Snake()
        const oldSnailLength = snake.snake.length
        snake.grow()
        expect(snake.snake.length).toBe(oldSnailLength + 3) 
    })

    it("should detect if it bumps into itself", () => {
        const snake = new Snake()
        snake.snake = [
            new Cell(2, 2),
            new Cell(3, 2),
            new Cell(3, 1),
            new Cell(2, 1),
            new Cell(2, 2),
            new Cell(2, 3)
          ]
        expect(snake.isSnake(snake.getHead())).toBe(true)
    })
})