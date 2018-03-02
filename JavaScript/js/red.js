function angularBootstrap(translations)
{

angular.module('home', ["ui.bootstrap",  "youtube-embed"])
.constant('translations', translations)
.config(['$interpolateProvider', '$httpProvider',
        function ($interpolateProvider, $httpProvider) {

        $interpolateProvider.startSymbol('[[').endSymbol(']]');

        //$locationProvider.html5Mode(true);

        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';


        }])
        .controller('batallasDestacadasCtrl', ['$scope', '$uibModal', function ($scope, $modal) {
                $scope.showBattle = function (slug) {
                    $modal.open({
                        templateUrl: 'modalCompeteHome',
                        windowClass: 'modal-full',
                        controller: 'modalCompeteHomeCtrl',
                        resolve: {
                            "battle": ['$http', function ($http) {
                                return $http.get(Routing.generate('web_home_battle', { slug: slug})).then(function(response){
                                    return response.data;
                                });
                            }]
                        }
                    });
                };
            }])
        .controller('modalCompeteHomeCtrl', ['$scope', '$http', '$interval', '$uibModalInstance', 'battle', 'translations', function ($scope, $http, $interval, $modalInstance, battle, translations) {
                $scope.battle = battle;
                $scope.playerVars = {
                    controls: 1,
                    autoplay: 0,
                    rel: 0
                };

                $scope.word = "";
                $scope.player1 = null;
                $scope.player2 = null;
                $scope.timeRemaining = 60;

                $scope.$on("youtube.player.ready", function (evt, player) {
                    if (player.id === "ytplayer1")
                        $scope.player1 = player;
                    else if (player.id === "ytplayer2")
                        $scope.player2 = player;
                });

                $scope.$on("youtube.player.playing", function (evt, player) {
                    if (player.id === "ytplayer1" && player.getPlayerState() === 1) {
                        if ($scope.player2 !== null)
                        {
                            $scope.player2.pauseVideo();
                        }
                    }

                    if (player.id === "ytplayer2" && player.getPlayerState() === 1) {
                        if ($scope.player1 !== null)
                        {
                            $scope.player1.pauseVideo();
                        }
                    }
                });

                var words = (translations.introduction + "," + battle.words).split(",");

                var stop = $interval(function () {
                    var time = undefined;
                    if ($scope.player1 !== null && $scope.player1.getPlayerState() === 1) {
                        time = $scope.player1.getCurrentTime();
                    }

                    if ($scope.player2 !== null && $scope.player2.getPlayerState() === 1) {
                        time = $scope.player2.getCurrentTime();
                    }

                    if (time)
                    {
                        $scope.timeRemaining = Math.floor(Math.max(60 - time, 0));
                        $scope.word = words[Math.min(Math.floor(time / 10), 5)];
                    }
                }, 500);

                $scope.$on("$destroy", function () {
                    $interval.cancel(stop);
                });
            }]);

            angular.element(document).ready(function () {
            angular.bootstrap(document, ['home']);
        });
}

var request = $.ajax({
    url: Routing.generate("web_dictionary", { domain: 'messages'}),
    method: "GET",
    dataType: "json"
});

$.when(request).done(function(dict){
        angularBootstrap(dict);
});
