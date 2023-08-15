document.getElementById('withdraw-btn').addEventListener('click', function(){
    // step 1: set structure
   const withdrawFld = document.getElementById('withdraw-value');
   const withdrawValue = parseFloat(withdrawFld.value);

    const getWithdraw = document.getElementById('withdraw-amt');
    const withdrawAmt = parseFloat(getWithdraw.innerText);
    console.log(withdrawValue)

   
//  step 2: add the value at withdraw card
const totalWithdraw = withdrawAmt + withdrawValue;


// step 3: minus from balance
const getBalance = document.getElementById('balance-amt') ;
const preBalance = parseFloat(getBalance.innerText);
    // clear field 
    withdrawFld.value = '';

 if(withdrawValue>preBalance){
   alert('you have not enough money')
   return;
}
if(isNaN(withdrawValue)){
    alert('invalid amount')
    return
}
getWithdraw.innerText = totalWithdraw;
const totalBalance = preBalance - withdrawValue;
getBalance.innerText = totalBalance;


})