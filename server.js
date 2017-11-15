const express = require('express'),
      app = express(),
      yelp = require("./yelp")
;

app.use(express.static('public'));
app.set('view engine', 'pug')

app.get("/", function (request, response) {
  response.render('index');
});

app.get("/places/:query", async function(req, res){
  let results = await yelp.getPlaces(req.params.query)
  res.json(results)
})



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
