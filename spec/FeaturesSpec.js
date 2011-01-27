describe("Features", function() {
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
    describe("with filthy language", function() {
      it("should not post a message if the body includes 'drat'", function() {
        $("#message_name").val("Chris");
        $("#message_body").val("Hello drat");
        $("#message_form").submit();
        expect($("#messages li").length).toEqual(0);
      });
    });

    describe("with valid data", function() {
      beforeEach(function() {
        $("#message_name").val("Chris");
        $("#message_body").val("Hello");
        $("#message_form").submit();
      });

      it("should display my name and message in the message list", function() {
        var messages = $("#messages");
        var lis = messages.find("li");
        expect(lis.length).toEqual(1);
        expect(lis.eq(0).html()).toEqual("<strong>Chris:</strong> Hello");
      });

      it("should clear the body field", function() {
        expect($("#message_body").val()).toEqual('');
      });
    });

    describe("with missing fields", function() {
      beforeEach(function() {
        spyOn(window, 'alert');
      });

      it("should display an error if name is blank", function() {
        $("#message_name").val("");
        $("#message_body").val("Hello");
        $("#message_form").submit();
        expect($("#messages li").length).toEqual(0);
        expect(window.alert).toHaveBeenCalledWith("Please enter your name.");
      });

      it("should display an error if name is blank", function() {
        $("#message_name").val("Chris");
        $("#message_body").val("");
        $("#message_form").submit();
        expect($("#messages li").length).toEqual(0);
        expect(window.alert).toHaveBeenCalledWith("Please enter a message.");
      });
    });
  });
});