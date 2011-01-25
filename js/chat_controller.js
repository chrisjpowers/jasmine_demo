var ChatController = function(attributes) {
  this.init(attributes);
};

ChatController.prototype = {
  init: function(attributes) {
    this.form = attributes.form;
    this.messageList = attributes.messageList;
    this.nameField = attributes.nameField;
    this.bodyField = attributes.bodyField;
    this.form.submit($.proxy(this.onFormSubmit, this));
  },

  onFormSubmit: function(event, form) {
    event.preventDefault();
    this.addMessage({
      name: this.nameField.val(),
      body: this.bodyField.val()
    });
  },

  addMessage: function(message) {
    var li = $('<li>').html("<strong>" + message.name + ":</strong> " + message.body);
    this.messageList.append(li);
  }
}