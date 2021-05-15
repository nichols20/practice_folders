

class Calculator {
    constructor(){
        this.one = document.getElementById('1')
        this.two = document.getElementById('2')
        this.three = document.getElementById('3')
        this.four = document.getElementById('4')
        this.five = document.getElementById('5')
        this.six = document.getElementById('6')
        this.seven = document.getElementById('7')
        this.eight = document.getElementById('8')
        this.nine = document.getElementById('9')
        this.zero = document.getElementById('0')
        this.plus = '+'
        this.assignedNumbers = []
        /* defined this.input to prevent me from duplicating this code 
        multiple times in other functions I can now just call this object */
        this.input = document.getElementById('value')
        this.clear = document.getElementById('clear')
    }

    /*Majority of these functions below opperate for the individual button inputs to apply to the overall number 1,2,3...
    ///I'd like to find a way to simplify this function so I don't have to make one for each number on a calculator*/

    selectedOne(){
        const apply = 1;
        this.input.append(apply)
        console.log(this.one.textContent)
    }
    selectedTwo(){
        const apply = 2;
        this.input.append(apply)
        console.log(this.two.textContent)
    }
    selectedThree(){
        const apply = 3;
        this.input.append(apply)
        console.log(this.three.textContent)
    }
    selectedFour(){
        const apply = 4;
        this.input.append(apply)
        console.log(this.four.textContent)
    }
    selectedFive(){
        const apply = 5;
        this.input.append(apply)
        console.log(this.five.textContent)
    }
    selectedSix(){
        const apply = 6;
        this.input.append(apply)
        console.log(this.six.textContent)
    }
    selectedSeven(){
        const apply = 7;
        this.input.append(apply)
        console.log(this.seven.textContent)
    }
    selectedEight(){
        const apply = 8;
        this.input.append(apply)
        console.log(this.eight.textContent)
    }
    selectedNine(){
        const apply = 9;
        this.input.append(apply)
        console.log(this.nine.textContent)
    }
    selectedZero(){
        const apply = 0;
        this.input.append(apply)
        console.log(this.zero.textContent)
    }

    selectedClear(){
        /* created this clear method to erase the values imputed by the user starting 
        back at 0 or an empty input array. To accomplish this I spliced the 
        this.assignedNumbers array starting from the first index all the way to the 
        entire length of the called array*/
        this.assignedNumbers.splice(0, this.assignedNumbers.length)
    

        /* I had to add this if statement in the clear method on top of the plus method
        so that the button appears the way it should when there's no values in the array,
        I need to find away to make this if statement global throughout the entire code
        so I don't have to retype it multiple times*/
        if (this.assignedNumbers.length > 0){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

    }

    selectedPlus(){
        if(this.input.textContent == ''){
            return
        }


        if(this.assignedNumbers.length >= 0){
            /* the let object parses the input value the user inputs from a string to array*/
            let trueNumber = parseFloat(this.input.textContent)
            this.assignedNumbers.push(trueNumber)
        }
        /* Added this if statement that will reduce all items in the array to return one single sum*/
        if (this.assignedNumbers.length > 1){
            const value = this.assignedNumbers.reduce((a,b) => a + b)
            console.log(value)
        }

        if (this.assignedNumbers.length > 0){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.input.textContent = ''
    }

}

const calculator = new Calculator

