(function() {
    function NameModalCtrl($cookies, $uibModal) {

        this.open = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'NameInstCtrl',
                controllerAs: 'nameInstCtrl',
                size: 'sm',
                templateUrl: "/templates/usernameModal.html"
            });
            modalInstance.result.then(function(username){
                $cookies.put('blocChatCurrentUser', username);
            });
        }
    }

    angular
        .module('blocChat')
        .controller('NameModalCtrl', ['$cookies', '$uibModal', NameModalCtrl]);
})();
