function Country(name, color, pointsArray){
	this.name = name;
	this.color = color || "#000000";
	this.points = pointsArray || [];
}

Country.prototype.pushPoint = function(point){
	this.points.push(point);
}