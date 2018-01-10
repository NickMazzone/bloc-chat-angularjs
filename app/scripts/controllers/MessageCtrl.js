(function() {
    function MessageCtrl(Message) {
      var allMessages=Message.allMessages;
      allMessages.$loaded().then(
        function(){
          this.messages=allMessages;
        }
      );
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
