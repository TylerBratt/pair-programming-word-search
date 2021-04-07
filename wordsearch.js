const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    let newArr = [];
    const verticalJoin = newArr.map(ls => ls.join(''));
    
    
    for (let y = 0; y < letters.length; y++) {
        newArr.push(letters[y]);
        for (let x = 0; x < letters.length - 1; x++) {
            newArr.push(letters[y][x]);
        }
    }
    
    for (let name of verticalJoin) {
        if (name.includes(word)) {
        return true;
        }

    }
    
    for (let row of horizontalJoin) {
        if (row.includes(word)) {
            return true;
        }
    }
    return false;
};


// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'FRANK'));
module.exports = wordSearch;
