class Dog {

	id;									// порядковый номер
	name = 'собака';
	health = 10;				// здоровье
	damage = 3;					// урон
	strong = 3;					// сила
	pct = 0.0;					// процент пути
	step = 0.00005;				// шаг
	stopX = randomCoordinateX(1, 15);
	stopY = randomCoordinateX(1, 15);

	constructor(x, y, id) {
		this.x = x;
		this.y = y;
		this.id = id;
	}
}


class Raider {

	id;
	name = 'рейдер';
	health = 30;
	damage = 10;
	strong = 30;
	pct = 0.0;
	step = 0.00005;
	stopX = randomCoordinateX(1, 15);
	stopY = randomCoordinateX(1, 15);


	constructor(x, y, id) {
		this.x = x;
		this.y = y;
		this.id = id;
	}
}