function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

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

