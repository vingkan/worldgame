function CanvasMap(id){
	this.id = id;
	this.points = [];

}

CanvasMap.prototype.pushPoint = function(point){
	this.points.push(point);
	log(point.toString());
}