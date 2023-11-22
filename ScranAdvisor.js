const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
//counting all the number of Restaurants
ScranAdvisor.prototype.countAllRestaurants = function(){
    return this.restaurants.length;
}

//can find Happy Lamb Hot Pot restaurant full name
ScranAdvisor.prototype.findRestaurantName = function(name){
    return this.restaurants.find(restaurant => restaurant.name === name);
}
//restaurants ==
//restaurant == 

//can find the name of all restaurants
ScranAdvisor.prototype.findAllRestaurantsByName = function(){
    return this.restaurants.map(restaurant => restaurant.name);
}

ScranAdvisor.prototype.restaurantsByLocation = function(location){
    return this.restaurants.filter(restaurant => restaurant.location.town === location);
}



module.exports = ScranAdvisor;