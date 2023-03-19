let datos,lstm,run1;

function chatbot(){
    let valoracion;
    let user= `<i class="fa-solid fa-user lumos"></i>`;
    let entrada = document.getElementById("texto1").value;
    let salida2= document.getElementById("principal").innerHTML+=`<li id="user" class="other">
    ${user}</div><div class="msg user">${entrada}</div></li>`;
    let salida = document.getElementById("principal")
    let bot= `<i class="fa-solid fa-robot lumos"></i>`;
    entrada = entrada.toLowerCase(); // Convertir la entrada del usuario a minúsculas para una búsqueda insensible a mayúsculas y minúsculas

    var xhr = new XMLHttpRequest();
        xhr.open("GET", "js/RNA.json", true);
        xhr.onload = function() {
          if (xhr.status === 200) {
            datos = JSON.parse(xhr.responseText);
            lstm = new brain.recurrent.LSTM().fromJSON(datos);   
            run1 = lstm.run(entrada); 
            valoracion+=1;
            console.log('Feelbot ejecutandose, RNA responde')
            //console.log(datos); // Imprime los datos del archivo JSON
            //console.log(run1);
            if (run1) {
              console.log("entramos");
              if(valoracion==5 ){
                return salida.innerHTML+=`<div id="botcito">${bot} : Eres curioso.<br></div>`
              }
              return salida.innerHTML += ` <li class="self"><div class="avatar">${bot}</div><div  class="msg bot">${run1}</div></li>`;
            }else
              return salida.innerHTML+=`<div id="botcito">${bot} : Lo siento, no entiendo lo que estás diciendo.<br></div>`; // Respuesta predeterminada si no se encuentra ninguna clave en la entrada del usuario 
              
          } 
           
			};
			xhr.send(); 
 
}

function limpiar(){
  let entrada = document.getElementById("texto1").value="";
}