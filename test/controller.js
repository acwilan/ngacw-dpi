(function() {

    'use strict';

    angular.module('tests', ['acw.directives'])
        .controller('DpiTestController', dpiTestController);

    dpiTestController.$inject = ['$log'];

    function dpiTestController($log) {
        var vm = this;

        vm.title = 'Enter DPI Information below';
    }

})();