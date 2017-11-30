(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var Rooms = $firebaseArray(ref);

    Room.all = Rooms;

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
