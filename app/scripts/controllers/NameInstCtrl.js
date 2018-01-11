(function() {
    function NameInstCtrl($uibModalInstance) {
      this.username='';
      this.submit = function(){
        $uibModalInstance.close(this.username);
      };
    }

    angular
        .module('blocChat')
        .controller('NameInstCtrl', ['$uibModalInstance', NameInstCtrl]);
})();
