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
            
            if(turnX) {
                playerTurn = p1;
                this.slot.innerHTML = p1.insert();  // Utwórz pionek, który będzie widoczny na mapie
                charMap[this.y][this.x] = p1.character; //Zarejestruj na wirtualnej mapie położenie pionków
                checkWinCondition(this.x, this.y, p1);  // Sprawdź, czy nie doszło przypadkiem do wygranej.
                turnImage.innerHTML = p2.insertOnlyImage(); //Podmień widoczność, kto wykonuje teraz turę.
                $('#icon').attr('href',p2.character);
                turnX = false; //Przestaw turę na kolejnego gracza
            }
            else {
                playerTurn = p2;
                this.slot.innerHTML = p2.insert();
                charMap[this.y][this.x] = p2.character;
                checkWinCondition(this.x, this.y, p2);
                turnImage.innerHTML = p1.insertOnlyImage();
                $('#icon').attr('href',p1.character);
                turnX = true;
            }
            
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