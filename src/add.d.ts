// https://shopify.github.io/js-buy-sdk/
// Seems to be included on some (most?) stores by default
interface ShopifyApi {
  onCartUpdate: () => void;
}

interface JQuery {
  post: (url: string, body: object) => Promise<void>;
}

export type VariantFn = (variantId: string) => void;

interface ShopifyAddToCart {
  hideCartItems: VariantFn;
  autoAdd: VariantFn;
}

declare global {
  interface Window {
    ShopifyAddToCart: ShopifyAddToCart;
    Shopify?: ShopifyApi;
    jQuery?: JQuery;
  }
}

