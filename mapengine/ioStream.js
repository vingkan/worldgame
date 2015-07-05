function IOStream(){
	this.lines = [];
	this.countryIndex = null;
}

function stream(){
	readInLines();
	ioStream.runLines();
}

function readInLines(){
	var lines = [];
	var ioBox = document.getElementById('ioBox');
	var parse = ioBox.value;
	var newLine = "";
	for(var i = 0; i < parse.length; i++){
		if(parse.charAt(i) == '\n'){
			lines.push(newLine);
			newLine = "";
		}
		else{
			newLine += parse.charAt(i);
		}
	}
	lines.push(newLine);
	ioStream.lines = lines;
	return lines;
}

IOStream.prototype.runLines = function(){
	for(var i = 0; i < this.lines.length; i++){
		this.command(ioStream.lines[i]);
	}
}

IOStream.prototype.command = function(line){
	var key = line.substr(0,3);
	var command = line.substr(4);
	switch(key){
		case "cty":
			this.createCountry(command);
			break;
		case "pnt":
			this.addPoint(command);
			break;
		default:
			alert("Command Not Found.");
	}
}

IOStream.prototype.createCountry = function(line){
	var name = "";
	var color = "";
	var endQuote = null;
	for(var i = 1; i < line.length; i++){
		if(line.charAt(i) == '"'){
			endQuote = i;
			break;
		}
		name += line.charAt(i);
	}
	var colorStart = endQuote + 2;
	for(var i = colorStart; i < line.length; i++){
		color += line.charAt(i);
	}
	this.countryIndex = newCountry(name, color);
}

IOStream.prototype.addPoint = function(line){
	var coord1 = "";
	var coord2 = "";
	var space = null;
	for(var i = 0; i < line.length; i++){
		if(line.charAt(i) == ' '){
			space = i;
			break;
		}
		coord1 += line.charAt(i);
	}
	var numberStart = space + 1;
	for(var i = numberStart; i < line.length; i++){
		coord2 += line.charAt(i);
	}
	var coord1 = parseInt(coord1, 10);
	var coord2 = parseInt(coord2, 10);
	var point = new Point(coord1, coord2);
	//alert("new Point(" + coord1 + ", " + coord2 + ")");
	map.countries[this.countryIndex].pushPoint(point);
	showAllCountries();
}