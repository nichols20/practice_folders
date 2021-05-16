/* PROBLEMS TO FIX: 1. can't show the total values without applying that value 
as an input. ex: 1 + 1 = 2 if i display two the next action would be 1+1+2|
2. If i select the minus button after i've added or vice versa the array will reduce
all the values again giving it a new value.  (It should be)ex: 1 - 1 + 2 = 2
(what happens) ex: 1 + 1 + 2 = 4  */

/* SOLUTION FOR 2. : from researching a way to detect button clicks inside a button
click function I was able to determine there is no way to do such a thing becuase 
clicking that next button will call the new function to perform. So what I did to
solve this issue was apply a counter so that whenever minus was clicked it'd add +1
that would then tell whatever number was selected to change over to a negative*/
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
        this.value = 0
        this.assignedNumbers = []
        this.minusClicked = 0
        /* defined this.input to prevent me from duplicating this code 
        multiple times in other functions I can now just call this object */
        this.input = document.getElementById('value')
        this.clear = document.getElementById('clear')
        this.input.textContent = '0'
    }

    /*Majority of these functions below opperate for the individual button inputs to apply to the overall number 1,2,3...
    ///I'd like to find a way to simplify this function so I don't have to make one for each number on a calculator*/



    selectedOne(){
        if (this.minusClicked > 0){
            this.input.textContent = '-1'
            this.minusClicked = 0;
            return
        }
        this.input.textContent= '1';
    }
    selectedTwo(){
        if (this.minusClicked > 0){
            this.input.textContent = '-2'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '2'
    }
    selectedThree(){
        if (this.minusClicked > 0){
            this.input.textcontent = '-3'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '3'
    }
    selectedFour(){
        if (this.minusClicked > 0){

            this.input.textContent = '-4'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '4'
    }
    selectedFive(){
        if (this.minusClicked > 0){

            this.input.textContent = '-5'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '5'
    }
    selectedSix(){
        if (this.minusClicked > 0){

            this.input.textContent = '-6'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '6'
    }
    selectedSeven(){
        if (this.minusClicked > 0){

            this.input.textContent = '-7'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '7'
    }
    selectedEight(){
        if (this.minusClicked > 0){

            this.input.textContent = '-8'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '8'
    }
    selectedNine(){
        if (this.minusClicked > 0){

            this.input.textContent = '-9'
            this.minusClicked = 0;
            return
        }
        this.input.textContent = '9'
    }
    selectedZero(){
        this.input.textContent = '0'
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

    selectedEquals(){
        if (this.assignedNumbers.length >= 0){
            let trueNumber = parseFloat(this.input.textContent)

            this.assignedNumbers.push(trueNumber)

            this.value += this.assignedNumbers[0]
            this.assignedNumbers.splice(0, this.assignedNumbers.length)
        }
        this.input.textContent = this.value
        console.log(this.value)
        this.value = 0
    }

    selectedMinus(){

        if(this.input.textContent == ''){
            return
        }        
        
        if (this.assignedNumbers.length >= 0){
            let trueNumber = parseFloat(this.input.textContent)

            this.assignedNumbers.push(trueNumber)

            this.value += this.assignedNumbers[0]
            console.log(this.value)
            this.assignedNumbers.splice(0, this.assignedNumbers.length)
        }
        

        if (this.assignedNumbers.length > 0){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }
        this.minusClicked++

    }

    selectedPlus(){
        if(this.input.textContent == ''){
            return
        }

        if (this.assignedNumbers.length >= 0){
            /* the let object parses the input value the user inputs from a string to array*/
            let trueNumber = parseFloat(this.input.textContent)
            this.assignedNumbers.push(trueNumber)
           
            this.value += this.assignedNumbers[0]
            console.log(this.value)

            this.assignedNumbers.splice(0, this.assignedNumbers.length)
        
        }

        if (this.assignedNumbers.length > 0){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

    }

}

const calculator = new Calculator

