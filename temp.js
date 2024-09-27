const result = document.getElementById("result");
const input = document.getElementById("input");
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const submit = document.getElementById("submit");

submit.onclick=function(){
    let temp = input.value;
    if(temp == null){
        result.textContent = `Please enter the temperature`;
    }
    else{
        if(check1.checked){
            res=(temp*1.8)+32;
            result.textContent = `${res.toFixed(1)} °F`; 
        }   
        else if(check2.checked){
            res=(temp-32)/(1.8);
            result.textContent = `${res.toFixed(1)} °C`;
        }
        else{
            result.textContent = `Please select one option`;
        }
    }
} 