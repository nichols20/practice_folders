

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
        this.assignedNumbers.push(input.textContent)
        console.log(this.assignedNumbers)
        console.log(input.textContent)
        input.textContent = ''
        if (this.assignedNumbers.length > 1){
            console.log(this.assignedNumbers)
        }
    }
}

const calculator = new Calculator