function Country(name, color, pointsArray){
	this.name = name;
	this.color = color || "#000000";
	this.points = pointsArray || [];
}

Country.prototype.pushPoint = function(point){
	this.points.push(point);
}

Country.prototype.draw = function(){
	if(this.points.length > 0){
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.moveTo(this.points[0].x, this.points[0].y);
		for(var i = 1; i < this.points.length; i++){
			ctx.lineTo(this.points[i].x, this.points[i].y);
		}
		ctx.lineTo(this.points[0].x, this.points[0].y);
		ctx.fill();
		//ctx.stroke();
		ctx.closePath();
		//this.placeName(ctx, true);
	}
}