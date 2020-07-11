//You start with a stake of 'x' dollars and an initial pot of 'x' dollars.
//If you lose a round, you lose the stake placed on that round and double the stake for your next bet.
//When you win, you win 100% of the new stake and revert back to the original stake on your next bet.

const martingale = (winLossArray, stake, startDollars) => {
  let setStake = stake;
  for (let i = 0; i < winLossArray.length; i++) {
    if (winLossArray[i]) {
      startDollars += stake;
      stake = setStake;
    } else {
      startDollars -= stake;
      stake *= 2;
    }
  }
  return startDollars;
};
console.log(martingale([0, 0, 0, 1, 1, 1], 100, 1000));
console.log(martingale([1, 1, 1, 0, 0, 0], 100, 1000));
console.log(martingale([1, 1, 0, 0, 1], 100, 1000));