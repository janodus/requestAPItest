var request = require("request");

request('http://www.google.com', function(error, response, body){
    if(error) {
      console.log("something went wrong");
      console.log(error);
    }
    else if(response.statusCode === 200) {
    //successful response
    console.log(body) // shows the HTML for the requested page if there are no errors and status code is a 'go'no
    }
});