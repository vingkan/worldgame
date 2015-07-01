function Country(name, color){
	this.index = null;
	this.name = name || "New Country";
	this.color = color || "black";
	this.points = [];
}

Country.prototype.pushPoint = function(point){
	this.points.push(point);
}

function nameOffset(name, fontSize){
	return Math.round((name.length * (fontSize / 2)) / 2);
}

Country.prototype.placeName = function(ctx, visible){
	var xSum = 0;
	var ySum = 0;
	for(var i = 0; i < this.points.length; i++){
		xSum += this.points[i].coord.x;
		ySum += this.points[i].coord.y;
	}
	var xLoc = Math.round(xSum / this.points.length);
	var yLoc = Math.round(ySum / this.points.length);
	ctx.fillStyle = "white";
	var fontSize = 20;
	var xOff = nameOffset(this.name, fontSize);
	var yOff = Math.round(fontSize / 2);
	ctx.font = fontSize + "px Open Sans";
	ctx.fillText(this.name, xLoc - xOff, yLoc + yOff);
}

Country.prototype.draw = function(ctx){
	if(this.points.length > 0){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(this.points[0].coord.x, this.points[0].coord.y);
		for(var i = 1; i < this.points.length; i++){
			ctx.lineTo(this.points[i].coord.x, this.points[i].coord.y);
		}
		ctx.lineTo(this.points[0].coord.x, this.points[0].coord.y);
		ctx.fill();
		//ctx.stroke();
		ctx.closePath();
		this.placeName(ctx, true);
	}
}

Country.prototype.addOption = function(){
	var html = '<option value="' + this.index + '">' + this.name + '</option>';
	var selector = document.getElementById('select-country');
	selector.innerHTML += html;
}