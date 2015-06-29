var getPosition = function getPosition(event){
	var canvas = document.getElementById('map');
	var x = event.x;
	var y = event.y;
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	document.getElementById('nodeCoord-x').value = x;
	document.getElementById('nodeCoord-y').value = y;
	document.getElementById('nodeCoord').style.display = 'block';
	canvas.removeEventListener('click', getPosition);
}

function newNode(){
	var canvas = document.getElementById('map');
	canvas.addEventListener('click', getPosition);
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