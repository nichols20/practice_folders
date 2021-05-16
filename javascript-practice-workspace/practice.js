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
        this.minusClick = 0;
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

