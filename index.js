var mongoose = require('mongoose');

var model;

try {
    model = mongoose.model('messages') || require('./model');
} catch (e) {
    model = require('./model');
}

module.exports = model;
