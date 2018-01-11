(function() {
  function BlocChatCookies ($cookies, $uibModal, NameModalCtrl) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      NameModalCtrl.open;
      }
    }
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', 'NameModalCtrl', BlocChatCookies]);
})();
