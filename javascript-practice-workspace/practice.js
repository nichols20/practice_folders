

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
    }

    /*Majority of these functions below opperate for the individual button inputs to apply to the overall number 1,2,3...
    ///I'd like to find a way to simplify this function so I don't have to make one for each number on a calculator*/

    selectedOne(){
        const input = document.getElementById('value')
        const apply = document.createTextNode(this.one.textContent)
        input.append(apply)
        console.log(this.one.textContent)
    }
    selectedTwo(){
        const input = document.getElementById('value')
        const apply = document.createTextNode(this.two.textContent)
        input.append(apply)
        console.log(this.two.textContent)
    }
    selectedThree(){
        console.log(this.three.textContent)
    }
    selectedFour(){
        console.log(this.four.textContent)
    }
    selectedFive(){
        console.log(this.five.textContent)
    }
    selectedSix(){
        console.log(this.six.textContent)
    }
    selectedSeven(){
        console.log(this.seven.textContent)
    }
    selectedEight(){
        console.log(this.eight.textContent)
    }
    selectedNine(){
        console.log(this.nine.textContent)
    }
    selectedZero(){
        console.log(this.zero.textContent)
    }
    selectedPlus(){
        const input = document.getElementById('value')
        /* the let object parses the input value the user inputs from a string to array*/
        let trueNumber = parseFloat(input.textContent)
        this.assignedNumbers.push(trueNumber)
        input.textContent = ''

        /* Added this if statement that will reduce all items in the array to return one single sum*/
        if (this.assignedNumbers.length > 1){
            const value = this.assignedNumbers.reduce((a,b) => a + b)
            console.log(value)
        }
        
    }
}

const calculator = new Calculator

