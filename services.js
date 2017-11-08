angular.module('myApp', [])
    .service('sharedProperties', function () {
        var iflike = '';


        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });
