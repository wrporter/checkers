(function(checkers) {
    checkers.Piece = function(color) {
        var self = this;
        this.color = color;
        this.king = false;

        this.draw = function(context, row, col) {
            var x = col * checkers.SQUARE_LENGTH + checkers.SQUARE_LENGTH / 2;
            var y = row * checkers.SQUARE_LENGTH + checkers.SQUARE_LENGTH / 2 + 2;

            context.fillStyle = self.color;
            context.strokeStyle = checkers.PIECE_BORDER;
            context.lineWidth = 1;

            drawCircle(context, x, y, checkers.PIECE_RADIUS);
            drawCircle(context, x, y - 4, checkers.PIECE_RADIUS);

            if (self.king)
                drawKing(context, x, y + 2);
        };

        var drawCircle = function(context, x, y, radius) {
            context.beginPath();
            context.arc(x, y, radius, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
            context.stroke();
        };

        var drawKing = function(context, x, y) {
            context.fillStyle = checkers.KING_COLOR;
            context.font = "16px Arial";
            context.textAlign = "center";
            context.fillText("K", x, y);
        };
    };
}(window.checkers = window.checkers || {}));
