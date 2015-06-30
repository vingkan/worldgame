function CanvasMap(id){
	this.id = id;
	this.points = [];
	this.countries = [];

}

CanvasMap.prototype.pushPoint = function(point){
	this.points.push(point);
	log(point.toString());
}

CanvasMap.prototype.pushCountry = function(country){
	this.countries.push(country);
	log("Added " + country.name + " to the map.");
	country.addOption();
}

CanvasMap.prototype.searchCountryName = function(name){
	var response = null;
	for(var i = 0; i < this.countries.length; i++){
		log(this.countries[i].name + " == " + name);
		if(this.countries[i].name == name){
			response = this.countries[i];
		}
	}
	return response;
}