const promotionBox = document.getElementById("promotion-box");

setInterval(function(){
    promotionBox.style.display="block"
   
},10000)
const cancel = document.querySelector('#promotion-box button');
cancel.addEventListener("click",()=>{
    promotionBox.style.display="none";
})


