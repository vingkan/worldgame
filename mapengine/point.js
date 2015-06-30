function Point(x, y, map){
	this.coord = new Coordinate(x, y);
	this.map = map || null;
	if(map != null){
		map.pushPoint(this);
	}
}

Point.prototype.toString = function(){
	return "Point at (" + this.coord.x + ", " + this.coord.y + ")";
}

Point.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.strokeStyle = '#1A1A1A';
	ctx.arc(this.coord.x, this.coord.y, 5, deg(0), deg(360), false);
	ctx.stroke();
	ctx.closePath();
}

function connectPoints(points, ctx){
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "yellow";
	ctx.lineWidth = "1";
	ctx.beginPath();
	var i = 0;
	while(i < points.length - 1){
		ctx.moveTo(points[i].coord.x, points[i].coord.y);
		ctx.lineTo(points[i+1].coord.x, points[i+1].coord.y);
		i++
	}
	ctx.lineTo(points[0].coord.x, points[0].coord.y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}