export type AddToCartFn = (variantId: string) => void;

declare global {
  interface Window {
    autoAddToCart: AddToCartFn;
    Shopify: {
      onCartUpdate: () => void;
    };
    jQuery: {
      post: (url: string, body: object) => Promise<void>;
    }
  }
}

function autoAddToCart(variantId: string) {
  window.Shopify.onCartUpdate = function() {
    window.jQuery.post('/cart/update.js', {
      updates: { [variantId]: 1 }
    });
  };
}

window.autoAddToCart = autoAddToCart;
