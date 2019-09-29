window.onload = function (){
    var msgResult = document.getElementById("msgResult");
        
        var inputBox = document.getElementById("number");
        
        
        
    var is_prime = false;
    var btn = document.getElementById("chkBtn");
    btn.addEventListener("click", checkPrime);
    
    function checkPrime(){
        var number = inputBox.value;

        if(isNaN(number) || number ==""){
            msgResult.innerHTML = "Please enter a number";
            inputBox.value = "";
            inputBox.focus();
        }
        else{
            let i=2;
            while(i < number){

                let c = number % i;
                if(c === 0){
                     is_prime = false;
                    break;
                }
                is_prime = true;
                i++;
            }
        
        
        
            (is_prime) ?  msgResult.innerHTML =`${number} is prime` : msgResult.innerHTML =`${number} is not prime : it's divisible by ${i}`;
        }
    }
    
/*function reverseDigits(){
    var x = number.value;
    
    while ( x !=0){
        let y = x % 10;
    }
    
}*/
    
};
