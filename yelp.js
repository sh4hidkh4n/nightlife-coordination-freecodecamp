let request = require("request");

module.exports = {
  makeRequest: async function(url){
    return new Promise( function(resolve, reject){
      request.get( url , {
        'auth': {
          'bearer': process.env.ACCESS_TOKEN
        }
      }, function(error, res, body){
        resolve(JSON.parse(res.body));
      });
    });
   
  },
  
  getPlaces : async function(query){
    let url = `https://api.yelp.com/v3/businesses/search?term=food&location=${query}`
    return await this.makeRequest(url)
    
  }
}