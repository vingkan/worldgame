function Toolbar(){
	this.tempMap = map;
}

function viewCountry(){
	var index = document.getElementById('country-select').value;
	var country = map.getCountryByIndex(index);
	toolbar.tempMap = new CanvasMap('map', [country]);
	resetCanvas();
	toolbar.tempMap.draw();
}