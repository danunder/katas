const generateBoard = function (whiteQueen, blackQueen) {
  let generatedBoard = [];
  for (let y = 0; y < 8; y++) {
    let row = [];
    for (let x = 0; x < 8; x++) {
      if ((whiteQueen[0] === x && whiteQueen[1] === y) || (blackQueen[0] === x && blackQueen[1] === y)){
        row.push(1);
      } else {
        row.push(0);
      }
    }
    generatedBoard.push(row);  
  }
  return generatedBoard;
}

const queenThreat = function (generatedBoard) {
  let q1 = [];
  let q2 = [];
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      if (generatedBoard[y][x] === 1 && q1.length === 0) {
        q1.push(x,y);
      // finds the first queen  
      } else if (generatedBoard[y][x] === 1 && q1.length > 0) {
        q2.push(x,y);
      // finds the second queen
      }
    }
  }

  if (q1[0] === q2[0] || q1[1] === q2[1] || q1[0] + q1[1] === q2[0] + q2[1] || q1[1] - q1[0] === q2[1] - q2[0]) {
    //logic to determine queen threat - same column OR same row OR same diagonal "ascending L-R" OR same diagonal "descending L-R"
    console.log("One queen is at " + q1 + " and the other is at " + q2 + ". The queens have threat on each other!");
    return true;
  } else { 
    console.log("One queen is at " + q1 + " and the other is at " + q2 + ". The queens do not have threat on each other.");
    return false;
  }

}




let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
/*
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/