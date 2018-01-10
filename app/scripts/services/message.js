(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("Messages");
    var allMessages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      console.log("get messages for " + roomId);
      this.messages = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      console.log(this.messages);
      console.log(allMessages);
      return this.messages;
    };

    return Message;
  };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
