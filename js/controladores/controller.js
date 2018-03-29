app.controller('controladorGeneral', ['$scope', '$anchorScroll','$location', function($scope,$anchorScroll,$location){
	$scope.esconderboton=true;
	$scope.menu=[
	"Inicio",
	"Acerca de mi",
	"Proyectos",
	"Contactame"
	];
	$scope.srA=function(id){
		var nuevaId= "contenido" + id;
		$location.hash(nuevaId);
		$anchorScroll();
	}
	$scope.proyectos=[
	{imagen:"cole-patrick-4576.jpg",
	descripcion:"Una página de ropa tejida totalmente interactiva, asincrona, rápida y un manejo de datos excelente.",
	urls:"https://Tejidoscrochet.000webhostapp.com"
	}
	];
	$scope.habilidades = [
		"htmllogo.png",
		"css.png",
		"phplogo.png",
		"JavaScript.png",
		"angular.png",
		"jquerylogo.png",
		"ajaxlogo.png"
			];
	
	

}]);
