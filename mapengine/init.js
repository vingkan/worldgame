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