const mainBalance=document.getElementById('main-balance').innerText;
 const convertedMainBalance=parseFloat(mainBalance);
const amount=document.getElementById('amount').value;
const convertedAmount=parseInt(amount);
console.log(convertedAmount)

 const total=convertedMainBalance -amount;
 document.getElementById('main-balance').innerText=total;
 
 document.getElementById('pin-btn').addEventListener('click',function(){
    const pinValue=document.getElementById('pin').value;
    const pinConverted=parseInt(pinValue);
    console.log(pinConverted)
   

    if(pinConverted===1234){
      window.location.href="main.html"
    }
})