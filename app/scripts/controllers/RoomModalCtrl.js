(function() {
    function RoomModalCtrl(Room, $uibModal) {

        this.open = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'RoomInstCtrl',
                controllerAs: 'roomInstCtrl',
                size: 'sm',
                templateUrl: "/templates/roomModal.html"
            });
            modalInstance.result.then(function(name) {
                Room.add(name);
            }, function() {
                console.log("Modal was dismissed");
            });
        }
    }

    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['Room', '$uibModal', RoomModalCtrl]);
})();
