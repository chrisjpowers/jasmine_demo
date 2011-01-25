var ChatMessage = function(name, body) {
  this.init(name, body);
};

ChatMessage.prototype = {
  init: function(name, body) {
    this.name = name;
    this.body = body;
  }
};