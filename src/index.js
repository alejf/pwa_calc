import _ from 'lodash';
import './calculadora.css';

var inicio=0;

if (navigator.serviceWorker.controller) {
    console.log('Service worker registrado y funcionando.')
  } else {
    navigator.serviceWorker.register('service-worker.js', {
      scope: './'
    }).then(function(reg) {
      console.log('Service worker ha sido registrado para el scope:'+ reg.scope);
    });
  }


function boton(valor){
    var longtext = document.getElementById("display");
    console.log (longtext);
    longtext.addEventListener('input',maximalongitud(longtext));
    
    
   if (valor=='ac'){
    document.getElementById('display').innerHTML=  inicio;
   } else{
        var resultado = getResultado();
        if (resultado!='0' || isNaN(valor)) setResultado(resultado + valor);
        else setResultado(valor);
    }
    

}

window.boton=boton;

function maximalongitud(longtext){
    if(longtext.innerHTML.length>8){
        longtext.style.cssText='font-size:26px;' ;

    }if (longtext.innerHTML.length>14){
        longtext.style.cssText='font-size:16px;' ;
        
    } else {
        console.log(longtext.innerHTML.length);
    }  
}

window.maximalongitud=maximalongitud;

function setResultado(valor) {
    document.getElementById('display').innerHTML = valor;
}

window.setResultado=setResultado;

function getResultado() {
    return(document.getElementById('display').innerHTML);
}

window.getResultado=getResultado;

function igual(){
  let resultado= eval(getResultado());
  setResultado(resultado);
}
window.igual=igual;

