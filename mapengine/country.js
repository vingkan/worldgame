function Country(name, color){
	this.name = name || "New Country";
	this.color = color || "black";
	this.points = [];
}

Country.prototype.pushPoint = function(point){
	this.points.push(point);
	log("Added " + point.toString() + " to " + this.name);
}

Country.prototype.draw = function(ctx){
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(this.points[0].coord.x, this.points[0].coord.y);
	for(var i = 1; i < this.points.length; i++){
		ctx.lineTo(this.points[i].coord.x, this.points[i].coord.y);
	}
	ctx.lineTo(this.points[0].coord.x, this.points[0].coord.y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

}

Country.prototype.addOption = function(){
	var html = '<option value="' + this.name + '">' + this.name + '</option>';
	var selector = document.getElementById('select-country');
	selector.innerHTML += html;
}