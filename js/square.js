(function(checkers) {
    checkers.Square = function(color) {
        var self = this;
        this.color = color;
        this.piece = undefined;

        this.isOccupied = function() {
            return self.piece !== undefined;
        };

        this.draw = function(context, row, col) {
            var x = col * checkers.SQUARE_LENGTH;
            var y = row * checkers.SQUARE_LENGTH;
            context.fillStyle = self.color;
            context.fillRect(x, y, checkers.SQUARE_LENGTH, checkers.SQUARE_LENGTH);
            if (self.piece)
                self.piece.draw(context, row, col);
        };

        this.highlight = function(context, row, col, highlightColor) {
            var x = col * checkers.SQUARE_LENGTH;
            var y = row * checkers.SQUARE_LENGTH;
            context.globalAlpha = 0.5;
            context.fillStyle = highlightColor;
            context.fillRect(x, y, checkers.SQUARE_LENGTH, checkers.SQUARE_LENGTH);
            context.globalAlpha = 1;
        };
    };
}(window.checkers = window.checkers || {}));
