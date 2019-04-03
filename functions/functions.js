function c(arg) {						// сокращенная colsole.log();
	console.log(arg);
}


function randomCoordinateX(minX, maxX) {					// возвращает случайные координаты x
	x = Math.random() * (maxX - minX);
	return x;
}

function randomCoordinateY(minY, maxY) {				// возвращает случайные координаты y
	y = Math.random() * (maxY - minY);
	return y;
}


function distancePoint(x1, y1, x2, y2) {				// вычисление расстояния между точками
	let a = x1 - x2;
	let b = y1 - y2;
	return Math.sqrt( a * a + b * b );
}

function nameAge() {															// получает имя и возраст игрока
	let name = document.getElementById('name');
	let age = document.getElementById('age');
	player.name = name.value;
	player.age = age.value;
}

function playerTarget() {												// получает координаты путкта назначения игрока
	let x = document.getElementById('x');
	let y = document.getElementById('y');
	player.target_x = x.value;
	player.target_y = y.value;
}

function playerMove() {												// движение игрока
	if (player.pct < 1.0) {
		player.x = player.x + ((player.target_x - player.x) * player.pct);
		player.y = player.y + ((player.target_y - player.y) * player.pct);
		player.pct += player.step;
	}
}


function checkLocationPresence(x, y) {								// проверка нахождения игрока в локации
	let i = 0;

	while (i < zone.length) {
		
		if (x == zone[i].x && y == zone[i].y) {
	
			player.location = zone[i];
			break;
		}
		i++;
	}

	if (i >= zone.length) {														// если не найдено ни одной локации
		player.location = new Pustoch;									// присваиваем локацию пустошь
	}
	
}


function display() {					// отображает данные на экране

	message = getMessage();

	var location_photo = document.getElementById('location_photo');
	var coordinate = document.getElementById('coordinate');
	var text = document.getElementById('text');
	var health = document.getElementById('health');
	var radiation = document.getElementById('radiation');
	var energy = document.getElementById('energy');
	var player_map = document.getElementById('player');
	var target_map = document.getElementById('target');
	var display_name = document.getElementById('name');
	var display_age = document.getElementById('age');
	var display_x = document.getElementById('x');
	var display_y = document.getElementById('y');


	location_photo.src = "img/locations/" + player.location.image;				// показ фото локации

	display_name.value = player.name;
	display_age.value = player.age;

	//display_x.value = player.target_x;
	//display_y.value = player.target_y;

	health.innerHTML = parseInt(player.health.value);
	radiation.innerHTML = parseInt(player.radiation.value);
	energy.innerHTML = parseInt(player.energy.value);
																																	// отображение игрока и цели на карте
	player_map.style.marginTop = parseInt(player.y * 10) + "px";
	player_map.style.marginLeft = parseInt(player.x * 10) + "px";
	target_map.style.marginTop = parseInt(player.target_y * 10) + "px";
	target_map.style.marginLeft = parseInt(player.target_x * 10) + "px";


	coordinate.innerHTML = "Сектор: " + parseInt(player.x) + " : " + parseInt(player.y) + " | " + " Локация: " + player.location.name + " | " +
													"Точка назначения: " + parseInt(player.target_x) + " : " + parseInt(player.target_y) + 
													" | " + "День: " + parseInt(global.time.day) + " | " + "Год: " + global.time.year;


	text.innerHTML = "<p>" + message.pop() + "</p>";
}


function _global() {									// глобальные процессы
	global.time.day += 0.001;
	if (global.time.day >= 356) {
		global.time.year++;
	}
	player.radiation.value += player.location.radiation;
	if (player.radiation.value > 100) gameOver();
	if (player.radiation.value >= 50) player.health.value -= 0.05;
	player.energy.value -= 0.1;
	if (player.energy.value <= 50) player.health.value -= 0.05;
	if (player.energy.value < 0) gameOver();
	if (player.health.value < 0) gameOver();
}


function dogsMove() {								// движение всех собак
	for(i = 0; i < dogs.length; i++) {
		if (dogs[i].pct < 1.0) {
			dogs[i].x = dogs[i].x + ((dogs[i].stopX - dogs[i].x) * dogs[i].pct);
			dogs[i].y = dogs[i].y + ((dogs[i].stopY - dogs[i].y) * dogs[i].pct);
			dogs[i].pct += dogs[i].step;
		}
		if (dogs[i].x === dogs[i].stopX && dogs[i].y === dogs[i].stopY) {
			selectNewStopPoint(dogs[i]);
			dogs[i].pct = 0.0;
		}
	}
}


function raidersMove() {					// движение всех рейдеров
	for(i = 0; i < raiders.length; i++) {
		if (raiders[i].pct < 1.0) {
			raiders[i].x = raiders[i].x + ((raiders[i].stopX - raiders[i].x) * raiders[i].pct);
			raiders[i].y = raiders[i].y + ((raiders[i].stopY - raiders[i].y) * raiders[i].pct);
			raiders[i].pct += raiders[i].step;
		}
		if (raiders[i].x === raiders[i].stopX && raiders[i].y === raiders[i].stopY) {
			selectNewStopPoint(raiders[i]);
			raiders[i].pct = 0.0;
			c('новые координаты для ' + raiders[i].name + ' номер ' + raiders[i].id + ' X: ' + raiders[i].stopX + ' Y: ' + raiders[i].stopY);
		}
	}
}


function selectNewStopPoint(obj) {		// выбор новых координат.. принимает массив
	//c('выбор координат');
	obj.stopX = randomCoordinateX(1, 15);
	obj.stopY = randomCoordinateY(1, 15);
}

function gameOver() {									// конец игры
	clearInterval(game);
}