function rosettaStone(data) {
    let height = Number(data.shift());
    let pattern = data.splice(0, height);
    pattern = pattern.map(e => e.split(/\s+/g).map(Number));

    let matrix = data.map(r => r.split(/\s+/g).map(Number));


    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let cellValue = matrix[row][col];

            matrix[row][col] = cellValue + pattern[row % pattern.length][col % pattern[0].length];
            matrix[row][col] = numberToLetter(matrix[row][col]);
        }
    }

    let res = matrix.map(r => r.join('')).join('');
    console.log(res);

    function numberToLetter(num) {
        num %= 27;
        if (num == 0) {
            return ' ';
        }

        return String.fromCharCode(64 + num);
    }
}

rosettaStone([ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]
);

rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']
);