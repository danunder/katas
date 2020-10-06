const calculateChange = function(total, cash) {
  const billsAndCoins = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  }
    
  let changeOwed = cash - total;

  while (changeOwed > 0) {
    if (changeOwed > 2000) {
      billsAndCoins.twentyDollar++;
      changeOwed -= 2000;
    } else if (changeOwed > 1000) {
      billsAndCoins.tenDollar++;
      changeOwed -= 1000;
    } else if (changeOwed > 500) {
      billsAndCoins.fiveDollar++;
      changeOwed -= 500;
    } else if (changeOwed > 200) {
      billsAndCoins.twoDollar++;
      changeOwed -= 200;
    } else if (changeOwed > 100) {
      billsAndCoins.oneDollar++;
      changeOwed -= 100;
    } else if (changeOwed > 25) {
      billsAndCoins.quarter++;
      changeOwed -= 25;
    } else if (changeOwed > 10) {
      billsAndCoins.dime++;
      changeOwed -= 10;
    } else if (changeOwed > 5) {
      billsAndCoins.nickel++;
      changeOwed -= 5;
    } else {
      billsAndCoins.penny++;
      changeOwed -= 1;
    }
  }
  for (let denomination in billsAndCoins) {
    if (billsAndCoins[denomination] === 0) {
      delete billsAndCoins[denomination];
    }
  }
  return billsAndCoins;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
