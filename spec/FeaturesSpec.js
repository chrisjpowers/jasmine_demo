describe("Acceptance Requirements", function() {
  var fixture, controller;
  beforeEach(function() {
    jasmine.getFixtures().load("form.html");

    controller = new ChatController({
      form: $("#message_form"),
      messageList: $("#messages"),
      nameField: $("#message_name"),
      bodyField: $("#message_body")
    });
  });

  describe("filling out the message form", function() {
    it("should display my name and message in the message list", function() {
      $("#message_name").val("Chris");
      $("#message_body").val("Hello");
      $("#message_form").submit();
      var messages = $("#messages");
      var lis = messages.find("li");
      expect(lis.length).toEqual(1);
      expect(lis.eq(0).html()).toEqual("<strong>Chris:</strong> Hello");
    });
  });
});