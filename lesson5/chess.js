function chessBoardInit(notEmpty = false) {
    var cols = ",A,B,C,D,E,F,G,H,".split(',');
    var rows = ",1,2,3,4,5,6,7,8,".split(',').reverse();
    var chessBoard = document.createElement('table')
    var curRow;
    var curCell;


    for (var row = 0; row <= 9; row++) {
        curRow = document.createElement('tr');
        for (var cell = 0; cell <= 9; cell++) {
            curCell = document.createElement('td');
            if ((row === 0 || row === 9) || (cell === 0 || cell === 9)) {
                curCell.innerText = rows[row] || cols[cell];
            } else {
                if (row % 2 == cell % 2){
                    curCell.className = 'white_cell';
                }else {
                    curCell.className = 'black_cell';
                }
                // curCell.className = (row % 2 == cell % 2) ? 'white_cell' : 'black_cell';
                if (notEmpty === true) {
                    curCell.setAttribute('data-content', getFigureId(row, cols[cell]));
                }
            }
            curRow.appendChild(curCell);
        }
        chessBoard.appendChild(curRow);
    }
    console.log(chessBoard);
    return chessBoard;
}

var chessBoard = document.getElementById('chess');

chessBoard.appendChild(chessBoardInit());
