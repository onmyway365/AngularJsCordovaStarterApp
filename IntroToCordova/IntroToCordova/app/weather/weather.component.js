(function (undefined) {

    angular.module('app')
        .component('weather',
        {
            templateUrl: '/app/weather/weather.template.html',
            controller: controller,
            controllerAs: 'vm'
        });

    function controller($http) {
        const vm = this;

        //TODO: Substitue this with your own openweathermap.org API key.
        const apiKey = '80fe230108de347833eb7e052b4b5eaf';

        vm.$init = $init();

        function $init() {
            const city = 'Johannesburg';
            const url = 'http://api.openweathermap.org/data/2.5/weather?' +
                `q=${city},ZA&appid=${apiKey}&units=metric`;

            $http.get(url)
                .then(resp => {
                    vm.weather = resp.data;
                })
                .catch(ex => {
                    vm.ex = JSON.stringify(ex);
                });
        }
    }
})();