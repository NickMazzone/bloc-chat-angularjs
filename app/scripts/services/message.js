(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var allMessages = $firebaseArray(ref);
    this.allMessages = allMessages;

    Message.getByRoomId = function(roomId) {
      console.log("get messages for " + roomId);
      this.messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      return this.messages;
    };

    Message.send = function(newMessage){
      console.log(newMessage);
      allMessages.$add(newMessage);
      //firebase      (username    + content)
    };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
