(function() {
  function BlocChatCookies ($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      var modalInstance=$uibModal.open({
           animation: true,
           keyboard: false,
           controller: 'NameInstCtrl',
           controllerAs: 'nameInstCtrl',
           size: 'sm',
           templateUrl: "/templates/usernameModal.html"
       });
       modalInstance.result.then(function(username){
           $cookies.put('blocChatCurrentUser', username);
           console.log(username);
       });
      }
    console.log(currentUser);
    }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
