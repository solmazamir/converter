class Currency {
    constructor(firstCurrency, secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }
    
    exchange(){
        if(this.firstCurrency !== this.secondCurrency){
        return new Promise((resolve, reject)=>{
            fetch(this.url + this.firstCurrency)
            .then(resp => resp.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                const amount2 = Number(this.amount)
                const total = parity * amount2
                resolve(total)
            })
            .catch(err => reject(err))
        });
    }
    else{
     alert("Müxtəlif pul növlərini daxil edin!")
    }
    }

    parity(){
        return new Promise((resolve, reject)=>{
            fetch(this.url + this.firstCurrency)
            .then(resp => resp.json())
            .then(data => {
                const parity = data.rates[this.secondCurrency];
                resolve(parity)
            })
            .catch(err => reject(err))
        });
    }

    parityTwo(){
         return new Promise((resolve, reject)=>{
             fetch(this.url + this.secondCurrency)
             .then(resp => resp.json())
             .then(data => {
                 const parityTwo = data.rates[this.firstCurrency];
                 resolve(parityTwo)
             })
             .catch(err => reject(err))
         });
     }

    changeAmount(amount){
        this.amount = amount;
    }

    changeFirstCurrency(newFirstCurrency){
        console.log(newFirstCurrency)
        this.firstCurrency = newFirstCurrency;
        
    }
    
    changeSecondCurrency(newSecondCurrency){
        console.log(newSecondCurrency)
        this.secondCurrency = newSecondCurrency;
    }
}