var ChatController = function(attributes) {
  this.init(attributes);
};

ChatController.prototype = {
  init: function(attributes) {
    this.form        = attributes.form;
    this.messageList = attributes.messageList;
    this.nameField   = attributes.nameField;
    this.bodyField   = attributes.bodyField;
    this.form.submit($.proxy(this.onFormSubmit, this));
  },

  onFormSubmit: function(event, form) {
    event.preventDefault();
    var message = new ChatMessage(this.nameField.val(), this.bodyField.val());
    if(message.isValid() && !message.isFilthy()) {
      this.addMessage(message);
      this.resetFields();
    } else {
      this.displayError(message.errorMessage());
    }
  },

  addMessage: function(message) {
    this.messageList.prepend(ChatView.renderMessage(message));
  },

  displayError: function(str) {
    alert(str);
  },

  resetFields: function() {
    this.bodyField.val('');
  }
};