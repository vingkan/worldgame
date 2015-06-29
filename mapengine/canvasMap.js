function CanvasMap(id){
	this.id = id;
	this.nodes = [];

}

CanvasMap.prototype.pushNode = function(node){
	this.nodes.push(node);
	log(node.toString());
}