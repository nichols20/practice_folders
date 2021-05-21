
class Memory {
    constructor(){
        this.tile = document.getElementById('memoryTile1')
        this.tilePic = document.getElementById('tile1Pic')
        this.source = document.getElementById('tile1Pic').src
        this.tile2 = document.getElementById('memoryTile2')
        this.tilePic2 = document.getElementById('tile2Pic')
        this.source2 = document.getElementById('tile2Pic').src
        this.match = []
        this.clickAmount = 0 /*once two clicks have occured the program will analyze whether the two images are the same*/

        this.checkMatch = function(){
            if(this.match[0] === this.match[1])console.log('goodjob')
        }        
    }

    tile1Clicked(){
        this.tile.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        this.tilePic.style.opacity = '1'

        this.match.push(this.source)

        this.clickAmount++
        if (this.clickAmount === 2){
            this.checkMatch()
        }
    }
    tile2Clicked(){
        this.tile2.style.backgroundColor = 'rgba(0, 0, 0, 0)'
        this.tilePic2.style.opacity = '1'

        this.match.push(this.source2)
    
        this.clickAmount++
        if (this.clickAmount === 2){
            this.checkMatch()
        }
    }

}





const memoryGame = new Memory