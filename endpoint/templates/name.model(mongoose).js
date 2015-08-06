'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  autoIncrement = require('mongoose-auto-increment');
  autoIncrement.initialize(mongoose);

var prop = {
    name: String,
    info: String,
    active: Boolean
};

var key  = '<%= classedName %>'.concat('_id').toLowerCase();
      prop [key] = {
        type: Schema.Types.ObjectId,
        ref: '<%= classedName %>'
      };

var <%= classedName %>Schema = new Schema(prop);

<%= classedName %>Schema.plugin(autoIncrement.plugin,
              {model:'<%= classedName %>',
                field : key.toString(),
                startAt:1

              }
  );


module.exports = mongoose.model('<%= classedName %>', <%= classedName %>Schema);
