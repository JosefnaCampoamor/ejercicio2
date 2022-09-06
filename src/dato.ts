import "./styles.css";

let primerInput=document.getElementById("dato");
let segundoInput=document.getElementById("dato1");
let btnEnv=document.getElementById("btn");
let parrafo=document.getElementById("area");

btnEnv?.addEventListener("click", () => {
  let base:number=number(primerInput.value);
  let altura:number=number(segundoInput.value);
  let area:number= base * altura;
  parrafo?.innerText+= area;

 })



