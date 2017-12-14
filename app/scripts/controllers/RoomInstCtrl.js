(function() {
    function RoomInstCtrl($uibModalInstance) {
      this.name='';
      this.submit = function(){
        $uibModalInstance.close(this.name);
      };
      this.cancel = function(){
        $uibModalInstance.dismiss();
      };
    }

    angular
        .module('blocChat')
        .controller('RoomInstCtrl', ['$uibModalInstance', RoomInstCtrl]);
})();
