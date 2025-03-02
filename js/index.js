// function removeFocus() {
//     document.getElementById("myInput").blur();
// }



const button=document.getElementById('button-login').addEventListener('click',function(){
    const inputValue= document.getElementById('input-value').value;
const convertedInput=parseInt(inputValue);
    // console.log('hellloooooooooo')
    if(convertedInput===1234){
        window.location.href="main.html"
    }
    else{
        alert('The pin was wrong')
    }
})
