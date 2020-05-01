const db = require('./index.js');

module.exports = {
  getProduct: ({id}, callback) => {

    let queryStr = `SELECT * FROM products WHERE id = ${id}`;
    db.query(queryStr, (err, results) => {
      if(err){callback(err)}
      else {callback(null, results)}
    });
  },

  postProduct: (obj, callback) => {

    let queryStr = `INSERT INTO products(why_we_made_this, designed_for, features, materials, imgurl1, imgurl2) VALUES ('${obj.whyMade}', '${obj.designedFor}', '${obj.features}', '${obj.materials}', '${obj.imgurl1}', '${obj.imgurl2}')`;
    db.query(queryStr, (err, results) => {
      if(err){callback(err)}
      else {callback(null, results)}
    });
  }

}