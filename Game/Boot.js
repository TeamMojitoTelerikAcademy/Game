var Game = {};
Game.Boot = function(Game) {

};

Game.Boot.prototype = {
    init:function() {

        this.input.maxPointers = 1;

        this.stage.disableVisibility = true;
    },

    preload:function() {
        this.load.image('preloaderBar', 'Resourses/preload.png'); 
    },

    create:function() {
        this.state.start('Preloader');
    }
}