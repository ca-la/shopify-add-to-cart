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
