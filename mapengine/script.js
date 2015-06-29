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

function Node(x, y, map){
	this.coord = new Coordinate(x, y);
	this.map = map || null;
	if(map != null){
		map.pushNode(this);
	}
}

Node.prototype.toString = function(){
	return "Node at (" + this.coord.x + ", " + this.coord.y + ").";
}

Node.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.strokeStyle = '#1A1A1A';
	ctx.arc(this.coord.x, this.coord.y, 5, deg(0), deg(360), false);
	ctx.stroke();
	ctx.closePath();
}

function connectNodes(nodes, ctx){
	ctx.strokeStyle = "blue";
	ctx.fillStyle = "yellow";
	ctx.lineWidth = "1";
	ctx.beginPath();
	var i = 0;
	while(i < nodes.length - 1){
		ctx.moveTo(nodes[i].coord.x, nodes[i].coord.y);
		ctx.lineTo(nodes[i+1].coord.x, nodes[i+1].coord.y);
		i++
	}
	ctx.lineTo(nodes[0].coord.x, nodes[0].coord.y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}