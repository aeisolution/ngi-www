// app/blog/posts.js

(function () {
    'use strict';
    var controllerId = 'blogPostsCtr';
    angular.module('app').controller(controllerId, ['common', '$scope', '$modal', 'datacontext', blogPostsCtr]);

    function blogPostsCtr(common,$scope, $modal, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'gruppi';
        vm.posts = [];
        $scope.posts = vm.posts;

        vm.filter = null;


        //ACTIVATE *****************************************
        activate();

        function activate() {
            var promises = [getBlogPosts()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Blog Posts View'); });
        }

        //WATCH 
        $scope.$watch("posts", function (newValue, oldValue, scope) {
            console.log("vm.posts change!");

            $(".gridalicious-item").gridalicious({
                width: 340,
                gutter: 12,
                animate: true,
                effect: 'fadeInOnAppear'
            });

        }, true);

        //****************************************************
        // METODI 
        //****************************************************
        function getBlogPosts() {
            return datacontext.getBlogPosts().then(function (data) {
                return vm.posts = data;
            });
        }
    }
})();