

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
        this.input = document.getElementById('value') /* defined this.input to prevent
        me from duplicating this code multiple times in other functions I can now just
        call this object */
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
    selectedPlus(){
        /* the let object parses the input value the user inputs from a string to array*/
        if(this.input.textContent == ''){
            console.log('empty string')
            return console.log('nope')
        }


        if(this.assignedNumbers.length >= 0){
            let trueNumber = parseFloat(this.input.textContent)
            this.assignedNumbers.push(trueNumber)
        }
        /* Added this if statement that will reduce all items in the array to return one single sum*/
        if (this.assignedNumbers.length > 1){
            const value = this.assignedNumbers.reduce((a,b) => a + b)
            console.log(value)
        }

        this.input.textContent = ''
    }
}

const calculator = new Calculator

