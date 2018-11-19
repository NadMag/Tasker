var task = require("../models/task");

exports.create = function(req, res) {
  const { title, description, priority, state, estimate } = req.body;
  var Task = new Task({ title, description });

  Task.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(Task);
  });
};

exports.getById = function(req, res) {
  task.findById(req.params.id, function(err, task) {
    if (err) return next(err);
    res.send(task);
  });
};

exports.getAll = function(req, res) {
  task.find({}, function(err, tasks) {
    if (err) return next(err);
    res.send(tasks);
  });
};

exports.update = function(req, res) {
  task.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    task
  ) {
    if (err) return next(err);
    res.send();
  });
};

exports.delete = function(req, res) {
  task.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
