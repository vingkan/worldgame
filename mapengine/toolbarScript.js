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
	var country = document.getElementById('select-country').value;
}