"use strict";
///<reference path="add.d.ts"/>
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(function () {
    function post(url, data) {
        if (window.jQuery) {
            return window.jQuery.post(url, data);
        }
        else if (window.fetch) {
            return window.fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        else {
            throw new Error('No compatible XHR wrapper found');
        }
    }
    function updateVariantCount(variantId) {
        var _a;
        post('/cart/update.js', {
            updates: (_a = {}, _a[variantId] = 1, _a)
        });
    }
    function hideCartItems(variantId) {
        var e_1, _a;
        if (window.location.pathname !== '/cart') {
            return;
        }
        var rows = Array.prototype.slice.call(document.querySelectorAll('.cart__row'));
        try {
            for (var rows_1 = __values(rows), rows_1_1 = rows_1.next(); !rows_1_1.done; rows_1_1 = rows_1.next()) {
                var row = rows_1_1.value;
                var isVariantRow = Boolean(row.querySelector("a[href*=\"" + variantId + "\"]"));
                if (!isVariantRow) {
                    continue;
                }
                row.style.display = 'none';
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rows_1_1 && !rows_1_1.done && (_a = rows_1.return)) _a.call(rows_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    function registerListener(variantId) {
        updateVariantCount(variantId);
        if (!window.Shopify) {
            console.error('No Shopify global found');
            return;
        }
        window.Shopify.onCartUpdate = updateVariantCount.bind(variantId);
    }
    window.ShopifyAddToCart = {
        autoAdd: registerListener,
        hideCartItems: hideCartItems
    };
})();
