function Toolbar(){
	this.tempMap = map;
	this.tempPoints = [];
	this.moving = false;
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

function outClick(){
	toolbar.moving = false;
	toolbar.tempMap.countries[0].points = toolbar.tempPoints;
	resetCanvas();
	toolbar.tempMap.draw();
	resetPointMenu();
}

function moveCurrent(){
	toolbar.moving = true;
}

function removeCurrent(){
	var currentIndex = document.getElementById('current-index').value;
	toolbar.tempPoints.splice(currentIndex, 1);
	outClick();
}

function forwardCurrent(forward){
	var currentIndex = document.getElementById('current-index').value;
	var point = toolbar.tempPoints[currentIndex];
	var swapWith = toolbar.tempPoints[currentIndex];
	if(forward && currentIndex < toolbar.tempPoints.length){
		swapWith = toolbar.tempPoints[currentIndex+1];
		toolbar.tempPoints.splice(currentIndex, 2, swapWith, point);
	}
	if(!forward && currentIndex > 0){
		swapWith = toolbar.tempPoints[currentIndex-1];
		toolbar.tempPoints.splice(currentIndex-1, 2, point, swapWith);
	}
	else{
		log("Out of Bounds Error!");
		if(forward){
			swapWith = toolbar.tempPoints[0];
			toolbar.tempPoints.splice(0, 1, point);
			toolbar.pushTempPoint(swapWith);
		}
		if(!forward){
			swapWith = toolbar.tempPoints[toolbar.tempPoints.length-1];
			toolbar.tempPoints.splice(toolbar.tempPoints.length-1, 1, point);
			toolbar.tempPoints.splice(0, 0, swapWith);
		}
	}
	outClick();
}