const contenedor = [];
let indiceConsumidor = 0;
let indiceProductor = 0;
let intervaloProcesamiento;

let estadoActual;
let cantidadRestante = 0;

const comportamientoParaEventoKeyDown = (event) => {
  if ( event.isComposing || event.code === "Escape") {
    stop();
  }
}


class Elemento {
  constructor(estado = false) {
    this.estado = estado;
  }

  cambioDeEstado (estado = this.estado) {
    this.estado = estado;
    return this.estado;
  }
}


run();



function todosLosElementosEstanEnEstadoFalso () {
  return !(contenedor.some( (elemento) => elemento.estado == true ));
}

function todosLosElementosEstanEnEstadoVerdadero () {
  return !(contenedor.some( (elemento) => elemento.estado == false ));
}

function numeroAleatorioEntre (min = 0, max = 100) {
  return Math.floor( Math.random() * (max - min) ) + min;
}

function run () {
  for ( let i = 0 ; i < 20 ; i++ ) {
    contenedor[i] = new Elemento();
  }
  procesamiento();
  intervaloProcesamiento = window.setInterval(procesamiento, 500);

  document.addEventListener("keydown", comportamientoParaEventoKeyDown);

}


function procesamiento (condicionAleatoria) {
  if(cantidadRestante == 0) {
    condicionAleatoria = isNaN(condicionAleatoria) ? numeroAleatorioEntre(1, 5000) : condicionAleatoria;
    let htmlElementoConsumidor;
    let htmlElementoProductor;

    if ( condicionAleatoria % 2 == 1 ) {
      estadoActual = "Consumidor";

      if ( !todosLosElementosEstanEnEstadoFalso() ) {
        htmlElementoConsumidor = document.getElementById("Consumidor");
        htmlElementoProductor = document.getElementById("Productor");

        htmlElementoConsumidor.setAttribute("image","Hornofuego.png");
        htmlElementoProductor.setAttribute("image","picoz.png");
      } else {
        procesamiento(2);
        return;
      }
    } else {
      estadoActual = "Productor";

      if ( !todosLosElementosEstanEnEstadoVerdadero() ) {
        htmlElementoConsumidor = document.getElementById("Consumidor");
        htmlElementoProductor = document.getElementById("Productor");

        htmlElementoConsumidor.setAttribute("image","Horno.png");
        htmlElementoProductor.setAttribute("image","pico.png");
      } else {
        procesamiento(1);
        return;
      }
    }

    htmlElementoProductor.connectedCallback();
    htmlElementoConsumidor.connectedCallback();
    cantidadRestante = numeroAleatorioEntre(4,7);
  }
  if(estadoActual == "Consumidor") {
    if(indiceConsumidor == 20) indiceConsumidor = 0;
    if ( todosLosElementosEstanEnEstadoFalso() ) {
      cantidadRestante = 0;
      return;
    }

    contenedor[indiceConsumidor].cambioDeEstado(false);

    let element = document.getElementById(indiceConsumidor);

    if(contenedor[indiceConsumidor].estado == true) {
      element.setAttribute("image","iron.png");
    } else {
      element.setAttribute("image","hierro.png");
    }

    element.connectedCallback();
    indiceConsumidor++;
  } else {
    if(indiceProductor == 20) indiceProductor = 0;
    if ( todosLosElementosEstanEnEstadoVerdadero() ) {
      cantidadRestante = 0;
      return;
    }

    contenedor[indiceProductor].cambioDeEstado(true);
    let element = document.getElementById(indiceProductor);

    if(contenedor[indiceProductor].estado == true) {
      element.setAttribute("image","iron.png");
    } else {
      element.setAttribute("image","hierro.png");
    }

    element.connectedCallback();
    indiceProductor++;
  }
  cantidadRestante--;
}

function stop() {
  clearInterval(intervaloProcesamiento);
  document.removeEventListener("keydown", comportamientoParaEventoKeyDown);
  openModal(); 
}


// Inicio Codigo del Modal
var modal = document.getElementById('myModal');

function openModal() {
    const modalImage = document.getElementById('modalImage');
	document.getElementById('Productor').style.display ='none';
	document.getElementById('Consumidor').style.display ='none';
	document.getElementById('0').style.display ='none';
	document.getElementById('1').style.display ='none';
	document.getElementById('2').style.display ='none';
	document.getElementById('3').style.display ='none';
	document.getElementById('4').style.display ='none';
	document.getElementById('5').style.display ='none';
	document.getElementById('6').style.display ='none';
	document.getElementById('7').style.display ='none';
	document.getElementById('8').style.display ='none';
	document.getElementById('9').style.display ='none';
	document.getElementById('10').style.display ='none';
	document.getElementById('11').style.display ='none';
	document.getElementById('12').style.display ='none';
	document.getElementById('13').style.display ='none';
	document.getElementById('14').style.display ='none';
	document.getElementById('15').style.display ='none';
	document.getElementById('16').style.display ='none';
	document.getElementById('17').style.display ='none';
	document.getElementById('18').style.display ='none';
	document.getElementById('19').style.display ='none';
    modalImage.src = 'img/muerte.png'; 
    modal.style.display = "block";
    modal.className += "show";
}

// Fin Codigo del Modal