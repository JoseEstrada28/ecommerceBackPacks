const comprar = document.getElementById("add");
const comprar2 = document.getElementById("add2");
const remover = document.getElementById("remove");

comprar.addEventListener("click", compras);
comprar2.addEventListener("click", comprasTwo);
remover.addEventListener("click", eliminar);

function compras(){
const product1 = {
   nombre: "BackPack 1",
   precio: 20,
   cantidad: 1

};


let parrafo1= document.createElement(`li`);
let parrafo2 = document.createElement(`li`);
let parrafo3 = document.createElement(`li`);
let parrafo4 = document.createElement(`li`);

parrafo1.textContent = ` ${product1.nombre}`;
parrafo2.textContent = ` ${product1.precio}`;
parrafo3.textContent = ` ${product1.cantidad}`;


let content = document.querySelector(`.compra__list`);
content.appendChild(parrafo1);
content.appendChild(parrafo2);
content.appendChild(parrafo3);
localStorage.setItem("content1", content);


}
compras();


function comprasTwo(){
  
   const product2 = {
      nombre: "BackPack 2",
      precio: 30,
      cantidad: 1
   
   };
   
   let parrafo1= document.createElement(`li`);
   let parrafo2 = document.createElement(`li`);
   let parrafo3 = document.createElement(`li`);
   let parrafo4 = document.createElement(`li`);
   
   parrafo1.textContent = ` ${product2.nombre}`;
   parrafo2.textContent = ` ${product2.precio}`;
   parrafo3.textContent = ` ${product2.cantidad}`;
   
   
   let content = document.querySelector(`.compra__list`);
   content.appendChild(parrafo1);
   content.appendChild(parrafo2);
   content.appendChild(parrafo3);
   localStorage.setItem("content2", content);
   
   
   }
   comprasTwo();
   function deleteall(){
     
     document.querySelectorAll(".compra__list").forEach(e => e.parentNode.removeChild(e));
      
   }
   
   function eliminar(){
      localStorage.clear();
      deleteall();
   }
   