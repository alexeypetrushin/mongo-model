Model = require 'mongo-model'

class Test extends Model
  @collection 'tests'

  constructor: () ->
    console.log "Ready, lets go"

module.exports = Test