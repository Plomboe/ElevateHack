// Helpers
//var fs = require("fs")

const calcAge = birthday => {
  now = Date.now();
  birthday = new Date(birthday);
  diff = now - birthday.getTime();
  age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  return age;
}

const distance = (lat1, lon1, lat2, lon2, unit = 'K') => {
  var radlat1 = Math.PI * lat1 / 180
  var radlat2 = Math.PI * lat2 / 180
  var theta = lon1 - lon2
  var radtheta = Math.PI * theta / 180
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist)
  dist = dist * 180 / Math.PI
  dist = dist * 60 * 1.1515
  if (unit == "K") { dist = dist * 1.609344 }
  if (unit == "N") { dist = dist * 0.8684 }
  return dist
}

module.exports = {
  calcAge: calcAge,
  getDistance: distance
}


// fs.readFile("../database/child-care.json", function (err, data) {
//   const mainObj = JSON.parse(data);
//   console.log(mainObj);
// })