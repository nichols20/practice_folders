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
        /* defined this.input to prevent me from duplicating this code 
        multiple times in other functions I can now just call this object */
        this.input = document.getElementById('value');
        this.clear = document.getElementById('clear');
        this.input.textContent = '0';
        this.value = 0;
        this.click = 0;
        this.dotClick = 0;
        this.minusClicked = 0;
        this.percentClick = 0;
        this.multiplyClick = 0;
        this.divisionClick = 0;

    }

    /*Majority of these functions below opperate for the individual button inputs to apply to the overall number 1,2,3...
    ///I'd like to find a way to simplify this function so I don't have to make one for each number on a calculator*/



    selectedOne(){
        if (this.minusClicked > 0){
            this.input.textContent = '-1'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 1
        this.input.append(apply)
        this.click++
    }
    selectedTwo(){
        if (this.minusClicked > 0){
            this.input.textContent = '-2'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 2
        this.input.append(apply)
        this.click++
    }
    selectedThree(){
        if (this.minusClicked > 0){
            this.input.textContent = '-3'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 3
        this.input.append(apply)
        this.click++
    }
    selectedFour(){
        if (this.minusClicked > 0){
            this.input.textContent = '-4'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 4
        this.input.append(apply)
        this.click++
    }
    selectedFive(){
        if (this.minusClicked > 0){
            this.input.textContent = '-5'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 5
        this.input.append(apply)
        this.click++
    }
    selectedSix(){
        if (this.minusClicked > 0){
            this.input.textContent = '-6'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 6
        this.input.append(apply)
        this.click++
    }
    selectedSeven(){
        if (this.minusClicked > 0){
            this.input.textContent = '-7'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 7
        this.input.append(apply)
        this.click++
    }
    selectedEight(){
        if (this.minusClicked > 0){
            this.input.textContent = '-8'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 8
        this.input.append(apply)
        this.click++
    }
    selectedNine(){
        if (this.minusClicked > 0){
            this.input.textContent = '-9'
            this.click++
            this.minusClicked = 0;
            return
        }
        if(this.click === 0)this.input.textContent= ''

        let apply = 9
        this.input.append(apply)
        this.click++
    }
    selectedZero(){
        if(this.click === 0)this.input.textContent= ''

        let apply = 0
        this.input.append(apply)
    }

    selectedDot(){
        if(this.dotClick > 0){
            return
        }
        let apply = '.'
        this.input.append(apply)
        this.dotClick ++
    }

    selectedPercent(){
        if(this.multiplyClick > 0){
         let trueNumber = parseFloat(this.input.textContent)
         trueNumber = trueNumber / 100;
         this.input.textContent = trueNumber
         return
        }

        if(this.divisionClick > 0){
         let trueNumber = parseFloat(this.input.textContent)
         trueNumber = trueNumber / 100;
         this.input.textContent = trueNumber
         return
        }

        let trueNumber = parseFloat(this.input.textContent)
        trueNumber = trueNumber / 100;
        trueNumber = this.value * trueNumber
        this.input.textContent = trueNumber
        this.value += trueNumber

        console.log(this.value)
        this.percentClick++ 
    }

    selectedClear(){
        this.value = 0
        this.input.textContent = '0'

        /* I had to add this if statement in the clear method on top of the plus method
        so that the button appears the way it should when there's no values in the array,
        I need to find away to make this if statement global throughout the entire code
        so I don't have to retype it multiple times*/
        if (this.input.textContent !== '0'){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.click = 0;
        this.dotClick = 0

    }

    selectedEquals(){
        if(this.percentClick > 0){
            this.input.textContent = this.value
            console.log(this.value)
            this.value = 0
            this.click = 0;
            this.dotClick = 0;
            this.percentClick = 0;
            return
        }

        if(this.multiplyClick > 0){
            this.value = this.value * this.input.textContent
            console.log(this.value)
            this.input.textContent = this.value
            this.value = 0;
            this.click = 0;
            this.dotClick = 0;
            this.multiplyClick = 0;
            return
        }

        if(this.divisionClick > 0){
            this.value = this.value / this.input.textContent
            console.log(this.value)
            this.input.textContent = this.value
            this.value = 0;
            this.click = 0;
            this.dotClick = 0;
            this.multiplyClick = 0;
            return
        }

        let trueNumber = parseFloat(this.input.textContent)
        this.value += trueNumber
        this.input.textContent = this.value
        console.log(this.value)
        
        
        this.value = 0
        this.click = 0;
        this.dotClick = 0;
        this.percentClick = 0;
    }

    selectedMinus(){

        if(this.input.textContent == ''){
            return
        }        
            
        let trueNumber = parseFloat(this.input.textContent)
        this.value += trueNumber;
        console.log(this.value)
        
        if (this.input.textContent !== ''){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.minusClicked++
        this.click = 0;
        this.dotClick = 0;
    }

    selectedPlus(){
        if(this.input.textContent == ''){
            return
        }
            /* the let object parses the input value the user inputs from a string to array*/
            let trueNumber = parseFloat(this.input.textContent)
            this.value += trueNumber
            console.log(this.value)

        if (this.input.textContent !== ''){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.click = 0;
        this.dotClick = 0;

    }

    selectedMultiply(){
        let trueNumber = parseFloat(this.input.textContent)
        this.value += trueNumber

        console.log(this.value)

        if (this.input.textContent !== ''){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.multiplyClick++ 

        this.click = 0;
        this.dotClick = 0;
    }

    selectedDivision(){
        if(this.multiplyClick > 0){
         let trueNumber = parseFloat(this.input.textContent)
         this.value = this.value * trueNumber
         this.divisionClick++
         this.click = 0;
         this.dotClick = 0;
         this.multiplyClick = 0;
         return
        }
        let trueNumber = parseFloat(this.input.textContent)
        this.value += trueNumber

        console.log(this.value)

        if (this.input.textContent !== ''){
            this.clear.textContent = 'C'
        }
        else{
            this.clear.textContent = 'AC'
        }

        this.divisionClick++ 

        this.click = 0;
        this.dotClick = 0;
    }

}

const calculator = new Calculator

/* HTML CODE
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" />
    <link rel="stylesheet" href="./styles.css" />
    <title>Document</title>
  </head>
  <body>
    <div id="calculator-container">
      <div id="value-container">
        <p id="value"></p>
      </div>
      <div class="buttonContainer">
        <button id="one" onclick="calculator.selectedOne()">1</button>
        <button id="two" onclick="calculator.selectedTwo()">2</button>
        <button id="three" onclick="calculator.selectedThree()">3</button>
        <button id="four" onclick="calculator.selectedFour()">4</button>
        <button id="five" onclick="calculator.selectedFive()">5</button>
        <button id="six" onclick="calculator.selectedSix()">6</button>
        <button id="seven" onclick="calculator.selectedSeven()">7</button>
        <button id="eight" onclick="calculator.selectedEight()">8</button>
        <button id="nine" onclick="calculator.selectedNine()">9</button>
        <button id="zero" onclick="calculator.selectedZero()">0</button>
        <button
          id="clear"
          class="specialBtn"
          onclick="calculator.selectedClear()"
        >
          AC
        </button>
        <button id="decimal" onclick="calculator.selectedDot()">.</button>
        <button
          id="percent"
          class="specialBtn"
          onclick="calculator.selectedPercent()"
        >
          %
        </button>
        <button
          id="plus"
          class="calculatorOperations"
          onclick="calculator.selectedPlus()"
        >
          +
        </button>
        <button
          id="minus"
          class="calculatorOperations"
          onclick="calculator.selectedMinus()"
        >
          -
        </button>
        <button
          id="equals"
          class="calculatorOperations"
          onclick="calculator.selectedEquals()"
        >
          =
        </button>
        <button
          id="times"
          class="calculatorOperations"
          onclick="calculator.selectedMultiply()"
        >
          x
        </button>
        <button
          id="divide"
          class="calculatorOperations"
          onclick="calculator.selectedDivision()"
        >
          /
        </button>
      </div>
    </div>
    <script src="./practice.js"></script>
  </body>
</html>
*/

/* CSS CODE
#value {
    margin: 0;
    margin-top: 1rem;
  }
  
  #one {
    grid-area: one;
  }
  
  #two {
    grid-area: two;
  }
  
  #three {
    grid-area: three;
  }
  
  #four {
    grid-area: four;
  }
  
  #five {
    grid-area: five;
  }
  
  #six {
    grid-area: six;
  }
  
  #seven {
    grid-area: seven;
  }
  
  #eight {
    grid-area: eight;
  }
  
  #nine {
    grid-area: nine;
  }
  
  #zero {
    grid-area: zero;
  }
  
  #clear {
    grid-area: clear;
  }
  
  #negative {
    grid-area: negative;
  }
  
  #percent {
    grid-area: percent;
  }
  
  #divide {
    grid-area: divide;
  }
  
  #times {
    grid-area: times;
  }
  
  #minus {
    grid-area: minus;
  }
  
  #plus {
    grid-area: plus;
  }
  
  #equals {
    grid-area: equals;
  }
  
  #decimal {
    grid-area: decimal;
  }
  
  button {
    border-radius: 30px;
    border: none;
    font-size: 1.3rem;
  }
  
  .calculatorOperations {
    background-color: orange;
  }
  
  .specialBtn {
    background-color: grey;
  }
  
  .buttonContainer {
    display: grid;
    grid-template-rows: repeat(5, 100px);
    grid-template-columns: repeat(4, 50px);
    grid-template-areas:
      "clear negative percent divide"
      "seven eight nine times"
      "four five six minus"
      "one two three plus"
      "zero zero decimal equals";
    grid-gap: 1rem;
  }
  
  #calculator-container {
    background-color: black;
    height: 900px;
    width: 300px;
    border: none;
    border-radius: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  #value-container {
    border-radius: inherit;
    background-color: rgb(57, 57, 59);
    width: 100%;
    height: 80px;
    font-size: 2.5rem;
    text-align: center;
    padding: 0;
  }
  */