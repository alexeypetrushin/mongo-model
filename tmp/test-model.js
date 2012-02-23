(function() {
  var Model, Test,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  Model = require('mongo-model');

  Test = (function(_super) {

    __extends(Test, _super);

    Test.collection('tests');

    function Test() {
      console.log("Ready, lets go");
    }

    return Test;

  })(Model);

  module.exports = Test;

}).call(this);
