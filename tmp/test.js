(function() {
  var Model;

  require('mongo-model/lib/sync');

  Model = require('mongo-model');

  Fiber(function() {
    var Test, test;
    Test = require('./test-model');
    test = new Test({
      message: "don't stop me now"
    });
    test.save();
    return Model.db().close();
  }).run();

}).call(this);
