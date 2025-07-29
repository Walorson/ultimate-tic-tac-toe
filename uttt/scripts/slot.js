let playerTurn;
class Slot {
    constructor(n, y, x) {
        this.id = n;
        this.x = x;
        this.y = y;
        this.char = null;
        this.slot = slots[n];
        
        this.slot.onclick = () => {
            if(this.slot.classList.contains('disabled') || isRoundEnd == true) return;
            
            playerTurn = players[turn];
            this.slot.innerHTML = playerTurn.insert();  // Utwórz pionek, który będzie widoczny na mapie
            charMap[this.y][this.x] = playerTurn.character; //Zarejestruj na wirtualnej mapie położenie pionków
            checkWinCondition(this.x, this.y, playerTurn);  // Sprawdź, czy nie doszło przypadkiem do wygranej.
            turn += 1; //Przestaw turę na kolejnego gracza
            if(turn >= players.length)
                turn = 0;

            const playerTurnNext = players[turn];

            turnImage.innerHTML = playerTurnNext.insertOnlyImage(); //Podmień widoczność, kto wykonuje teraz turę.
            $('#icon').attr('href',playerTurnNext.character);
            
            this.slot.classList.add('disabled');
            this.slot.onclick = ''; 
        }
    }
}

function clearSlots() {
    slots.forEach((item) => {
        item.innerHTML = '';
        item.classList.remove("win");
        if(item.classList.contains('shutdown') == false) item.classList.remove('disabled');
    });
}