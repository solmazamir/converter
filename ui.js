class UI{
    constructor(firstSelect, secondSelect){
      this.firstSelect = firstSelect;
      this.secondSelect = secondSelect;

      this.outputResult = document.querySelector(".output-result");
      this.outputFirst = document.querySelectorAll(".output-first");
      this.outputSecond = document.querySelectorAll(".output-second");
      this.parity = document.querySelector(".parity");
      this.parityTwo = document.querySelector(".parity-two")


    }
    changeFirst(){
        this.outputFirst.textContent = this.firstSelect.value
    }
    changeSecond(){
        this.outputSecond.textContent = this.secondSelect.value
    }
  
    displayResult(result){
        this.outputResult.value = result;
    }
    displayParity(result){
        this.parity.textContent = result
    }
    displayParityTwo(result){
        this.parityTwo.textContent = result
    }

    // Outputs
    changeFirstOutput(target){
        this.outputFirst[0].textContent = target
       this.outputFirst[1].textContent = target;
    }
    changeSecondOutput(target){
        this.outputSecond[0].textContent = target;
        this.outputSecond[1].textContent = target;
    }
}