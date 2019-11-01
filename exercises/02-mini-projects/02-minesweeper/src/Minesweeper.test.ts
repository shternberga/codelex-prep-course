import { Minesweeper, Cell } from "./Minesweeper"
import { LEVELS } from "./levels"

describe("Minesweeper", () => {
  const level = LEVELS[0]

  it("should have field with closed cells", () => {
    const minesweeper = new Minesweeper(level)

    const cells = minesweeper.getCells()

    expect(cells.length).toBe(10)
    cells.forEach(row => expect(row.length).toBe(10))
  })

  it("should open cell on left mouse click", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.onLeftMouseUp(0, 0)

    expect(minesweeper.cells[0][0].isOpen).toBe(true)
  })

  it("should mark cell with flag on right mouse click", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.onRightMouseUp(0, 0)

    expect(minesweeper.cells[0][0].isFlag).toBe(true)
  })

  it("if cell has flag, should not open it", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.onRightMouseUp(0, 0)
    minesweeper.onLeftMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isOpen).toBe(false)
  })

  it("should mark cell with unsure on right mouse click, if cell has Flag", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.setQuestionMarks(true)
    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(true)

    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(false)
    expect(minesweeper.cells[0][0].isUnsure).toBe(true)
  })

  it("if cell has Question Mark, should not open it", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.setQuestionMarks(true)
    minesweeper.onRightMouseUp(0, 0)
    minesweeper.onRightMouseUp(0, 0)
    minesweeper.onLeftMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isOpen).toBe(false)
  })

  it("should unmark cell with Question Mark on right mouse click", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.setQuestionMarks(true)
    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(true)

    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(false)
    expect(minesweeper.cells[0][0].isUnsure).toBe(true)

    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(false)
    expect(minesweeper.cells[0][0].isUnsure).toBe(false)
    expect(minesweeper.cells[0][0].isOpen).toBe(false)
  })

  it("should unmark cell with Flag on right mouse click, if Question Marks is not Enabled", () => {

    const minesweeper = new Minesweeper(level)
    minesweeper.setQuestionMarks(false)
    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(true)

    minesweeper.onRightMouseUp(0, 0)
    expect(minesweeper.cells[0][0].isFlag).toBe(false)
    expect(minesweeper.cells[0][0].isUnsure).toBe(false)
  })

  it("should build a field size appropriate to a LEVELS[0]", () => {
    const minesweeper = new Minesweeper(LEVELS[0])

    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()
    
    expect(cells.length).toBe(level.columns)
    cells.forEach(row => expect(row.length).toBe(level.rows))
  })

  it("should build a field size appropriate to a LEVELS[1]", () => {
    const minesweeper = new Minesweeper(LEVELS[1])

    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()
    
    expect(cells.length).toBe(level.columns)
    cells.forEach(row => expect(row.length).toBe(level.rows))
  })

  it("should build a field size appropriate to a LEVELS[2]", () => {
    const minesweeper = new Minesweeper(LEVELS[2])

    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()
    
    expect(cells.length).toBe(level.columns)
    cells.forEach(row => expect(row.length).toBe(level.rows))
  })

  it("should have mines on the field under closed cells", () => {
    const minesweeper = new Minesweeper(level)

    const cells = minesweeper.getCells()
    let isBombs = false

    cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb) isBombs = true
      })
    })

    expect(isBombs).toBe(true)
  })

    it("should put mines appropriate to a LEVELS[0]", () => {
    const minesweeper = new Minesweeper(LEVELS[0])
    
    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()

    let bombs = 0

    cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb) bombs += 1
      })
    })
   
    expect(bombs).toBe(level.mines)
  })

  it("should put mines appropriate to a LEVELS[1]", () => {
    const minesweeper = new Minesweeper(LEVELS[1])
    
    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()

    let bombs = 0

    cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb) bombs += 1
      })
    })
   
    expect(bombs).toBe(level.mines)
  })

  it("should put mines appropriate to a LEVELS[2]", () => {
    const minesweeper = new Minesweeper(LEVELS[2])
    
    let level = minesweeper.currentLevel()
    const cells = minesweeper.getCells()

    let bombs = 0

    cells.forEach(row => {
      row.forEach(cell => {
        if (cell.isBomb) bombs += 1
      })
    })
   
    expect(bombs).toBe(level.mines)
  })

  it("game is lost if user clicks on the bomb", () => {
    const minesweeper = new Minesweeper(level)

    minesweeper.getCells()[0][0].isBomb = true
    minesweeper.onLeftMouseUp(0, 0)

    expect(minesweeper.isLost()).toBe(true)
  })

  it("if game is lost - auto-open all cells with bombs ", () => {
    const minesweeper = new Minesweeper(level)

    const bomb1 = new Cell()
    bomb1.isBomb = true
    const bomb2 = new Cell()
    bomb2.isBomb = true
    const bomb3 = new Cell()
    bomb3.isBomb = true
    minesweeper.testCells([
      [new Cell(), bomb1, new Cell() ],
      [bomb2, new Cell(), new Cell() ],
      [new Cell(), new Cell(), bomb3 ]
    ])
    minesweeper.onLeftMouseUp(0, 1)
    expect(minesweeper.isLost()).toBe(true)
    expect(minesweeper.getCells()[0][1].isOpen).toBe(true)
    expect(minesweeper.getCells()[1][0].isOpen).toBe(true)
    expect(minesweeper.getCells()[2][2].isOpen).toBe(true)
  })


  it("game is won if all safe cells are opened ", () => {
    const minesweeper = new Minesweeper(level)
    minesweeper.mines = 2

    const bomb = new Cell()
    const open = new Cell()
    bomb.isBomb = true
    open.isOpen = true
    minesweeper.testCells([
      [open, bomb, open, ],
      [bomb, open, open, ],
      [open, open, open, ]
    ])
    expect(minesweeper.isWon()).toBe(true)
  })

  it("should be able to reset", () => {
    const minesweeper = new Minesweeper(level)

    minesweeper.getCells()[0][0].isBomb = true
    minesweeper.onLeftMouseUp(0, 0)

    expect(minesweeper.isLost()).toBe(true)

    minesweeper.reset()
    let isAllClosed: boolean = true
    let isAllUnflagged: boolean = true
    let isAllNotUnsure: boolean = true
    
    minesweeper.getCells().forEach(row => {
      row.forEach(cell => {
        if (cell.isOpen) isAllClosed = false
        if (cell.isFlag) isAllUnflagged = false
        if (cell.isUnsure) isAllNotUnsure = false
      })
    })

    expect(minesweeper.isLost()).toBe(false)
    expect(isAllClosed).toBe(true)
    expect(isAllUnflagged).toBe(true)
    expect(isAllNotUnsure).toBe(true)
  })

  it("should be able to change level", () => {
    const minesweeper = new Minesweeper(level)
    const level_old = minesweeper.currentLevel()

    minesweeper.selectLevel(LEVELS[1])
    const level_new = minesweeper.currentLevel()
    expect(level_old).not.toEqual(level_new)
  })

  it("should be able to count how many mines left to find", () => {
    const minesweeper = new Minesweeper(level)

    minesweeper.onRightMouseUp(0, 0)//put flag
    minesweeper.onRightMouseUp(1, 1)//put flag
    expect(minesweeper.minesLeftCount()).toBe(level.mines - 2)
  })

  it("should show clue numbers correctly", () => {
    const minesweeper = new Minesweeper(level)
    const bomb = new Cell()
    bomb.isBomb = true
    minesweeper.testCells([
      [new Cell(), bomb, new Cell(), ],
      [bomb, new Cell(), new Cell(), ],
      [new Cell(), new Cell(), new Cell(), ]
    ])
    minesweeper.setClues()
    const cells = minesweeper.getCells()
    expect(cells[0][0].mines).toBe(2)
    expect(cells[0][1].mines).toBe(0)
    expect(cells[0][2].mines).toBe(1)
    expect(cells[1][0].mines).toBe(0)
    expect(cells[1][1].mines).toBe(2)
    expect(cells[1][2].mines).toBe(1)
    expect(cells[2][0].mines).toBe(1)
    expect(cells[2][1].mines).toBe(1)
  })

  it("should be able to find neighbor cells", () => {
    const minesweeper = new Minesweeper(level)
    
    minesweeper.testCells([
      [new Cell(), new Cell(), new Cell(), ],
      [new Cell(), new Cell(), new Cell(), ],
      [new Cell(), new Cell(), new Cell(), ]
    ])

    minesweeper.setClues()

    const cells = minesweeper.getCells()
    const neighbors01 = minesweeper.getNeighbors(0, 1, cells)
    const neighbors11 = minesweeper.getNeighbors(1, 1, cells)
    const neighbors22 = minesweeper.getNeighbors(2, 2, cells)
    
    expect(neighbors11.length).toBe(8)

    expect(neighbors11[0].x).toBe(0)
    expect(neighbors11[0].y).toBe(0)

    expect(neighbors11[1].x).toBe(0)
    expect(neighbors11[1].y).toBe(2)

    expect(neighbors11[2].x).toBe(0)
    expect(neighbors11[2].y).toBe(1)

    expect(neighbors11[3].x).toBe(2)
    expect(neighbors11[3].y).toBe(0)

    expect(neighbors11[4].x).toBe(2)
    expect(neighbors11[4].y).toBe(2)

    expect(neighbors11[5].x).toBe(2)
    expect(neighbors11[5].y).toBe(1)

    expect(neighbors11[6].x).toBe(1)
    expect(neighbors11[6].y).toBe(0)

    expect(neighbors11[7].x).toBe(1)
    expect(neighbors11[7].y).toBe(2)

    expect(neighbors01.length).toBe(5)
    expect(neighbors22.length).toBe(3)
  })

  it("when none of the cell’s neighbors are mined, each one of those cells is opened automatically", () => {
    const minesweeper = new Minesweeper(level)
    const bomb = new Cell()
    bomb.isBomb = true
    minesweeper.testCells([
      [bomb, new Cell(), new Cell(), ],
      [new Cell(), new Cell(), new Cell(), ],
      [new Cell(), new Cell(), new Cell(), ]
    ])
    minesweeper.setClues()
    minesweeper.onLeftMouseUp(0, 2)
    const cells = minesweeper.getCells()
    expect(cells[0][2].isOpen).toBe(true)
    expect(cells[1][0].isOpen).toBe(true)
    expect(cells[1][1].isOpen).toBe(true)
    expect(cells[1][2].isOpen).toBe(true)
    expect(cells[2][0].isOpen).toBe(true)
    expect(cells[2][1].isOpen).toBe(true)
  })
})
