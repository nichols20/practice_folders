
class Memory {
    constructor(){
        this.tile = document.getElementById('memoryTile1')
        this.tilePic = document.getElementById('tile1Pic')
        this.source = document.getElementById('tile1Pic').src
        this.tile2 = document.getElementById('memoryTile2')
        this.tilePic2 = document.getElementById('tile2Pic')
        this.source2 = document.getElementById('tile2Pic').src
        this.tile3 = document.getElementById('memoryTile3')
        this.tilePic3 = document.getElementById('tile3Pic')
        this.source3 = document.getElementById('tile3Pic').src
        this.tile4 = document.getElementById('memoryTile4')
        this.tilePic4 = document.getElementById('tile4Pic')
        this.source4 = document.getElementById('tile4Pic').src
        this.match = []
        this.clickAmount = 0 /*once two clicks have occured the program will analyze whether the two images are the same*/
        this.countCorrect = 0         
        this.text = document.createElement('p')         
        this.text.innerHTML = `Score: ${this.countCorrect}`        
        document.body.append(this.text)

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
        this.tile3Clicked = function(){
            this.tile3.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic3.style.opacity = '1'
    
            this.match.push(this.source3)

            this.clickAmount++
            this.checkMatch()
        }
        this.tile4Clicked = function(){
            this.tile4.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic4.style.opacity = '1'
    
            this.match.push(this.source4)

            this.clickAmount++
            this.checkMatch()
        }
    }

    checkMatch(){
      console.log('yes')
      if(this.clickAmount === 2){
        if(this.match[0] === this.match[1]){
            window.alert('nice job!')
            this.clickAmount = 0;
            this.countCorrect++
            this.text.innerHTML = `Score: ${this.countCorrect}`

            this.match.splice(0, 2)

            if(this.match[0] === this.source){
                this.tile.onclick = 'whatever'
            }
        }
        else if(this.match[0] !== this.match[1]){
            this.clickAmount = 0;
            alert('try again :(')
            if(this.match[0] === this.source){
                this.tile.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic.style.opacity = '0'
                this.tile2.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic2.style.opacity = '0'
            }
            if(this.match[0] === this.source3){
                this.tile3.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic3.style.opacity = '0'
                this.tile4.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic4.style.opacity = '0'
            }
            if(this.match[1] === this.source){
                console.log('this is being chosen')
                this.tile.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic.style.opacity = '0'
                this.tile2.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic2.style.opacity = '0'
                this.match.splice(0, 2)
            }
            if(this.match[1] === this.source3){
                console.log('this works')
                this.tile3.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic3.style.opacity = '0'
                this.tile4.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic4.style.opacity = '0'
                this.match.splice(0, 2)
            }
        }
      }
    }        

}





const memoryGame = new Memory