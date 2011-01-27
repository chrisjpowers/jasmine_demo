describe("ChatMessage", function() {
  var message;
  beforeEach(function() {
    message = new ChatMessage("Chris", "Hello");
  });

  describe("initialization", function() {
    it("should accept and store the name", function() {
      expect(message.name).toEqual("Chris");
    });

    it("should accept and store the body", function() {
      expect(message.body).toEqual("Hello");
    });
  });

  describe("isValid", function() {
    it("should return true if name and body are present", function() {
      expect(message.isValid()).toBeTruthy();
    });

    it("should return false if name is blank", function() {
      message.name = '';
      expect(message.isValid()).toBeFalsy();
    });

    it("should return false if body is blank", function() {
      message.body = '';
      expect(message.isValid()).toBeFalsy();
    });

    it("should return false if name is null", function() {
      message.name = null;
      expect(message.isValid()).toBeFalsy();
    });

    it("should return false if body is null", function() {
      message.body = null;
      expect(message.isValid()).toBeFalsy();
    });
  });

  describe("isFilthy", function() {
    it("should return true if body includes the word drat", function() {
      var msg = new ChatMessage("Chris", "Hello drat");
      expect(msg.isFilthy()).toBeTruthy();
    });

    it("should return false if body does not include the word drat", function() {
      var msg = new ChatMessage("Chris", "Hello");
      expect(msg.isFilthy()).toBeFalsy();
    });
  });

});