describe("ChatController", function() {
  var controller, form, messageList;
  beforeEach(function() {
    form = $("<form>");
    messageList = $("<ul>");
    nameField = $("<input>");
    bodyField = $("<textarea>");
    controller = new ChatController({
      form: form,
      messageList: messageList,
      nameField: nameField,
      bodyField: bodyField
    });
  });

  describe("initialization", function() {
    it("should accept a form", function() {
      expect(controller.form).toEqual(form);
    });

    it("should accept a messageList", function() {
      expect(controller.messageList).toEqual(messageList);
    });

    it("should accept a nameField", function() {
      expect(controller.nameField).toEqual(nameField);
    });

    it("should accept a bodyField", function() {
      expect(controller.bodyField).toEqual(bodyField);
    });
  });

  describe("addMessage", function() {
    it("should add a formatted li to messageList", function() {
      controller.addMessage({name: "Chris", body: "Hello"});
      expect(controller.messageList.find('li').html()).toEqual("<strong>Chris:</strong> Hello");
    });
  });

});