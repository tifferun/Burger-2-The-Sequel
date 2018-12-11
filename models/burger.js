//below is the creation of the variable orm and showing that that variable requires the following path on the url// 

var orm = require("../config/orm.js");

//below is the creation of the variable burger... It also states that burger is a varaible that consists of an object of funcitons and the conditions of that specific function. 

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};

//below states that module.exports is equal to burger as this is the buger.js code.
module.exports = burger;
