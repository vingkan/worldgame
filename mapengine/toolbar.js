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
			resetPointMenu();
			var currentIndex = document.getElementById('current-index');
			if(i == 0){
				this.tempPoints = rotateArray(this.tempPoints, true);
				this.tempPoints[i+1].openMenu(i+1);
					currentIndex.value = (i+1);
			}
			else if(i == (this.tempPoints.length-1)){
				this.tempPoints = rotateArray(this.tempPoints, true);
				this.tempPoints[i-1].openMenu(i-1);
					currentIndex.value = (i-1);
			}
			else{
				this.tempPoints[i].openMenu(i);
					currentIndex.value = i;
			}
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
	toolbar.moving = false;
	var currentIndex = document.getElementById('current-index').value;
	toolbar.tempPoints.splice(currentIndex, 1);
	outClick();
}

function forwardCurrent(forward){
	toolbar.moving = false;
	var currentIndex = document.getElementById('current-index').value;
	var point = toolbar.tempPoints[currentIndex];
	var swapWith = null;
	if(forward){
		swapWith = toolbar.tempPoints[currentIndex+1];
		toolbar.tempPoints.splice(currentIndex, 2, swapWith, point);	
	}
	else if(!forward){
		swapWith = toolbar.tempPoints[currentIndex-1];
		toolbar.tempPoints.splice((currentIndex-1), 2, point, swapWith);
	}
	outClick();
}