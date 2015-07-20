define('admin/iscrizione.index', ['ko', 'lodash', 'obj/iscrizione'], function (ko, _, Iscrizione) {
    var viewModel = Base.extend({
        constructor: function () {
            this.items = ko.observableArray();
            this.selectedItem = ko.observable();
        },
        load: function () {
            $.ajax({
                url: '/api/webIscrizione',
                type: 'GET'
            }).success(function (data) {
                this.fromJSON(data);
            }.bind(this)).error(function (jqXR, textStatus, errorThrow) {
                alert('Add error handling');
            }.bind(this));
        },
        fromJSON: function (json) {
            console.log(json);
            this.items([]);

            _.each(json.items, function (jsonItem) {
                console.log(jsonItem);
                var item = new Iscrizione();
                item.fromJSON(jsonItem);
                this.items.push(item);
            }, this);
        }
    });
    return viewModel;
});