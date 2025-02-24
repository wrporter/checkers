(function(checkers) {
    checkers.Move = function(fromRow, fromCol, toRow, toCol) {
        var self = this;
        this.fromRow = fromRow;
        this.fromCol = fromCol;
        this.toRow = toRow;
        this.toCol = toCol;

        this.isFrom = function(row, col) {
            return self.fromRow === row && self.fromCol === col;
        };

        this.isJump = function() {
            return (Math.abs(self.fromRow - self.toRow) === 2);
        };
        
        this.perform = function(board, context) {
            var fromSquare = board[self.fromRow][self.fromCol];
            var toSquare = board[self.toRow][self.toCol];
            var piece = fromSquare.piece;

            fromSquare.piece = undefined;
            toSquare.piece = piece;

            if (self.isJump()) {
                rowDiff = self.toRow - self.fromRow;
                colDiff = self.toCol - self.fromCol;
                row = self.fromRow + rowDiff / 2;
                col = self.fromCol + colDiff / 2;
                board[row][col].piece = undefined;
                board[row][col].draw(context, row, col);
            }

            fromSquare.draw(context, self.fromRow, self.fromCol);
            toSquare.draw(context, self.toRow, self.toCol);
        };
    };
}(window.checkers = window.checkers || {}));
