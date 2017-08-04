angular.module('starter.tooltip', [])
    .directive('tooltip', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (attrs.title) {
                    var $element = $(element);
                    $element.attr("title", attrs.title);
                }
            }
        };
    });
