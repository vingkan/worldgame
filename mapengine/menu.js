//CURRENTLY NOT IN USE BY PROGRAM, NOT LOADED IN HTML

function getPosition(event){
	var canvas = document.getElementById('map');
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('pointCoord-x').value = x;
	document.getElementById('pointCoord-y').value = y;
	document.getElementById('pointCoord').style.display = 'block';
}

function newPoint(){
	log("called");
	$('map').one('mousedown', function(){
		var canvas = document.getElementById('map');
		var x = event.x;
		var y = event.y;
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		document.getElementById('pointCoord-x').value = x;
		document.getElementById('pointCoord-y').value = y;
		document.getElementById('pointCoord').style.display = 'block';
	});
}

function addPoint(){
	var x = document.getElementById('pointCoord-x').value;
	var y = document.getElementById('pointCoord-y').value;
	var point = new Point(x, y, map);
	point.draw(ctx);
	closePoint();
}

function closePoint(){
	document.getElementById('pointCoord-x').value = 0;
	document.getElementById('pointCoord-y').value = 0;
	document.getElementById('pointCoord').style.display = 'none';
}