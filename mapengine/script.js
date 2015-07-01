function log(entry){
	var console = document.getElementById('console');
	console.value += entry + '\n';
}

function deg(degrees){
	return (Math.PI/180)*degrees;
}

function Coordinate(x, y){
	this.x = x || 0;
	this.y = y || 0;	
}

Coordinate.prototype.toString = function(){
	return "(" + this.x + ", " + this.y + ")";
}

/*function connectPoints(points, ctx){
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "yellow";
	ctx.lineWidth = "1";
	ctx.beginPath();
	var i = 0;
	while(i < points.length - s1){
		ctx.moveTo(points[i].coord.x, points[i].coord.y);
		ctx.lineTo(points[i+1].coord.x, points[i+1].coord.y);
		i++
	}
	ctx.lineTo(points[0].coord.x, points[0].coord.y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}*/