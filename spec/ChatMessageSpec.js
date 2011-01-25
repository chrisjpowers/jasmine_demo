describe("ChatMessage", function() {
  var message;
  beforeEach(function() {
    message = new ChatMessage("Chris", "Hello");
  });

  it("should accept and store the name", function() {
    expect(message.name).toEqual("Chris");
  });

  it("should accept and store the body", function() {
    expect(message.body).toEqual("Hello");
  });
});