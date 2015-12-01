'use strict';
/**
 * @ngdoc directive
 * @name demoApp.directive:ng-playonload
 * @description
 * # ng-playonload
 */
angular.module('demoApp')
  .directive('ngPlayonload', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        var el = element[0];
        if (el.tagName !== 'VIDEO' && el.tagName !== 'AUDIO') {
          console.log('"playonload" attribute was used not on media tag.');
          return false;
        }
        el.addEventListener('canplaythrough',function(e){
          var element = e.target;
          var $element = angular.element(element);
          $element.addClass('loaded');
          element.play();
        });
      }
    };
  });
