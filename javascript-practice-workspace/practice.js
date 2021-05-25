
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
        this.tile5 = document.getElementById('memoryTile5')
        this.tilePic5 = document.getElementById('tile5Pic')
        this.source5 = document.getElementById('tile5Pic').src
        this.tile6 = document.getElementById('memoryTile6')
        this.tilePic6 = document.getElementById('tile6Pic')
        this.source6 = document.getElementById('tile6Pic').src
        this.match = []
        this.chosen1 = 0
        this.chosen2 = 0
        this.chosen3 = 0
        this.chosen4 = 0
        this.chosen5 = 0
        this.chosen6 = 0
        this.clickAmount = 0 /*once two clicks have occured the program will analyze whether the two images are the same*/
        this.countCorrect = 0   
        this.kowalaMatched = 0
        this.puppiesMatched = 0
        this.giraffeMatched = 0      
        this.text = document.createElement('p')         
        this.text.innerHTML = `Score: ${this.countCorrect}`        
        document.body.append(this.text)

        this.tile1Clicked = function(){
            if (this.chosen1 > 0 || this.giraffeMatched > 0)return

            /*reveals card selected */
            this.tile.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic.style.opacity = '1'
            
            /*pushes source of image selected to empty array */
            this.match.push(this.source)

            this.chosen1++
            /*increments click amount +1 then checks if if statement in checkMatch() is true */
            this.clickAmount++
            this.checkMatch()
        }
        this.tile2Clicked = function(){
            if (this.chosen2 > 0 || this.giraffeMatched > 0)return
            this.tile2.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic2.style.opacity = '1'
    
            this.match.push(this.source2)

            this.chosen2++
            this.clickAmount++
            this.checkMatch()
        }
        this.tile3Clicked = function(){
            if (this.chosen3 > 0 || this.kowalaMatched > 0)return
            this.tile3.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic3.style.opacity = '1'
    
            this.match.push(this.source3)
            
            this.chosen3++
            this.clickAmount++
            this.checkMatch()
        }
        this.tile4Clicked = function(){
            console.log('this is it')
            if (this.chosen4 > 0 || this.kowalaMatched > 0)return
            this.tile4.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic4.style.opacity = '1'
    
            this.match.push(this.source4)

            this.chosen4++
            this.clickAmount++
            this.checkMatch()
        }
        this.tile5Clicked = function(){
            if (this.chosen5 > 0 || this.puppiesMatched > 0)return
            this.tile5.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic5.style.opacity = '1'
    
            this.match.push(this.source5)

            this.chosen5++
            this.clickAmount++
            this.checkMatch()
        }
        this.tile6Clicked = function(){
            if (this.chosen6 > 0 || this.puppiesMatched > 0)return
            this.tile6.style.backgroundColor = 'rgba(0, 0, 0, 0)'
            this.tilePic6.style.opacity = '1'
    
            this.match.push(this.source6)

            this.chosen6++
            this.clickAmount++
            this.checkMatch()
        }
    }

    checkMatch(){
      if(this.clickAmount === 2){
        if(this.match[0] === this.match[1]){
            window.alert('nice job!')
            if(this.match[0] === this.source)this.chosen1 = 0, this.chosen2 = 0, this.giraffeMatched++
            if(this.match[0] === this.source3)this.chosen3 = 0, this.chosen4 = 0, this.kowalaMatched++
            if(this.match[0] === this.source5)this.chosen5 = 0, this.chosen6 = 0, this.puppiesMatched++
            this.clickAmount = 0;
            this.countCorrect++
            this.text.innerHTML = `Score: ${this.countCorrect}`

            this.match.splice(0, 2)
        }
        else if(this.match[0] !== this.match[1]){
            this.clickAmount = 0;
            this.chosen1 = 0;
            this.chosen2 = 0;
            this.chosen3 = 0;
            this.chosen4 = 0;
            this.chosen5 = 0;
            this.chosen6 = 0;
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
            if(this.match[0] === this.source5){
                console.log('this works')
                this.tile5.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic5.style.opacity = '0'
                this.tile6.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic6.style.opacity = '0'
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
            if(this.match[1] === this.source5){
                console.log('this works')
                this.tile5.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic5.style.opacity = '0'
                this.tile6.style.backgroundColor = 'rgba(116, 59, 59, 1)'
                this.tilePic6.style.opacity = '0'
                this.match.splice(0, 2)
            }
        }
      }
      if (this.countCorrect === 3){
        alert(`you've won!`)
        this.tile.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic.style.opacity = '0'
        this.tile2.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic2.style.opacity = '0'
        this.tile3.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic3.style.opacity = '0'
        this.tile4.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic4.style.opacity = '0'
        this.tile5.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic5.style.opacity = '0'
        this.tile6.style.backgroundColor = 'rgba(116, 59, 59, 1)'
        this.tilePic6.style.opacity = '0'
        this.giraffeMatched = 0;
        this.kowalaMatched = 0;
        this.puppiesMatched = 0;
        this.countCorrect = 0;
        this.text.innerHTML = `Score: ${this.countCorrect}`

      }
    }        

}





const memoryGame = new Memory