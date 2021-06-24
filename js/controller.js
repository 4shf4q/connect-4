$(document).ready(function() {

	// Setup game.
    // Set Player names in pop ups.
    config.yellowPlayerName = prompt("Please enter the first player's name. This player will use yellow game pieces.", config.yellowPlayerName) || config.yellowPlayerName;
    config.redPlayerName = prompt("Please enter the second player's name. This player will use red game pieces.", config.redPlayerName) || config.redPlayerName;
    $('.prefix').text(config.playerPrefix);
    $('#player').addClass(currentPlayer).text(config[currentPlayer + "PlayerName"]);

    // when play agian notice comes when a certain player wins or game is draw,
    // it reloads the page for new game after clicking the play again button.
    $('.play-again').click(function(e) {
        location.reload();
    });

});
