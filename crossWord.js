
function checkVerticle(grid, word){
    let verticleWordsArr = [[]]
    let count = 0

    for(let x = 0; x < grid.length; x++){
        let word = '';
        for(let i = 0; i < grid.length; i++){
            word += grid[i][x]
        }
        verticleWordsArr[x] = word
    }
    let cnt = 0;
    verticleWordsArr.forEach(e => {
        if(e.includes(word)){
            cnt++
        }
    })
    return cnt;
}
function checkHorizontal(grid, word){
  let cnt = 0;

  grid.forEach((e) => {
    let k = e.join("");
    if (k.includes('snow')) {
      cnt++;
    }
  })
  return cnt;
};

function checkDiagonal(grid, isTopBottom, word){
    let Ylength = grid.length;
    let Xlength = grid[0].length;
    let maxLength = Math.max(Xlength, Ylength);
    let temp;
    let filteredArray = [];
    let cnt = 0;
    for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
      temp = [];
      for (let y = Ylength - 1; y >= 0; --y) {
        let x = k - (isTopBottom ? Ylength - y : y);
        if (x >= 0 && x < Xlength) {
          temp.push(grid[y][x]);
        }
      }
      if (temp.length > 0) {
        filteredArray.push(temp.join(""));
      }
    }
    filteredArray.forEach((e) => {
      if (e.includes(word)) {
        cnt++;
      }
      let k = e.split("").reverse().join("");
      if (k.includes(word)) {
        cnt++;
      }
    });
    return cnt;
};

function main(word){

var grid = [ ["a", "p", "x", "s", "f"],
            ["y", "e", "u", "s", "r"],
            ["n", "c", "l", "n", "h"],
            ["q", "g", "n", "o", "k"],
            ["s", "n", "o", "w", "y"] ];


console.log(countWordOccurrencesInGrid(word, grid));
}


function countWordOccurrencesInGrid(word, grid) {
    let count = 0;
    count += checkVerticle(grid, word);
    count += checkHorizontal(grid, word);
    count += checkDiagonal(grid, true, word);
    count += checkDiagonal(grid, false, word);
    return count;
}

let word = "snow"
main(word)