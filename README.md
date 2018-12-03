# shopify-add-to-cart

Automatically add a product to every Shopify cart before your customers check
out. Great for gifts, packaging materials, or any other line items you need on
every order.

## Installation

Add the following to your Shopify theme:

```html
<script src='https://ca-la.github.io/shopify-add-to-cart/add.js'></script>
<script>window.ShopifyAddToCart.autoAdd('MY_VARIANT_ID');</script>
```

— Replace `MY_VARIANT_ID` with the ID of the variant for the item you'd like to add to each cart.

## Hiding items from the cart (beta)

```html
<script>window.ShopifyAddToCart.hideCartItems('MY_VARIANT_ID');</script>
```

## Finding your Variant ID

1. Create a Shopify product to represent the item you'd like to add to every cart
   (e.g.  "your free gift").
2. Take the URL of this product in your shopify admin dashboard, and add
   `/variants.json?fields=id` on the end.
   - e.g. My product URL is `https://mystore.myshopify.com/admin/products/1434053640247`,
     so I want to go to `https://mystore.myshopify.com/admin/products/1434053640247/variants.json?fields=id`
3. Grab the ID number that appears on the screen (e.g. `12867262677047`). That's
   your "variant ID" for this gift item.

## Editing your Shopify theme

1. In the sidebar of your admin dashboard, click "Sales Channels" -> "Online Store"
  -> "Themes". From the "Actions" dropdown, select "Edit Code".
2. Find the `theme.liquid` file, scroll to the bottom, and paste the code from
   before, right  before the closing `</body>` tag.
3. Hit Save, and enjoy!

## Contributing to this project

Edit `add.ts`. Uses [Prettier](https://prettier.io/). Run `npm run format`
before commiting.
