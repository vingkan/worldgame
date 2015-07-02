function Toolbar(){
	this.tempMap = map;
	this.tempPoints = [];
}

Toolbar.prototype.pushTempPoint = function(point){
	this.tempPoints.push(point);
}

Toolbar.prototype.pushCountryPoints = function(country){
	for(var i = 0; i < country.points.length; i++){
		this.pushTempPoint(country.points[i]);
	}
}

Toolbar.prototype.checkContact = function(x, y){
	var contact = false;
	for(var i = 0; i < this.tempPoints.length; i++){
		if(this.tempPoints[i].isDraggable(x, y)){
			contact = true;
			resetPointMenu()
			this.tempPoints[i].openMenu();
			var currentIndex = document.getElementById('current-index');
				currentIndex.value = i;
			break;
		}
	}
	return contact;
}

function resetPointMenu(){
	var pointMenu = document.getElementById('pointMenu');
		pointMenu.style.marginTop = '-435px';
		pointMenu.style.marginLeft = '20px';
}

function viewCountry(){
	var index = document.getElementById('country-select').value;
	if(index == -1){
		resetCanvas();
		map.draw();
	}
	else{
		var country = map.getCountryByIndex(index);
		toolbar.tempMap = new CanvasMap('map', [country], true);
			toolbar.tempPoints = [];
		toolbar.pushCountryPoints(country);
		resetCanvas();
		toolbar.tempMap.draw();
	}
}

function moveCurrent(){

}

function removeCurrent(){
	var currentIndex = document.getElementById('current-index');
	toolbar.tempPoints.splice(currentIndex, 1);
	toolbar.tempMap.countries[0].points = toolbar.tempPoints;
	resetCanvas();
	toolbar.tempMap.draw();
	resetPointMenu();
}