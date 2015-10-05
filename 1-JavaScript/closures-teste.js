for (var i = 0; i < 300; i++) {
	(function () {
		i += 100;
		var jacaré = 'jacaré ' + i;
	})();
}

console.log(i);
console.log(jacaré);