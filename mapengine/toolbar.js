function Toolbar(){
	this.tempMap = map;
}

Toolbar.prototype.showPoints = function(){
	for(var i = 0; i < this.tempMap.countries.length; i++){
		this.tempMap.countries[i].showPoints();
	}
}

function viewCountry(){
	var index = document.getElementById('country-select').value;
	if(index == -1){
		resetCanvas();
		map.draw();
	}
	else{
		var country = map.getCountryByIndex(index);
		toolbar.tempMap = new CanvasMap('map', [country]);
		resetCanvas();
		toolbar.tempMap.draw();
		toolbar.showPoints();
	}
}