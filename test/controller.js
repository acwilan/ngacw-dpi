(function(angular) {

    'use strict';

    angular.module('tests')
        .controller('DpiTestController', dpiTestController);

    dpiTestController.$inject = ['$log'];

    function dpiTestController($log) {
        var vm = this;

        vm.title = 'Enter DPI Information below';
    }

})(window.angular);