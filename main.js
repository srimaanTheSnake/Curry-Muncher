var gameData={
    curry: 0,
    curryPerClick:1,
    curryPerClickCost: 10
}
//<button onclick="mineGold()">Mine curry</button>
function mineCurry(){
    gameData.curry+=gameData.curryPerClick
    document.getElementById("curryMined").innerHTML = gameData.gold + "Curry Mined"
}
<p id="curryMined">0 curry Mined</p>
function buyCurryPerClick(){
    if(gameData.curry>= gameData.curryPerClickCost){
        gameData.curry -= gameData.curryPerClickCost
        gameDatacurryPerClick +=1
        gameData.goldPerClickCost*=2
    }
}