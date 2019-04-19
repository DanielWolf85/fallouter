
var dogs = [];					// массив с собаками
var raiders = [];				// массив с рейдерами

var zone = [];



if (localStorage.length > 0) {								// если в localstorage есть сохранения
	player = JSON.parse(localStorage.player);		// загружаем сохраненные объекты
	global = JSON.parse(localStorage.global);
}


spawnDogs();					// спауним собак		(spawn.js)
spawnRaiders();				// спауним рейдеров	(spawn.js)
spawnLocations();			// спауним локации	(spawn.js)



var game = setInterval(function() {										// ИГРОВОЙ ЦИКЛ


		dogsMove();														// собаки двигаются
		raidersMove();												// рейдеры двигаются
		playerMove();													// игрок двигается


	checkLocationPresence(parseInt(player.x), parseInt(player.y));							// проверка нахождения игрока в локации
	
	c(player.step);

	_global();															// глобальные события
	display();														// данные отображаются

	// gameOver();

}, 2000);



