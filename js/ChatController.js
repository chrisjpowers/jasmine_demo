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
    var message = new ChatMessage(this.nameField.val(), this.bodyField.val());
    this.addMessage(message);
  },

  addMessage: function(message) {
    this.messageList.append(ChatView.renderMessage(message));
  }
}