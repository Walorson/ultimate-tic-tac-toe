const musicList = [];
const musicNum = 5;
for(let i=1; i<=musicNum; i++) {
    musicList.push(new Audio(`../music/music${i}.mp3`))
}
let rand = Math.floor(Math.random()*musicNum);
//musicList[4].play();