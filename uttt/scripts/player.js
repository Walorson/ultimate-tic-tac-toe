class Player {
    constructor(id, character) {
        this.id = "p"+id;
        this.char = character;
        this.character = `../characters/${character}.png`;
        this.winPoints = 0;
        this.turn = 0;
        this.totalMoves = 0;
        $("."+this.id+"img").attr('src',this.character);
    }
    insert() {
        this.turn++;
        this.totalMoves++;
        return `<img src="${this.character}">`;
    }
    insertOnlyImage() {
        return `<img src="${this.character}">`;
    }
    updateScore() {
        $("#"+this.id+"score").html(this.winPoints);
    }
}