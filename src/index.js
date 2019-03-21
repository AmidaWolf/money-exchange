// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var coins = [];
  var money = {};
  var error = {};

  if (currency <= 0) {
    return error;
  }
  if (currency > 10000) {
    error.error = "You are rich, my friend! We don't have so much coins for exchange"
    return error;
  }

  var H = 0;
  var Q = 0;
  var D = 0;
  var N = 0;
  var P = 0;

  var divide50 = currency % 50;
  H = (currency - divide50) / 50;
  coins.push(H);

  var divide25 = divide50 % 25;
  Q = (divide50 - divide25) / 25;
  coins.push(Q);

  var divide10 = divide25 % 10;
  D = (divide25 - divide10) / 10;
  coins.push(D);

  var divide5 = divide10 % 5;
  N = (divide10 - divide5) / 5;
  coins.push(N);

  var divide1 = divide5 % 1;
  P = (divide5 - divide1) / 1;
  coins.push(P);

  for (var i = 0; i < coins.length; i++) {
    if (coins[i] != 0 && i === 0) {
      money["H"] = coins[i];
    } else if (coins[i] != 0 && i === 1) {
      money["Q"] = coins[i];
    } else if (coins[i] != 0 && i === 2) {
      money["D"] = coins[i];
    } else if (coins[i] != 0 && i === 3) {
      money["N"] = coins[i];
    } else if (coins[i] != 0 && i === 4) {
      money["P"] = coins[i];
    }
  }

  return money;
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
}
