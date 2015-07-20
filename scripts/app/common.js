require.config({
    paths: {
        base: "/Scripts/base",
        ko: "/Scripts/knockout-3.0.0.debug",
        jquery: "/Scripts/jquery-1.10.2",
        bootstrap: "/Scripts/bootstrap",
        lodash: "/Scripts/lodash",
        toastr: "/Scripts/toastr"
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        'toastr': {
            deps: ['jquery'],
            exports: 'Toastr'
        }
    },
    baseUrl: "/Scripts/app"
});

