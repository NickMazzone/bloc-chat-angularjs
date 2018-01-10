(function() {
    function HomeCtrl(Message, Room) {
      this.rooms = Room.all;
      this.setRoom = function(room){
        console.log(room);
        this.activeRoom=room;
        this.messages=Message.getByRoomId(room.$id);
      };
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Message', 'Room', HomeCtrl]);
})();
