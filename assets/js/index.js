// Parte 1

const foto = document.getElementById("img-parte1");
let border=false;

foto.addEventListener("click", (event)=>{
    if (!border){
        foto.style.border = "solid 2px red"
        border=true;
    }else{
        foto.style.border = "";
        border=false;
    }
});

// Parte 2

const input1= document.getElementById("input1");
const input2= document.getElementById("input2");
const input3= document.getElementById("input3");
const boton = document.getElementById("boton");
const mensaje=document.getElementById("mensaje");

let numero1= null;
let numero2= null;
let numero3= null;
let total= null;
input1.addEventListener("change", (input1)=>{
    numero1= Number(input1.target.value);

});
input2.addEventListener("change", (input2)=>{
    numero2=Number(input2.target.value);
});
input3.addEventListener("change", (input3)=>{
    numero3=Number(input3.target.value);
});
boton.addEventListener("click", (event)=>{
    total= numero1 + numero2 + numero3;
    if(total<=10){
        mensaje.innerHTML=`Llevas ${total} stickers`;
    }else{
        mensaje.innerHTML="Excedes el maximo de 10 sticker"
    }
});

//Parte 3

const pass1=document.getElementById("pass1");
const pass2=document.getElementById("pass2");
const pass3=document.getElementById("pass3");
const ingresar=document.getElementById("ingresar");
const retorno=document.getElementById("retorno");
let num1= 0;
let num2= 0;
let num3= 0;
let password1= "911";
let password2="714";

pass1.addEventListener("change", (event)=>{
    num1=event.target.value;
});
pass2.addEventListener("change", (event)=>{
    num2=event.target.value;
});
pass3.addEventListener("change", (event)=>{
    num3=event.target.value;
});
ingresar.addEventListener("click", (event)=>{
    if((num1+num2+num3)==password1){
        retorno.innerHTML="Contraseña 1 correcta";
    }else if((num1+num2+num3)==password2){
        retorno.innerHTML="Contraseña 2 correcta";
    }else{
        retorno.innerHTML="Contraseña incorrecta";
    }
});





