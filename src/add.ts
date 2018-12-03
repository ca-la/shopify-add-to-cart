///<reference path="add.d.ts"/>

(function() {
  function post(url: string, data: object): Promise<any> {
    if (window.jQuery) {
      return window.jQuery.post(url, data);
    } else if (window.fetch) {
      return window.fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } else {
      throw new Error('No compatible XHR wrapper found');
    }
  }

  function updateVariantCount(variantId: string) {
    post('/cart/update.js', {
      updates: { [variantId]: 1 }
    });
  }

  function hideCartItems(variantId: string): void {
    if (window.location.pathname !== '/cart') { return; }
    const rows = Array.prototype.slice.call(document.querySelectorAll('.cart__row'));

    for (const row of rows) {
      const isVariantRow = Boolean(row.querySelector(`a[href*="${variantId}"]`))
      if (!isVariantRow ) { continue; }
      row.style.display = 'none';
    }
  }

  function registerListener(variantId: string) {
    updateVariantCount(variantId);

    if (!window.Shopify) {
      console.error('No Shopify global found');
      return;
    }

    window.Shopify.onCartUpdate = updateVariantCount.bind(variantId);
  }

  window.ShopifyAddToCart = {
    autoAdd: registerListener,
    hideCartItems
  };
})();
