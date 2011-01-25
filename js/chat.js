var controller;
$(function() {
  controller = new ChatController({
    form: $("#message_form"),
    messageList: $("#messages"),
    nameField: $("#message_name"),
    bodyField: $("#message_body")
  });
});