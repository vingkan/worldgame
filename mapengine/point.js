function Point(x, y, color, radius){
	this.x = x;
	this.y = y;
	this.color = color || '#1A1A1A';
	this.radius = raidus || 5;
}

Point.prototype.toString = function(){
	return "Point at (" + this.x + ", " + this.y + ").";
}

Point.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.strokeStyle = this.color;
	ctx.arc(this.x, this.y, this.radius, deg(0), deg(360), false);
	ctx.stroke();
	ctx.closePath();
}

Point.prototype.isDraggable = function(x, y){

}

function getPosition(event){
	var canvas = document.getElementById('map');

	event.target.removeEventListener(event.type, arguments.callee);

	var x = event.x;
	var y = event.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	document.getElementById('pointCoord-x').value = x;
	document.getElementById('pointCoord-y').value = y;
	document.getElementById('pointCoord').style.display = 'block';
	
	log("removed!");
}

function newPoint(){
	var canvas = document.getElementById('map');
	canvas.addEventListener('mousedown', getPosition, false);
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
