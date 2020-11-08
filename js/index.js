window.onload = hide;

let sumCash = 0;

function hide(){
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatTS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
}

function os(){
    document.getElementById("alkatOS").style.display="inline";
    document.getElementById("alkatTS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
}

function ts(){
    document.getElementById("alkatTS").style.display="inline";
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatAÜ").style.display="none";
}

function aü(){
    document.getElementById("alkatAÜ").style.display="inline";
    document.getElementById("alkatOS").style.display="none";
    document.getElementById("alkatTS").style.display="none";
}

function sum(cb){
    let amountInput = document.querySelector("input[name='amount-input']").value;
    let showAmount = document.querySelector("span.show-amount");
    if (cb.checked == true){
        sumCash += Number(amountInput);
    }
    else{
        sumCash -= Number(amountInput);
    }
    showAmount.innerHTML = sumCash;
}
