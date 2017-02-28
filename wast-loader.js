var wast2wasm = require("wast2wasm");

module.exports = function(wast) {
    this.cacheable();
    var callback = this.async();

    wast2wasm(wast, true).then(function(out) {
        var bytes = [].slice.call(out.buffer);
        callback(null, "module.exports = " + JSON.stringify(bytes) + ";");
    });
};
