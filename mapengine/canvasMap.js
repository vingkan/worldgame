function CanvasMap(id){
	this.id = id;
	this.points = [];
	this.countries = [];

}

CanvasMap.prototype.pushPoint = function(point){
	this.points.push(point);
	//log(point.toString());
}

CanvasMap.prototype.pushCountry = function(country){
	country.index = this.countries.length;
	this.countries.push(country);
	country.addOption();
}

/*CanvasMap.prototype.searchCountryName = function(name){
	var response = null;
	for(var i = 0; i < this.countries.length; i++){
		if(this.countries[i].name == name){
			response = this.countries[i];
		}
	}
	return response;
}*/

CanvasMap.prototype.searchCountry = function(index){
	var response = null;
	for(var i = 0; i < this.countries.length; i++){
		if(this.countries[i].index == index){
			response = this.countries[i];
		}
	}
	return response;
}

CanvasMap.prototype.resetOptions = function(){
	var selector = document.getElementById('select-country');
	selector.innerHTML = '<option value="null">Country</option>';
	for(var i = 0; i < this.countries.length; i++){
		this.countries[i].addOption();
	}
	var index = document.getElementById('country-index').value;
	selector.value = index;
}

CanvasMap.prototype.draw = function(ctx){
	this.clear(ctx);
	for(var i = 0; i < this.countries.length; i++){
		this.countries[i].draw(ctx);
	}
	var interval = parseInt(document.getElementById('grid-interval').value, 10);
	this.drawGrid(interval, false);
}

CanvasMap.prototype.clear =  function(ctx){
	var canvas = document.getElementById(this.id);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

CanvasMap.prototype.drawGrid = function(interval, nodes){
	var canvas = document.getElementById(this.id);
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
	if(nodes){
		//HORIZONTAL POINTS
		for(var x = 0; x <= canvas.width; x += interval){
			var startPoint = new Point(x, 0);
			var endPoint = new Point(x, canvas.height);
			startPoint.draw(ctx);
			endPoint.draw(ctx);
		}
		//VERTICAL POINTS
		for(var y = 0; y <= canvas.height; y += interval){
			var startPoint = new Point(0, y);
			var endPoint = new Point(canvas.width, y);
			startPoint.draw(ctx);
			endPoint.draw(ctx);
		}
	}
}
