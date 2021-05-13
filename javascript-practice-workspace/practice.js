

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
        this.zero = document.getElementById('10')
    }

    selectedOne(){
        console.log(this.one.textContent)
    }
    selectedTwo(){
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
}

const calculator = new Calculator