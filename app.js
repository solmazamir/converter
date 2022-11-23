const inputFrom = document.querySelector(".fromAmount");
const inputTo = document.querySelector(".toAmount");
const form = document.querySelector(".form");
const rate1 = document.querySelector(".rate1");
const rate2 = document.querySelector(".rate2");
const currency = {
  mask: Number,
  thousandsSeparator: " ",
  radix: ".",
  scale: 4,
  max: Number.MAX_VALUE,
  padFractionalZeros: false,
  normalizeZeros: true,
  mapToRadix: [","],

};
inputFrom.addEventListener('input', () => {
  if (inputFrom.value[1] == "." || inputFrom.value[1]==",") {}
  else if(inputFrom.value[0]==0 && inputFrom.value.length>1){
    inputFrom.value =inputFrom.value[1];
  }
  
if(inputFrom.value[0].includes(".") || inputFrom.value[0].includes(",")) {
  inputFrom.value = inputFrom.value[0].replace(".","").replace(",","");

}
});
inputTo.addEventListener('input', () => {
  if (inputTo.value[1] == "." || inputTo.value[1]==",") {}
  else if(inputTo.value[0]==0 && inputTo.value.length>1){
    inputTo.value =inputTo.value[1];
  }
  if(inputTo.value[0].includes(".") || inputTo.value[0].includes(",")) {
    inputTo.value = inputTo.value[0].replace(".","").replace(",","");
  
  }
});
const maskFrom = IMask(inputFrom, currency);
const maskTo = IMask(inputTo, currency);
async function getData(flag = true) {
  const myForm = new FormData(form);
  const base = myForm.get("baseoptions");
  const symbol = myForm.get("symbolsoptions");
  let currencyRate;
  if (base !== symbol) {
    const url = new URL("/lates", "https://api.exchangerate.host");
    url.searchParams.set("base", base);
    url.searchParams.set("symbols", symbol);
    url.searchParams.set("places", 4);

    const data = await fetch(url)
      .then((r) => r.json())
      .catch((e) => message());
    currencyRate = await data.rates[symbol];
  } else {
    currencyRate = 1;
  }
  rate1.textContent = `1 ${base} = ${currencyRate.toFixed(4)} ${symbol}`;
  rate2.textContent = `1 ${symbol} = ${(1 / currencyRate).toFixed(4)} ${base}`;
  if (flag) {
    maskTo.value =(
      Math.round(maskFrom.unmaskedValue * currencyRate * 10000) / 10000
    ).toString();   
  } else {
    maskFrom.value = (
      Math.round(maskTo.unmaskedValue * (1 / currencyRate) * 10000) / 10000
    ).toString(); 
  }
  console.log(maskTo._value)
}
window.addEventListener("load", (e) => getData());
window.addEventListener("online", () => (alert.style.display = "none")
);
form.addEventListener("input", (e) => {
  e.target.name === "toAmount" ? getData(false) : getData();
});
let a=1;
let ul = document.querySelector(".ul");
let ulRes = document.querySelector(".ulRes");
let img_list = document.querySelector(".icon-list");
img_list.addEventListener("click", () => {
  if (a == 1) {
    ul.style.display = "flex";
    return (a = 0);
  } else {
    ul.style.display = "none";
    return (a = 1);
  }
});
let body =document.querySelector("body");
if(body.style.minWidth == "800px"){
  ulRes.style.display = "none";
}

