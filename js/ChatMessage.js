var ChatMessage = function(name, body) {
  this.init(name, body);
};

ChatMessage.prototype = (function() {
  // private methods
  function isPresent(obj) {
    return !(obj == null || obj == '');
  }

  // public methods
  return {
    init: function(name, body) {
      this.name = name;
      this.body = body;
    },

    isValid: function() {
      return isPresent(this.name) && isPresent(this.body);
    },

    errorMessage: function() {
      if(!isPresent(this.name)) {
        return 'Please enter your name.';
      }
      else if(!isPresent(this.body)) {
        return 'Please enter a message.';
      }
    }
  };
})();
