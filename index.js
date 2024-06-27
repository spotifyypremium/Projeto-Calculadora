function calculator(){
    let num1 = Number(document.getElementById('num1').value);

    let num2 = Number(document.getElementById('num2').value);

    let total = 0;


    if(document.getElementById('box1').checked){
        total = num1+num2;
    }
    if(document.getElementById('box2').checked){
        total = num1-num2;
    }
    if(document.getElementById('box3').checked){
        total = num1*num2;
    }
    if(document.getElementById('box4').checked){
        total = num1/num2;
    }
    if(document.getElementById('box5').checked){
        total = Math.sqrt(num1);
    }
    if(document.getElementById('box6').checked){
        total = num1**num2;
    }

    document.getElementById('result').innerHTML= 'Result: '+ String(total.toFixed(2));
}