const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let newArr = [];
    for (let y = 0; y < letters.length; y++) {
        //newArr.push(letters[y]);
        for (let x = 0; x < letters[y].length -1; x++) {
            if (letters[y][x] === undefined) continue;
      if (newArr[x] === undefined) newArr[x] = [];
      newArr[x][y] = letters[y][x];
        }
    }
        //console.log(newArr)
        const verticalJoin = newArr.map(ls => ls.join(''));
       // console.log(verticalJoin)
    for (let row of horizontalJoin) {
            if (row.includes(word)) {
            return true;
            }
        }
   for (let row of verticalJoin) {
            if (row.includes(word)) {
            return true;
       }
  } return false
};
module.exports = wordSearch;
