
var inicio=0;

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
function maximalongitud(longtext){
    if(longtext.innerHTML.length>8){
        longtext.style.cssText='font-size:26px;' ;

    }if (longtext.innerHTML.length>14){
        longtext.style.cssText='font-size:16px;' ;
        
    } else {
        console.log(longtext.innerHTML.length);
    }  
}

function setResultado(valor) {
    document.getElementById('display').innerHTML = valor;
}
function getResultado() {
    return(document.getElementById('display').innerHTML);
}
function igual(){
  let resultado= eval(getResultado());
  setResultado(resultado);
}


