function valid(n) { //Dzęki tej funkcji, nigdy funkcja checkWinCondition() się nie wysypie :D
    if(n > uttt_map.x-1 || n < 0) return uttt_map.x;
    else return n;
}
function highlightWinLine(player, x, y) { //Podświetl terytorium zwycięskiej lini!!!!
    for(let i=0; i<x.length; i++) {
        map[y[i]][x[i]].slot.classList.add('win');
    }
    endRound(player);
}
function check(player, x, y) {
    ///Jeśli wszystkie pola są zapełnione zakończ rundę
    if(players.reduce((sum, plr) => sum + plr.turn, 0) >= uttt_map.playableSlots) {
        endRound(null);
        return false;
    }

    for(let i=0; i<x.length-1; i++) {
        if(charMap[valid(y[i])][valid(x[i])] != charMap[valid(y[i+1])][valid(x[i+1])]) {
            return false;
        }
    }
    highlightWinLine(player, x, y);
    return true;
}
function checkTemplate(templateX=[x,x+1,x+2], templateY=[y,y,y]) {
    let player = playerTurn;
    if(check(player, templateX, templateY)) return true;

    for(let i=1; i<templateX.length; i++) {
        let shiftX = templateX[i] - templateX[0];
        let shiftY = templateY[i] - templateY[0];

        let arrX = []; let arrY = [];
        for(let j=0; j<templateX.length; j++) {
            arrX.push(templateX[j] - shiftX);
            arrY.push(templateY[j] - shiftY);
        }

        if(check(player, arrX, arrY)) return;
    }
}
////// Sprawdź czy warunki zwycięstwa XD /////////
function checkWinCondition(x, y, player) {
    // if(map[0][0].char == map[0][1].char && map[0][1].char == map[0][2].char) 
    //    if(map[0][0].char != null) whoWin = map[0][0].char;
    //const horizontal = [null,null,null,horizontal3,horizontal4,horizontal5,horizontal6,horizontal7,horizontal8];
    //const vertical = [null,null,null,vertical3,vertical4,vertical5,vertical6,vertical7,vertical8];
    //const cross = [null,null,null,cross3,cross4,cross5,cross6,cross7,cross8];
    if(player.turn < 3) return;

    /*if(sessionStorage.getItem('rule_straight_enable') == 'true') 
    {
        horizontal[Number(sessionStorage.getItem('rule_straight_num'))]();
        vertical[Number(sessionStorage.getItem('rule_straight_num'))]();
    }

    if(sessionStorage.getItem('rule_cross_enable') == 'true') 
    {
        cross[Number(sessionStorage.getItem('rule_cross_num'))]();  
    }*/

    conditions.forEach(con => {
        if(sessionStorage.getItem(`rule_${con.name}_enable`) == 'true') {
            let num = Number(sessionStorage.getItem(`rule_${con.name}_num`)); //Pobierz wartość wariantu
            num = num - con.sizes[0];   //Odejmij numer wariantu od pierwszej liczby wielkości wariantu (Bo pierwsza wartość to np. 3, a więc 3 - 3 = 0)
                                        //Odwołuję sie do 0 indeksu tablicy (po to, to robię)
            for(let k=0; k<con.condition[num].length; k++) {    //Dla wybranego wariantu sprawdzam warunek zwycięstwa (dla k wszystkich warunków zwycięstwa)
                let arrX = [];
                let arrY = [];
                for(let i=0; i<con.condition[num][k][0].length; i++) {  //[0] czyli dla linii X  
                    arrX.push(x+con.condition[num][k][0][i]);   //Do tablicy arrX wpycham współrzędne warunku np. (x+0, x+1, x+2) czyli 3 w jednej linii x
                }
                for(let i=0; i<con.condition[num][k][1].length; i++) { //[1] czyli dla linii Y
                    arrY.push(y+con.condition[num][k][1][i]); //Do tablicy arrY wpycham tak samo jak u arrX np. (y+0, y+0, y+0) czyli 3 w jednej linii poziomej, wtedy wyjdzie :D
                }
                checkTemplate(arrX, arrY); //Sprawdź, czy warunek zwycięstwa jest spełniony
            }
        }
    });

    ///////////// CONDITIONPEDIA ///////////
    /// To co jest poniżej to już historia ////
    ///// HORIZONTAL /////
    /*function horizontal3() {
        checkTemplate([x, x+1, x+2], [y,y,y]);
    }
    function horizontal4() {
        checkTemplate([x, x+1, x+2, x+3],[y,y,y,y]);
    }
    function horizontal5() {
        checkTemplate([x,x+1,x+2,x+3,x+4],[y,y,y,y,y]);
    }
    function horizontal6() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5],[y,y,y,y,y,y]);
    }
    function horizontal7() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5,x+6],[y,y,y,y,y,y,y]);
    }
    function horizontal8() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5,x+6,x+7],[y,y,y,y,y,y,y,y]);
    }
    ////// VERTICAL //////
    function vertical3() {
        checkTemplate([x,x,x], [y, y+1, y+2]);
    }
    function vertical4() {
        checkTemplate([x,x,x,x], [y,y+1,y+2,y+3]);
    }
    function vertical5() {
        checkTemplate([x,x,x,x,x], [y,y+1,y+2,y+3,y+4]);
    }
    function vertical6() {
        checkTemplate([x,x,x,x,x,x],[y,y+1,y+2,y+3,y+4,y+5]);
    }
    function vertical7() {
        checkTemplate([x,x,x,x,x,x,x],[y,y+1,y+2,y+3,y+4,y+5,y+6]);
    }
    function vertical8() {
        checkTemplate([x,x,x,x,x,x,x,x],[y,y+1,y+2,y+3,y+4,y+5,y+6,y+7]);
    }
    ///// CROSS ///////
    function cross3() 
    {
        //Lewy skos
        checkTemplate([x,x+1,x+2], [y,y+1,y+2]);
        //Prawy skos
        checkTemplate([x,x-1,x-2], [y,y+1,y+2]);
    }
    function cross4() {
        //Lewy skos
        checkTemplate([x,x+1,x+2,x+3], [y,y+1,y+2,y+3]);
        //Prawy skos
        checkTemplate([x,x-1,x-2,x-3], [y,y+1,y+2,y+3]);
    }
    function cross5() {
        //Lewy skos
        checkTemplate([x,x+1,x+2,x+3,x+4], [y,y+1,y+2,y+3,y+4]);
        //Prawy skos
        checkTemplate([x,x-1,x-2,x-3,x-4], [y,y+1,y+2,y+3,y+4]);
    }
    function cross6() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5], [y,y+1,y+2,y+3,y+4,y+5]);
        checkTemplate([x,x-1,x-2,x-3,x-4,x-5], [y,y+1,y+2,y+3,y+4,y+5]);
    }
    function cross7() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5,x+6], [y,y+1,y+2,y+3,y+4,y+5,y+6]);
        checkTemplate([x,x-1,x-2,x-3,x-4,x-5,x-6], [y,y+1,y+2,y+3,y+4,y+5,y+6]);
    }
    function cross8() {
        checkTemplate([x,x+1,x+2,x+3,x+4,x+5,x+6,x+7], [y,y+1,y+2,y+3,y+4,y+5,y+6,y+7]);
        checkTemplate([x,x-1,x-2,x-3,x-4,x-5,x-6,x-7], [y,y+1,y+2,y+3,y+4,y+5,y+6,y+7]);
    }

    ///////// CUSTOM /////////
    function square2x2() {
        checkTemplate([x,x+1,x,x+1],[y,y,y+1,y+1]);
    }
    function diamond() {
        //Bottom
        checkTemplate([x,x+1,x+2,x+1], [y,y,y,y+1]);
        //Top
        checkTemplate([x,x+1,x+2,x+1], [y,y,y,y-1]);
        //Left 
        checkTemplate([x,x,x,x-1], [y,y+1,y+2,y+1]);
        //Right
        checkTemplate([x,x,x,x+1], [y,y+1,y+2,y+1]);
    }
    function plus() {
        checkTemplate([x,x,x-1,x+1,x],[y,y+1,y+1,y+1,y+2]);
    }
    function crucifix() {
        checkTemplate([x,x,x-1,x+1,x,x],[y,y+1,y+1,y+1,y+2,y+3]);
    }
    function square2x2center() { //EXPERIMENTAL
        check(player, [1,2,1,2], [1,1,2,2]);
    }*/
} 