(function () {
  'use strict';

  angular.module('BlurAdmin.pages.videos.allVideos', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('videos.allVideos', {
          url: '/allVideos',
          templateUrl: 'BlurAdmin.pages.videos.allVideos.allVideos.html',
          title: 'All Videos',
          sidebarMeta: {
            //icon: 'ion-compose',
            order: 800,
          },
        });
  }

})();
