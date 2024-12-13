var express = require('express');
var router = express.Router();

/* POST METHOD */
router.post('/create', function(request, response) {
  response.json({
    status: true,
    message: "VIVA GOKU"
  });
});
module.exports = router;