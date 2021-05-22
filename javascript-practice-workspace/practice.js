
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

        this.tile1Clicked = function(){
            /*reveals card selected */
            this.tile.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic.style.opacity = '1'
            
            /*pushes source of image selected to empty array */
            this.match.push(this.source)

            /*increments click amount +1 then checks if if statement in checkMatch() is true */
            this.clickAmount++
            this.checkMatch()
        }
        this.tile2Clicked = function(){
            this.tile2.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic2.style.opacity = '1'
    
            this.match.push(this.source2)

            this.clickAmount++
            this.checkMatch()
        }
    }

    checkMatch(){
      console.log('yes')
      if(this.clickAmount === 2){
        if(this.match[0] === this.match[1]){
            window.alert('nice job!')
        }
      }
    }        

}





const memoryGame = new Memory