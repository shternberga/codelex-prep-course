import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to restart a Game if is a winner", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(4);
    game.onClick(5);
    game.onClick(7);
    game.onClick(8);

    game.restart();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to make move", () => {
    const game = new Game();

    game.onClick(0)

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("should be able to make move in different place", () => {
    const game = new Game();

    game.onClick(1)

    expect(game.getCells()).toEqual([
      "-", "X", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("both players should be able to make move", () => {
    const game = new Game();

    game.onClick(0);
    expect(game.getTurn()).toBe("O");
      
    game.onClick(1);
    expect(game.getTurn()).toBe("X");

    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });

  it("should not allow to click twice on cell", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(0);

    expect(game.getCells()).toEqual([
      "X", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
  });
  
  it("should be able to find a winner", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(4);
    game.onClick(5);
    game.onClick(7);
    game.onClick(8);

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "X", "X", "O",
      "-", "X", "O"
    ]);
    expect(game.getWinner()).toBe("O");
  });

  it("should be able to find a winner in different positions - columns", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(2);
    game.onClick(6);

    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "X", "-", "-",
      "X", "-", "-"
    ]);
    expect(game.checkColumns()).toBe(true);
    expect(game.getWinner()).toBe("X");
  });

  it("should be able to find a winner in different positions - rows", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(3);
    game.onClick(1);
    game.onClick(6);
    game.onClick(2);

    expect(game.checkRows()).toBe(true);
    expect(game.checkColumns()).toBe(false);
    expect(game.getCells()).toEqual([
      "X", "X", "X",
      "O", "-", "-",
      "O", "-", "-"
    ]);

    expect(game.getWinner()).toBe("X")
  });

  it("should be able to find a winner in different positions - leftDiagonal", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(4);
    game.onClick(2);
    game.onClick(8);

    expect(game.checkRows()).toBe(false);
    expect(game.checkColumns()).toBe(false);
    expect(game.leftDiagonal()).toBe(true);
    expect(game.getCells()).toEqual([
      "X", "O", "O",
      "-", "X", "-",
      "-", "-", "X"
    ]);
    expect(game.getWinner()).toBe("X")
  });
  
  it("should be able to find a winner in different positions - rightDiagonal", () => {
    const game = new Game();

    game.onClick(2);
    game.onClick(1);
    game.onClick(4);
    game.onClick(5);
    game.onClick(6);

    expect(game.checkRows()).toBe(false);
    expect(game.checkColumns()).toBe(false);
    expect(game.leftDiagonal()).toBe(false);
    expect(game.rightDiagonal()).toBe(true);
    expect(game.getCells()).toEqual([
      "-", "O", "X",
      "-", "X", "O",
      "X", "-", "-"
    ]);
    expect(game.getWinner()).toBe("X")
  });

  
  it("should stop the game when is a tie", () => {
    const game = new Game();

    game.onClick(0);
    game.onClick(1);
    game.onClick(3);
    game.onClick(6);
    game.onClick(4);
    game.onClick(8);
    game.onClick(7);
    game.onClick(5);
    game.onClick(2);

    expect(game.isTie()).toBe(true);
  });  
});


