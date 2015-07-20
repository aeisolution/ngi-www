var Iscrizione = Base.extend({
    constructor: function (id, nome, cognome, codicefiscale, pec, idordine,
        ordine, sezione, numero, dataiscrizione, ipaddr, dataupdate, status,
        username, idingegnere) {
        this.id = ko.observable(id);
        this.nome = ko.observable(nome);
        this.cognome = ko.observable(cognome);
        this.codicefiscale = ko.observable(codicefiscale);
        this.pec = ko.observable(pec);
        this.idordine = ko.observable(idordine);
        this.ordine = ko.observable(ordine);
        this.sezione = ko.observable(sezione);
        this.numero = ko.observable(numero);
        this.dataiscrizione = ko.observable(dataiscrizione);
        this.ipaddr = ko.observable(ipaddr);
        this.dataupdate = ko.observable(dataupdate);
        this.status = ko.observable(status);
        this.username = ko.observable(username);
        this.idingegnere = ko.observable(idingegnere);
    },
    toJSON: function(){
        var cleaned = ko.toJS(this);
        return cleaned;
    },
    fromJSON: function (json) {
        this.id(json.id);
        this.nome(json.nome);
        this.cognome(json.cognome);
        this.codicefiscale(json.codicefiscale);
        this.pec(json.pec);
        this.idordine(json.idordine);
        this.ordine(json.ordine);
        this.sezione(json.sezione);
        this.numero(json.numero);
        this.dataiscrizione(json.dataiscrizione);
        this.ipaddr(json.ipaddr);
        this.dataupdate(json.dataupdate);
        this.status(json.status);
        this.username(json.username);
        this.idingegnere(json.idingegnere);
    }
});