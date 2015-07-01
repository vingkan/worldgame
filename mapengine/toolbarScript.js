function updateCoords(event){
	var canvas = document.getElementById('map');
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('pointCoord-x').value = x;
	document.getElementById('pointCoord-y').value = y;
	var point = new Point(x, y);
	point.draw(ctx);
	//setTimeout(function(){updateMap(true);}, 1000);
}

function addPoint(){
	var x = document.getElementById('pointCoord-x').value;
	var y = document.getElementById('pointCoord-y').value;
	var country = document.getElementById('select-country').value;
	var point = new Point(x, y, map);
	point.draw(ctx);
	var target = map.searchCountry(country);
	target.pushPoint(point);
	viewCountry();
	updateMap(false);
}

function clearPoint(){
	document.getElementById('pointCoord-x').value = 0;
	document.getElementById('pointCoord-y').value = 0;
}

function viewCountry(){
	var name = document.getElementById('select-country').value;
	var country = map.searchCountry(name);
	document.getElementById('country-name').value = country.name;
	document.getElementById('country-color').value = country.color;
	document.getElementById('country-index').value = country.index;
	var pointSpace = document.getElementById('pointSpace');
		var expansion = 35*(Math.ceil(country.points.length/6));
		pointSpace.style.height = expansion + 'px';
		var toolbar = document.getElementById('toolbar-country');
		toolbar.style.height = (50 + expansion) + 'px';
	pointSpace.innerHTML = "";
	for(var i = 0; i < country.points.length; i++){
		pointSpace.innerHTML += country.points[i].toHtml(i, country);
	}
}

function arrangePointList(){
	var name = document.getElementById('select-country').value;
	var country = map.searchCountry(name);
	var points = country.points;
	var indexes = document.getElementsByClassName('pointIndex');
	var newOrder = [];
	for(var i = 0; i < indexes.length; i++){
		newOrder.push(points[indexes[i].value]);
	}
	country.points = newOrder;
}

function updateColor(){
	var country = map.searchCountry(document.getElementById('select-country').value);
	var color = document.getElementById('country-color').value;
	country.color = color;
	var points = document.getElementsByClassName('pointDiv');
	for(var i = 0; i < points.length; i++){
		points[i].style.background = color;
	}
}

function updateCountry(){
	var country = map.searchCountry(document.getElementById('select-country').value);
	var name = document.getElementById('country-name').value;
	country.name = name;
	updateColor();
	arrangePointList();
	viewCountry();
}

function updateMap(justMap){
	if(!justMap){
		updateCountry();
	}
	map.draw(ctx);
	map.resetOptions();
}