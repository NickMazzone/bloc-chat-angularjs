(function() {
    function NameInstCtrl($uibModalInstance) {
      this.username='';
      this.submit = function(){
          if (/\S/.test(this.username)==false) {
            alert("Sorry! Username must contain at least one character!");
          } else {
            $uibModalInstance.close(this.username);
          }
      };
    }
    angular
        .module('blocChat')
        .controller('NameInstCtrl', ['$uibModalInstance', NameInstCtrl]);
})();
