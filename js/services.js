angular.module('app.services', [])

.factory('Devices', ['$resource', function($resource) {
    //
    return $resource('http://128.199.182.63:3030/devices/:deviceId', {deviceId: 353180003203240},
    {
        'update': { method:'PUT' },
        'patch': { method: 'PATCH' }
    });
}]);

/*
.factory('Device', [function(){

  // Some fake testing data
  var device = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

}])

.service('BlankService', [function(){

}]);
*/
