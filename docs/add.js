(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function autoAddToCart(variantId) {
        window.Shopify.onCartUpdate = function () {
            var _a;
            window.jQuery.post('/cart/update.js', {
                updates: (_a = {}, _a[variantId] = 1, _a)
            });
        };
    }
    window.autoAddToCart = autoAddToCart;
});
