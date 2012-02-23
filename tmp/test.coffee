

Model = require 'mongo-model'
require 'mongo-model/lib/sync'

class global.Thread extends Model
  @collection 'threads'
  @embedded   'messages'

  constructor: (args...) ->
    @messages = []
    super args...

class global.Message extends Model

Fiber(->
  thread = new Thread(name: "test-thread", thread_id: "my-thread-id")
  thread.messages.push new Message(sender_id: 1, receiver_id: 2, body: "woot")
  thread.save()
  # console.log thread
  console.log thread.toHash()
  Model.db().close()
).run()