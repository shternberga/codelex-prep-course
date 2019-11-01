import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { Cell } from "./Cell";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration

  it("should have five apples present", () => {
    const grid = new Grid(configuration)

    const apples = grid.getApples()

    expect(apples.length).toBe(5)
  });

  it("should seed apples randomly", () => {
    const grid_1 = new Grid(configuration)
    const apples_1 = grid_1.getApples()

    const grid_2 = new Grid(configuration)
    const apples_2 = grid_2.getApples()

    expect(apples_2).not.toEqual(apples_1) 
  });

  it("should be able to detect an apple in certain cell", () => {
    const grid = new Grid(configuration);
    expect(grid.isAppleInside(grid.apples[0])).toBe(true)
  });

  it("should be able to delete an apple in certain cell", () => {
    const grid = new Grid(configuration)
    expect(grid.getApples().length).toBe(5)

    grid.removeApple(grid.apples[3])
    expect(grid.getApples().length).toBe(4)
  });

  it("should be able to detect if no more apples left", () => {
    const grid = new Grid(configuration)

    grid.getApples().forEach(apple => {
      grid.removeApple(apple)
    })
        
    expect(grid.isDone()).toBe(true)
  });
});
