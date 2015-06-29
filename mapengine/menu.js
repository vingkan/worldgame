function getPosition(event){
	var x = event.x;
	var y = event.y;
	var canvas = document.getElementById('map');
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('nodeCoord-x').value = x;
	document.getElementById('nodeCoord-y').value = y;
	document.getElementById('nodeCoord').style.display = 'block';
	canvas.removeEventListener('mousedown', getPosition, false);
}

function newNode(){
	var canvas = document.getElementById('map');
	canvas.addEventListener('mousedown', getPosition, false);
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
	var canvas = document.getElementById('map');
	canvas.removeEventListener('mousedown', getPosition);
}