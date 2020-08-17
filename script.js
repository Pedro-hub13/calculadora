document.addEventListener('DOMContentLoaded', () =>{

    const button=document.getElementById('submit');

    function calcular() {

        const num1=Number(document.getElementById('num-1').value);
        const num2=Number(document.getElementById('num-2').value);

        const operador=document.getElementById('select').value;
        const resultado=document.getElementById('resultado');
        
        let res=0;

        if(operador==='soma'){
                res= num1+num2;

        } else if (operador==='subtracao'){
                res=num1-num2;
        } else if (operador==='divisao'){
                res=num1/num2;
        } else if (operador==='multiplicacao'){
                res=num1*num2;
        }console.log(res);

        resultado.innerHTML=res;

    }
    
    button.addEventListener('click', calcular);
    
});