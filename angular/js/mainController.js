angular.module("sportsApp").controller("dataController", function($scope){
	$scope.games = [
		{
			"id": 1,
			"type": "basketball",
			"title": "NBA Season",
			"image": "basketball.jpeg",
			"price": 47,
			"soldOut": false,
			"teams": {
				"home": "LA Lakers",
				"away": "Utah Jazz"
			}
		},
		{
			"id": 2,
			"type": "tennis",
			"title": "French open semi final",
			"image": "tennis.jpg",
			"price": 30.5,
			"soldOut": true,
			"teams": {
				"home": "Federer",
				"away": "Nadal"
			}
		},
		{
			"id": 3,
			"type": "football",
			"title": "The Superball",
			"image": "football.jpg",
			"price": 92,
			"soldOut": false,
			"teams": {
				"home": "Dallas Cowboys",
				"away": "New York Giants"
			}
		},
		{
			"id": 4,
			"type": "soccer",
			"title": "World Cup first round",
			"image": "soccer.jpg",
			"price": 50.9,
			"soldOut": false,
			"teams": {
				"home": "Brazil",
				"away": "Spain"
			}
		},
		{
			"id": 5,
			"type": "soccer",
			"title": "World Cup first round",
			"image": "soccer.jpg",
			"price": 51.9,
			"soldOut": false,
			"teams": {
				"home": "Brazil",
				"away": "Spain"
			}
		},
		{
			"id": 6,
			"type": "soccer",
			"title": "World Cup first round",
			"image": "soccer.jpg",
			"price": 52.9,
			"soldOut": false,
			"teams": {
				"home": "Brazil",
				"away": "Spain"
			}
		},
		{
			"id": 7,
			"type": "tennis",
			"title": "WWimbeldon finals",
			"image": "tennis.jpg",
			"price": 40,
			"soldOut": false,
			"teams": {
				"home": "Marie",
				"away": "Sela"
			}
		}
	];
});