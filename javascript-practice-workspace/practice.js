
class Memory {
    constructor(){
        this.tile = document.getElementById('memoryTile1')
        this.clickAmount = 0 /*once two clicks have occured the program will analyze whether the two images are the same*/
    }

    tileClicked(){
        this.tile.style.opacity = '0'
        this.clickAmount++
    }
}





const memoryGame = new Memory