function Country(name, color){
	this.name = name || "New Country";
	this.color = color || "black";
	this.nodes = [];
}

Country.prototype.pushNode = function(node){
	this.nodes.push(node);
	log("Added " + node.toString() + " to " + this.name);
}

Country.prototype.draw = function(ctx){
	ctx.fillStyle = this.color;
	ctx.beginPath();
	ctx.moveTo(this.nodes[0].coord.x, this.nodes[0].coord.y);
	for(var i = 1; i < this.nodes.length; i++){
		ctx.lineTo(this.nodes[i].coord.x, this.nodes[i].coord.y);
	}
	ctx.lineTo(this.nodes[0].coord.x, this.nodes[0].coord.y);
	ctx.fill();
	ctx.stroke();
	ctx.closePath();

}