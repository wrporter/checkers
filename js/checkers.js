$(document).ready(function() {
    var $board = $("#board");
    var canvas = $board[0];

    checkers.SQUARE_LENGTH = canvas.height / checkers.NUM_ROWS;
    checkers.PIECE_RADIUS = checkers.SQUARE_LENGTH / 2 * 0.7;

    $("#newGame").click(function(event) {
        var game = new checkers.Game(canvas);
        game.setup();

        $board.click(function(event) {
            game.processClick(event);
        });
    });
});
