var posiciones = [0,-160,-320,-481,-642,-803];
var dado1,dado2,boton_tirar,punto,suma2=0;

window.onload = init;

function init(){
  dado1 = document.getElementById("dado1");
  dado2 = document.getElementById("dado2");
  
  boton_tirar = document.getElementById("boton_tirar");
  boton_tirar.addEventListener("click",jugar);
}

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function tirardado(ref){
  var cara = Math.floor(Math.random() * 6) + 1 ;
  ref.style.backgroundPosition = posiciones[cara-1]+"px";
  return cara;
}


function jugar(){
  	let tiro1 = tirardado(dado1);
  	let tiro2 = tirardado(dado2);
  	
  	console.log("Tiro 1: " + tiro1);
  	console.log("Tiro 2: " + tiro2); 	

	let suma = tiro1 + tiro2;
	
	if(suma == 7 || suma == 11)
  	{
  	alert("¡FELICIDADES! Ganaste la partida ");
  	return 0;
  	}

  	if(suma == 2 || suma == 3 || suma == 12){
  		alert("Mala suerte, perdiste la partida :(")
  		return 0;
  	}
  	if(suma == 4 || suma == 5 || suma == 6 || suma == 8 || suma == 9 || suma == 10){
  		alert("Acabas de conseguir un punto que equivale a " + suma + ". Debes conseguir ese mismo valor en los siguientes tiros para ganar. Si obtienes un 7, perderas.")
  		let punto = suma
  		console.log(punto);
  				
  		while (punto != suma2 || punto != 7){

  		
  		let tiro3 = tirardado(dado1)
		let tiro4 = tirardado(dado2)
		  	
		console.log("Tiro 3: " + tiro3);
		console.log("Tiro 4: " + tiro4); 

		let suma2 = tiro3 + tiro4;
		console.log(suma2)
		if (punto == suma2){alert("¡FELICIDADES! obtuviste el mismo valor, ganaste la partida")
				break;}
		if (suma2 == 7){alert("obtuviste un 7, has perdido")
		break;}  }
		

		}
		

	
}
