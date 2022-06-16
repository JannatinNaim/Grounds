class User {
  constructor(rank = -8, progress = 0) {
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.rankIndex = this.ranks.indexOf(rank);
    this.rank = this.ranks[this.rankIndex];
    this.progress = progress;
  }

  incProgress(n) {
    if (n < -8 || n === 0 || n > 8) throw new Error();

    const rankDifference = this.ranks.indexOf(n) - this.rankIndex;

    if (rankDifference <= -2) return;

    let score = 0;
    if (rankDifference === 0) score = 3;
    else if (rankDifference === -1) score = 1;
    else score = 10 * rankDifference ** 2;

    this.progress += score;

    let canRankUp = Math.floor(this.progress / 100) >= 1 && this.rank < 8;
    while (canRankUp) {
      this.rankIndex += 1;
      this.rank = this.ranks[this.rankIndex];
      this.progress -= 100;

      canRankUp = Math.floor(this.progress / 100) >= 1 && this.rank < 8;
    }

    if (this.rank === 8) this.progress = 0;
  }
}

let user = new User();
user.incProgress(8);
