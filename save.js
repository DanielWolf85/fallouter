function save() {									// это сохранения

	var s_player = JSON.stringify(player);
	localStorage.setItem('player', s_player);				// сохраняем в localStorage

	var s_global = JSON.stringify(global);
	localStorage.setItem('global', s_global);
}