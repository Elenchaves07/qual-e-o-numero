
let reg = alert('Primeiro você deve sortear um número');
let numero = document.getElementById('numero');
let lista = document.querySelector('div#op');
let final = document.getElementById('final');
let btn = document.getElementById('btn');
let valores = []
let Sortear = 0;


/* Sortear o número que deverá ser encontrado*/ 
  function sort(){

    Sortear = Math.floor(Math.random() * 150);
    

    alert('O número já foi sorteado.');

    alert('Você deverá adivinhar qual foi o número sorteado. Ele estará entre 0 e 150. Você terá 10 tentativas. ');
    
}


/* Adicionar os números indicados pelo jogador*/

  function number(){  
    
   

    if(numero.value == " "){
      alert('Você deve adicionar um número.');

      document.removeChild('option');

     
    }

    if(Sortear == " "){
      alert('Você deve sortear um número.');
      lista.removeChild('option');
 
    } 
    
    

    if(Sortear == numero.value){
        document.getElementById('final').innerHTML = 'Você acertou! Parabéns!';

    }else {
        valores.push(Number(numero.value))
        let  item = document.createElement('option');
        item.text = `Não é o número ${numero.value}`;
        lista.appendChild(item);
        
    }

    //Fedback se o número é maior ou menor.

      if(Sortear > numero.value){
        document.querySelector('#final'). innerHTML = 'O número é maior';
      

      }else if ( Sortear < numero.value){
        document.querySelector('#final'). innerHTML = 'O número é menor';
      }

      numero.value = "";
  
      //Número limite de tentativas. 

    if(valores.length == 10){
        alert( 'Você perdeu. Tente novamente.');
    }

    
    
    }

    

    
      

    
    
    



    
    

    

  


    
    



    

