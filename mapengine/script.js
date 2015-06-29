function log(entry){
	var console = document.getElementById('console');
	console.value += entry + '\n';
}

function deg(degrees){
	return (Math.PI/180)*degrees;
}

function CanvasMap(id){
	this.id = id;
	this.nodes = [];

}

CanvasMap.prototype.pushNode = function(node){
	this.nodes.push(node);
}

function Coordinate(x, y){
	this.x = x || 0;
	this.y = y || 0;	
}

function Node(x, y){
	this.coord = new Coordinate(x, y);
}

Node.prototype.draw = function(ctx){
	ctx.beginPath();
	ctx.strokeStyle = '#1A1A1A';
	ctx.arc(this.coord.x, this.coord.y, 5, deg(0), deg(360), false);
	ctx.stroke();
	ctx.closePath();
}

function drawGrid(canvas, interval){
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = "0.5";
	ctx.strokeStyle = "white";
	//HORIZONTAL GRIDLINES
	for(var y = 0; y <= canvas.height; y += interval){
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(canvas.width, y);
		ctx.stroke();
	}
	//VERTICAL GRIDLINES
	for(var x = 0; x <= canvas.width; x += interval){
		ctx.beginPath();
		ctx.moveTo(x, 0);
		ctx.lineTo(x, canvas.height);
		ctx.stroke();
	}
	ctx.closePath();
	//HORIZONTAL NODES
	for(var x = 0; x <= canvas.width; x += interval){
		var startNode = new Node(x, 0);
		var endNode = new Node(x, canvas.height);
		startNode.draw(ctx);
		endNode.draw(ctx);
	}
	//VERTICAL NODES
	for(var y = 0; y <= canvas.height; y += interval){
		var startNode = new Node(0, y);
		var endNode = new Node(canvas.width, y);
		startNode.draw(ctx);
		endNode.draw(ctx);
	}
}