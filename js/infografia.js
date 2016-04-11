mover_movil(0,190,22,145,0.8,"mapa 1");
girar_movil(190,10,24,180,21,0.4,"rotacion 1");

mover_movil(200,50,53,230,0.8,"mapa 2");
girar_movil(250,15,79,262,60,0.4,"rotacion 2");

girar_movil(265,20,73,305,0,0.4,"rotacion 3");

mover_movil(285,120,212,405,0.8,"mapa 2");

// Función para mover el carrito de forma lineal 

function mover_movil(offset,duracion,left,top,t_animacion,name){
	var scene = new ScrollMagic.Scene({
							triggerElement: "#mapa_infografia_cont",
							offset: offset,
							duration: duracion
						})
						.setTween("#movil_infografia", t_animacion, {top:top,left:left}) // trigger a TweenMax.to tween
						.addTo(controller);
}


// Función para girar el carrito

function girar_movil(offset,duracion,left,top,rotacion,t_animacion,name){
	var scene2 = new ScrollMagic.Scene({
							triggerElement: "#mapa_infografia_cont",
							offset: offset,
							duration: duracion
						})
						.setTween("#movil_infografia", t_animacion, {rotation: rotacion,top:top,left:left}) // trigger a TweenMax.to tween
						.addIndicators({name: name}) // add indicators (requires plugin)
						.addTo(controller);
}
						
