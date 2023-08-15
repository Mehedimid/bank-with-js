
const button = document.getElementById('submit')
button.addEventListener('click', function(event){
  const getEm = document.getElementById('email-id')
  const getEV = getEm.value;

  const getpw = document.getElementById('pass-id')
  const getpv = getpw.value;
  console.log(getEV, getpv)

  if(getEV === 'x@g.com' && getpv === 'secret'){
    location.href = 'http://127.0.0.1:5500/deposit.html';
  }else{
    alert('invalid user or password')
  }
  
  getEm.value = ''
  getpw.value = ''
})