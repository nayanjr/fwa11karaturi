var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // Build a fake url so we can get the search parameters using a URL object
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  var input = Math.floor((Math.random() * 100) + 1)
  var output = null
  if(search_params.get("x")){
    input = search_params.get("x")
  }
  
   
  res.write(`Math.pow() applied to ${input} is ${Math.pow(input)}\n`);
  res.write(`Math.sign() applied to ${input} is ${Math.sign(input)}\n`);
  res.write(`Math.tanh() applied to ${input} is ${Math.tanh(input)}\n`);
  res.write(`Math.trunc() applied to ${input} is ${Math.trunc(input)}`);
});

module.exports = router;

   
   