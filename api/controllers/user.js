var User = require("../models/user");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.create = function(req, res) {
  var user = new User({
    name: req.body.name
  });

  user.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(user);
  });
};

exports.getById = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return next(err);
    res.send(user);
  });
};

exports.getAll = function(req, res) {
  User.find({}, function(err, users) {
    if (err) return next(err);
    res.send(users);
  });
};

exports.update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send();
  });
};

exports.delete = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
