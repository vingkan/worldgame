function Point(x, y, color, radius){
	this.x = x;
	this.y = y;
	this.color = color || '#1A1A1A';
	this.radius = radius || 10;
}

Point.prototype.toString = function(){
	return "Point at (" + this.x + ", " + this.y + ").";
}

Point.prototype.draw = function(){
	ctx.beginPath();
	ctx.strokeStyle = this.color;
	ctx.arc(this.x, this.y, this.radius, deg(0), deg(360), false);
	ctx.stroke();
	ctx.closePath();
}

Point.prototype.isDraggable = function(x, y){
	var draggable = false;
	//CHECK X BOUNDS
	var xBounds = false;
	var xLo = this.x - this.radius;
	var xHi = this.x + this.radius;
	if(x > xLo && x < xHi){
		xBounds = true;
	}
	//CHECK Y BOUNDS
	var yBounds = false;
	var yLo = this.y - this.radius;
	var yHi = this.y + this.radius;
	if(y > yLo && y < yHi){
		yBounds = true;
	}
	//FINAL CHECK
	if(xBounds && yBounds){
		draggable = true;
	}
	return draggable;
}
