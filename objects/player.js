var player = {

	name: '',
	age: '',
	x: randomCoordinateX(1, 15),
	y: randomCoordinateY(1, 15),
	target_x: x,
	target_y: y,
	location: '',
	pct: 0.0,
	step: 0.0000005,
	health: {
		name: 'здоровье',
		value: 100
	},
	radiation: {
		name: 'радиация',
		value: 0
	},
	strong: {
		name: 'сила',
		value: 3
	},
	agility: {
		name: 'ловкость',
		value: 3
	},
	luck: {
		name: 'удача',
		value: 3
	},
	perception: {
		name: 'восприятие',
		value: 3
	},
	energy: {
		name: 'энергия',
		value: 100
	},
	addiction: {
		alco_addiction: false,
		cig_addiction: false
	},
	xp: {
		name: 'опыт',
		value: 0
	},
	seek: false,
	dead: false,
	want_sleep: false,
	want_eat: false,
	want_woman: false,
	want_civil: false
}