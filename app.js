const amountElement = document.querySelector(".firstcurrency");
const firstSelect = document.querySelector(".first-select");
const secondSelect = document.querySelector(".second-select");
const moneyTypeOne = document.querySelectorAll(".money-type-1");
const moneyTypeSecond = document.querySelectorAll(".money-type-2");
const currency = new Currency("RUB","EUR");
const ui = new UI(firstSelect, secondSelect)
EventListener();

function EventListener(){
    amountElement.addEventListener("input",exchangeCurrency)
    firstSelect.addEventListener("change",selectFirstMoney)
    secondSelect.addEventListener("change",selectSecondMoney)
    firstSelect.addEventListener("click",selectFirstMoneyType)
    secondSelect.addEventListener("click",selectSecondMoneyType)
}
function selectFirstMoneyType(e){
  selectFirstMoney(e.target.textContent)
}
function selectSecondMoneyType(e){
  selectSecondMoney(e.target.textContent)
}

function selectFirstMoney(target){
   currency.changeFirstCurrency(target)

   ui.changeFirst();
   ui.changeFirstOutput(target)

}

function selectSecondMoney(target){
    currency.changeSecondCurrency(target)
    ui.changeSecond();
    ui.changeSecondOutput(target);

    
 }
function exchangeCurrency(){

    currency.changeAmount(amountElement.value)

     currency.exchange()
     .then(result => {
        ui.displayResult(result)
     })
     .catch(err => console.error(err))

     currency.parity()
     .then(result => {
      ui.displayParity(result)
     })
     .catch(err => {
      console.error(err)
    })

    currency.parityTwo()
     .then(result => {
      ui.displayParityTwo(result)
     })
     .catch(err => {
      console.error(err)
    })


    
}







// Select one btn
moneyTypeOne.forEach((btn)=>{
    btn.addEventListener('click', () => {
        removeClassesOne();
        addClassesOne(btn);
      });
})
function removeClassesOne() {
    moneyTypeOne.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  
  function addClassesOne(btn) {
    btn.classList.add("active");
  }
moneyTypeSecond.forEach((btn)=>{
    btn.addEventListener('click', () => {
        removeClassesSecond();
        addClassesSecond(btn);
      });
})
function removeClassesSecond() {
    moneyTypeSecond.forEach((btn) => {
      btn.classList.remove("active");
    });
  }
  
  function addClassesSecond(btn) {
    btn.classList.add("active");
  }