function updateCoords(event){
	var canvas = document.getElementById('map');
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('pointCoord-x').value = x;
	document.getElementById('pointCoord-y').value = y;
}

function addPoint(){
	var x = document.getElementById('pointCoord-x').value;
	var y = document.getElementById('pointCoord-y').value;
	var country = document.getElementById('select-country').value;
	var point = new Point(x, y, map);
	var target = map.searchCountryName(country);
	target.pushPoint(point);
}

function clearPoint(){
	document.getElementById('pointCoord-x').value = 0;
	document.getElementById('pointCoord-y').value = 0;
}

function viewCountry(){
	var name = document.getElementById('select-country').value;
	var country = map.searchCountryName(name);
	document.getElementById('country-name').value = country.name;
	document.getElementById('country-color').value = country.color;
	var pointSpace = document.getElementById('pointSpace');
	pointSpace.innerHTML = "";
	for(var i = 0; i < country.points.length; i++){
		pointSpace.innerHTML += country.points[i].toHtml(i, country);
	}
}

function arrangePointList(){
	var name = document.getElementById('country-name').value;
	var country = map.searchCountryName(name);
	var points = country.points;
	var indexes = document.getElementsByClassName('pointIndex');
	var newOrder = [];
	for(var i = 0; i < indexes.length; i++){
		newOrder.push(points[indexes[i].value]);
	}
	country.points = newOrder;
}