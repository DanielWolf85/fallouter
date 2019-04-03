function spawnDogs() { 				// спаунит собак					// это массив со всеми собаками
	var id;									// это id
	for(i = 0; i <= global.monsters.dog; i++) {					// пока i меньше или равно общего лимита собак
		creature_x = randomCoordinateX(0, field.sizeX);		// (functions.js)		// вычисляем рандом x
		creature_y = randomCoordinateY(0, field.sizeY);		// (functions.js)	// вычисляем рандом y
		id = i;									// равняем id к i
		dogs[i] = new Dog(creature_x, creature_y, id);				// создаем экземпляр собаки в массив dogs
	}
	return dogs;			// возвращаем собак
}

function spawnRaiders() {			// спауним рейдеров
	var id;
	for(i = 0; i <= global.raiders; i++) {
		creature_x = randomCoordinateX(0, field.sizeX);
		creature_y = randomCoordinateY(0, field.sizeY);
		id = i;
		raiders[i] = new Raider(creature_x, creature_y, id);
	}
	return raiders;
}


function spawnLocations() {					// спауним локации
	zone[0] = new Location(3, 3, 'магазин');
	zone[1] = new Location(13, 11, 'магазин');
	zone[2] = new Location(9, 6, 'магазин');
	zone[3] = new Location(3, 12, 'магазин');
	zone[4] = new Location(10, 3, 'завод');
	zone[5] = new Location(12, 8, 'завод');
	zone[6] = new Location(4, 8, 'завод');
	zone[7] = new Location(10, 14, 'завод');
	zone[8] = new Location(4, 8, 'завод');
	zone[9] = new Location(5, 5, 'кафе');
	zone[10] = new Location(13, 2, 'кафе');
	zone[11] = new Location(12, 6, 'кафе');
	zone[12] = new Location(15, 2, 'кафе');
	zone[13] = new Location(2, 6, 'стоянка');
	zone[14] = new Location(8, 9, 'стоянка');
	zone[15] = new Location(13, 5, 'стоянка');
	zone[16] = new Location(13, 14, 'стоянка');
	zone[17] = new Location(7, 2, 'кинотеатр');
	zone[18] = new Location(14, 9, 'кинотеатр');
	zone[19] = new Location(10, 11, 'кинотеатр');
	zone[20] = new Location(2, 10, 'почта');
	zone[21] = new Location(15, 3, 'почта');
	zone[22] = new Location(7, 4, 'полиция');
	zone[23] = new Location(7, 14, 'полиция');
	zone[24] = new Location(10, 1, 'бар');
	zone[25] = new Location(15, 13, 'бар');
	zone[26] = new Location(2, 1, 'библиотека');
	zone[27] = new Location(5, 15, 'библиотека');
	zone[28] = new Location(6, 10, 'библиотека');
	zone[29] = new Location(15, 15, 'библиотека');
}