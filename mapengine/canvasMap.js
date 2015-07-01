function CanvasMap(id, countryList){
	this.id = id;
	this.countries = countryList || [];
}

CanvasMap.prototype.pushCountry = function(country){
	this.countries.push(country);
}

CanvasMap.prototype.getCountryByIndex = function(index){
	return this.countries[index];
}

CanvasMap.prototype.checkDraggablePoints = function(x, y){
	for(var k = 0; k < this.countries.length; k++){
		for(var i = 0; i < this.country[k].points.length; i++){
			if(this.country[k].points[i].isDraggable(x, y)){
				this.country[k].points.splice(i, 1);
				break;
			}
		}		
	}
}

CanvasMap.prototype.draw = function(){
	for(var i = 0; i < this.countries.length; i++){
		this.countries[i].draw();
	}
}

function drawGrid(interval, nodes){
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
	if(nodes){
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
}

function getPosition(event){
	var x = event.x;
	var y = event.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	return new Coordinate(x, y);
}

function clickCanvas(event){
	var coord = getPosition(event);
	var point = new Point(coord.x, coord.y);
		toolbar.pushTempPoint(point);
		point.draw();
}