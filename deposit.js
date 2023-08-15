let sum = 0;

document.getElementById('deposit-btn').addEventListener('click', function(){
    // step 1======
    const depositFld = document.getElementById('deposit-value');
    const depositValue = parseInt(depositFld.value);
    const depositAmt = document.getElementById('deposit-amt')
    const innerText = parseInt(depositAmt.innerText)

const totaldeposit = innerText + depositValue;
    // step 2======
const BalanceElement = document.getElementById('balance-amt')
const BalanceAmt = parseInt(BalanceElement.innerText);
const totalBalance = BalanceAmt + depositValue;
if(isNaN(depositValue)){
    alert('invalid amount')
    return
}
BalanceElement.innerText = totalBalance; 
depositAmt.innerText = totaldeposit;
 
depositFld.value = '';
})