'use strict';
<%= _.slugify(appname) %> - dev
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var <%= classedName %>
Schema = new Schema({
  str.toLowerCase(<%= classedName %>
      _id): {
      type: Schema.Types.ObjectId,
      ref: '<%= classedName %>'
    },
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('<%= classedName %>', <%= classedName %>
  Schema);
