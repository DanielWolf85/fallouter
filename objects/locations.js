class Location {							// локация
	
	items = [];
	image;

	constructor(x, y, name) {

		this.x = x;
		this.y = y;
		this.name = name;

		this.role();
	}

	role() {					// определение роли локации			
		switch (this.name) {

			case 'магазин':
				this.image = 'store1.jpg';
				this.radiation = 0.1;
				this.items = [
					'печенье', 'чипсы', 'консервы', 'лапша', 'сахарные бомбы', 
					'воздушная кукуруза', 'кола', 'грязная вода', 'вино', 'коньяк', 
					'водка'
				];
				break;

			case 'бар':
				this.image = 'bar.png';
				this.radiation = 0.1;
				this.items = [
					'грязная вода', 'вино', 'коньяк',
					'водка', 'сигареты', 'джет'
				];
				break;

			case 'завод':
				this.image = 'factory.jpg';
				this.radiation = 0.1;
				this.items = [
					'грязная вода',
					'чистая вода',
					'сигареты'
				];
				break;

			case 'стоянка':
				this.image = 'parking.jpg';
				this.radiation = 0.1;
				this.items = [
					'грязная вода',
					'чистая вода',
					'сигареты',
					'презерватив',
					'джет'
				]
				break;

			case 'полиция':
				this.image = 'police.png';
				this.radiation = 0.1;
				this.items = [
					'грязная вода',
					'сигареты'
				];
				break;

			case 'кафе':
				this.image = 'cafe.jpg';
				this.radiation = 0.1;
				this.items = [
					'чистая вода',
					'грязная вода',
					'чипсы',
					'кола',
					'воздушная кукуруза',
					'сахарные бомбы',
					'лапша'
				];
				break;

			case 'кинотеатр':
				this.image = 'cinema.jpg';
				this.radiation = 0.1;
				this.items = [
					'кола'
				];
				break;

			case 'почта':
				this.image = 'pochta.jpg';
				this.radiation = 0.1;
				this.items = [
					'кола'
				];
				break;

			case 'бензоколонка':
				this.image = 'fuel.jpg';
				this.radiation = 0.1;
				this.items = [
					'кола', 'чипсы', 'грязная вода', 'вино'
				];
				break;

			case 'библиотека':
				this.image = 'library.jpg';
				this.radiation = 0.1;
				this.items = [
					'чистая вода', 'грязная вода'
				];
				break;

			default:
				break;
		}
	}
}

class Pustoch {							// класс пустоши

	items = [];
	image = 'pustoch1.jpg';

	radiation = 0.01;
	name = 'пустошь';
}