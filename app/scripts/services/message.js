(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var allMessages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      console.log("get messages for " + roomId);
        // Filter the messages by their room ID.
      this.messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      console.log(messages);
      return this.messages;
    };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
