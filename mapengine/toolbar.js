function Toolbar(){
	this.tempMap = map;
	this.tempPoints = [];
}

Toolbar.prototype.pushTempPoint = function(point){
	this.tempPoints.push(point);
}

Toolbar.prototype.pushTempPointList = function(pointsList){
	this.tempPoints.concat(pointsList);
}

Toolbar.prototype.showPoints = function(){
	for(var i = 0; i < this.tempMap.countries.length; i++){
		this.tempMap.countries[i].showPoints();
		this.pushTempPointList(this.tempMap.countries[i].points);
	}
}

Toolbar.prototype.checkContact = function(x, y){
	for(var i = 0; i < this.tempPoints.length; i++){
		if(this.tempPoints[i].isDraggable(x, y)){
			this.tempPoints[i].openMenu();
		}
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