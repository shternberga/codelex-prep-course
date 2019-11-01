/**
 * Manage a game player's High Score list.
 *
 * Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.
 */

class HighScores {
  scores: number[];
  constructor(scores: number[]) {
    this.scores = scores;
  }

  get latest() {
    return this.scores[this.scores.length-1];
  }

  get personalBest() {
    let arr = this.scores;
    return arr.sort(function(a, b){return b - a})[0];
  }

  get personalTopThree() {
    let arr = this.scores;
    let n = arr.length < 3 ? arr.length : 3;
    return arr.sort(function(a, b){return b - a}).slice(0, n);
  }
}

export { HighScores };
