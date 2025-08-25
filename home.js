const validPin = 1234
document.getElementById('add-money-button').
addEventListener('click', function(e){
 e.preventDefault()
  const bank = document.getElementById('bank').value
  const accountNUmber = document.getElementById('account-number').value
  const addAmount = parseInt(document.getElementById('add-ammount').value)
  const pinNumber = document.getElementById('pin-number').value
  const availableBalance = parseInt(document.getElementById("available-Balance").innerText)
   if(accountNUmber.length <11){
    alert('PLEASE PROVIDE VALID ACCOUNT NUMBER')
    return;
   }
   if(pinNumber != validPin){
    alert('PLEASE PROVIDE A VALID PIN NUMBER')
    return;
   }
  const newAvailableBalance = addAmount + availableBalance
  document.getElementById('available-Balance').innerText = newAvailableBalance
})
