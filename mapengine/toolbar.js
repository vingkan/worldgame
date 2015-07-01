function Toolbar(){
	this.tempMap = map;
}

Toolbar.prototype.viewCountry = function(countryIndex){
	var country = map.getCountryByIndex(index);
	this.tempMap = new CanvasMap('map', [country]);
}