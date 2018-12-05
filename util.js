Context = function () {
    this.doc = (document.currentScript || document._currentScript).ownerDocument;
};

Context.prototype.import = function (id) {
    return document.importNode(this.doc.querySelector('#' + id).content, true);
};

function NewElement(name, proto) {
    var ep = Object.create(HTMLElement.prototype);
    Object.keys(proto).forEach(function (key) {
        ep[key] = proto[key];
    });
    document.registerElement(name, {
        prototype: ep
    });
}
