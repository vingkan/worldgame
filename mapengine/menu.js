function getPosition(event){
	var canvas = document.getElementById('map');
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('nodeCoord-x').value = x;
	document.getElementById('nodeCoord-y').value = y;
	document.getElementById('nodeCoord').style.display = 'block';
}

function newNode(){
	log("called");
	$('map').one('mousedown', function(){
		var canvas = document.getElementById('map');
		var x = event.x;
		var y = event.y;
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		document.getElementById('nodeCoord-x').value = x;
		document.getElementById('nodeCoord-y').value = y;
		document.getElementById('nodeCoord').style.display = 'block';
	});
}

function addNode(){
	var x = document.getElementById('nodeCoord-x').value;
	var y = document.getElementById('nodeCoord-y').value;
	var node = new Node(x, y, map);
	node.draw(ctx);
	closeNode();
}

function closeNode(){
	document.getElementById('nodeCoord-x').value = 0;
	document.getElementById('nodeCoord-y').value = 0;
	document.getElementById('nodeCoord').style.display = 'none';
}