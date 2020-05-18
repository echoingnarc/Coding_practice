let funds = 50;

while(funds > 0 && funds < 100){
    funds = funds + 2;
    
    funds = funds - 1;
    console.log(funds);
}

//returns a random integar in the range [m, n] inclusive 
function rand(m,n){
    return m + Math.floor((n-m+1))*Math.random();
}

//randomly returns a string representing one of the six
//Crown and Anchor faces

function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0,5)];
}

const bets = {crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0}:
let totalBet = rand(1, funds);
if(totalBet === 7){
    totalBet = funds;
    bets.heart = totalBet;
} else {
/// distribute total bet
}
funds = funds - totalBet;