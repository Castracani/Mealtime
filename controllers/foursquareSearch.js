const axios = require("axios");
module.exports = {
  search: function (req, res) {
    const params = Object.assign(
      { client_id: 'MIQBIKQ13K4VDHTL1BEOEURDFWIWH41CGP12MS2QDZ40P3CG' },
      { client_secret: 'RFT0OGRVWUJLZ0B50ER1AJAYI2UKRD2JVS5VE34ER4VOLZDA' },
      { near: 'Lake Mary, Florida' },
      { categoryId: '4d4b7105d754a06374d81259' },
      { radius: 8000 },
      { intent: 'browse' },
      { section: 'food' },
      { v: '20181010' },
      { openNow: 1 },
      { price: [1, 2, 3, 4] },
      { limit: 50 },
      req.query
    );
    axios
      .get("https://api.foursquare.com/v2/venues/search", { params })
      .then()
      //code up above... but what exactly???
  }
};

// request({
//   url: 'https://api.foursquare.com/v2/venues/search',
//   method: 'GET',
//   qs: {
//     client_id: 'MIQBIKQ13K4VDHTL1BEOEURDFWIWH41CGP12MS2QDZ40P3CG',
//     client_secret: 'RFT0OGRVWUJLZ0B50ER1AJAYI2UKRD2JVS5VE34ER4VOLZDA',
//     near: 'Lake Mary, Florida',
//     categoryId: '4d4b7105d754a06374d81259',
//     radius: 8000,
//     intent: 'browse',
//     section: 'food',
//     v: '20180323',
//     openNow: 1,
//     price: [1, 2, 3, 4],
//     limit: 50
//   }
// }, function(err, res, body) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(body);
//   }
// });