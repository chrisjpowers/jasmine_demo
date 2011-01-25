var ChatView = {
  renderMessage: function(message) {
    return $('<li>').html("<strong>" + message.name + ":</strong> " + message.body);
  }
};