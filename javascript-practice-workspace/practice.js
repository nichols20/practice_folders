
class Memory {
    constructor(){
        this.tile = document.getElementById('memoryTile1')
        this.tilePic = document.getElementById('tile1Pic')
        this.source = document.getElementById('tile1Pic').src
        this.match = []
        this.clickAmount = 0 /*once two clicks have occured the program will analyze whether the two images are the same*/
    }

    tile1Clicked(){
        this.tile.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        this.tilePic.style.opacity = '1'
        console.log(this.source)
        this.match.push(this.source)
        console.log(this.match)
        this.clickAmount++
    }
}





const memoryGame = new Memory