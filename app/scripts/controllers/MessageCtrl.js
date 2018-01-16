(function() {
    function MessageCtrl(Message, $cookies) {
      this.send = function(roomId){
        var messageObject= {
          content: this.message,
          roomId: roomId,
          username: $cookies.get("blocChatCurrentUser"),
          sentAt: new Date().toISOString()
        };
        Message.send(messageObject);
        this.message="";
      };
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', '$cookies', MessageCtrl]);
})();
