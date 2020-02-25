/*******************************************/
/*             PERSONA.JS                  */
/*                                         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

                /*************************************/
                /*******    PRIMERA PERSONA    *******/
                /********        AMPARO       ********/
                /*************************************/


				Id: 0,
				Name: "Amparo Gonzalez Gutiérrez",
				Photo: "Amparo.png",
				Quote: "No dejes para mañana lo que puedas hacer hoy",
				Age: 52,
				Occupation: "Ama de casa",
				Family: "Lleva 30 años casada con Jose Antonio. Tienen un hijo de 28 años, Manuel, y una hija de 22, Lucía.",
				Location: "Granada (Armilla)",
				Character: "Siempre tiene muchas cosas en la cabeza sobre quehaceres en casa. Difícilmente sabe disfrutar de su tiempo y le gustaría cambiar su vida.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 7 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 9 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 8 }
				],
				Goals: ["Sacar adelante la familia", "Encontrar algo que le llene"],
				Frustrations: ["le encanta la gastronomía, pero pocas veces sale por ahí a probar algo nuevo o le hacen de comer", "Le gustaría salir del pueblo más veces y encontrar personas con las que pueda comentar las novelas que le gustan"],
				Bio: "Es de un pueblo de Sevilla y durante unas vacaciones conoció a Jose Antonio, natural de Armilla. Se casaron muy jóvenes y al principio empezó a trabajar de costurera y cajera en varios establecimientos, pero cuando se quedó embarazada tuvo que dejar de trabajar para dedicarse a sus hijos. No obstante, siempre ha mantenido una alegría muy viva y peculiar",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 0 }

				],
                Contextos: "Sus hijos son mayores y quiere retomar las riendas de su vida, encontrar aficiones y actividades que pueda realizar fuera del núcleo familiar",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Eduardo Benítez",
				Photo: "Eduardo.jpg",
				Quote: "El éxito no llega a tu vida solo, a veces tienes que salir a buscarlo",
				Age: 25,
				Occupation: "Community Manager de una empresa de toldos, Pérgolas S.L.. Estudia Fotografía.",
				Family: "Dos madres y una hermana menor.",
				Location: "Torrepacheco, Murcia",
				Character: "Seguro de sí mismo, extrovertido, Impaciente.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				],
				Goals: ["Ser una celebridad en redes sociales.","Ser contratado como asesor de Redes Sociales en grandes empresas","tener 3 gatos"],
				Frustrations: ["No poder costearse un apartamento para independizarse de su familia."," No alcanzar los requisitos exigidos por las empresas de redes sociales para publicitar mejor su empresa"],
				Bio: " Eduardo se dedica a varios trabajos parciales para poder costearse su curso de Fotografía Profesional. Uno de ellos es dirigir las redes sociales de una famosa empresa de toldos en Murcia, la cual ha aumentado sus ventas desde que Eduardo se encarga de programar su publicidad",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }

				],
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])