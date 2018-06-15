//this looks very similar to the AJAX method 
// AXIOS is making a GET request to the omdb API url with a query a parameter, along 
	//with the API Key and then returning the response
//we then go to the promise, where a response is used to update the state 	 

//res.data will be the new value of the result property of STATE 
//and if there is an error we console.log it 

import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
 
