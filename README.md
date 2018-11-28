# shopify-add-to-cart

Automatically add a product to every Shopify cart before your customers check
out. Great for gifts, packaging materials, or any other line items you need on
every order.

## Usage

1. Create a Shopify product to represent the item you'd like to add to every cart
   (e.g.  "your free gift").
2. Take the URL of this product in your shopify admin dashboard, and add
   `/variants.json?fields=id` on the end.
   - e.g. My product URL is `https://mystore.myshopify.com/admin/products/1434053640247`,
     so I want to go to `https://mystore.myshopify.com/admin/products/1434053640247/variants.json?fields=id`
3. Grab the ID number that appears on the screen (e.g. `12867262677047`). That's
   your "variant ID" for this gift item.
4. Edit your Shopify theme code
   - In the sidebar: "Sales Channels" -> "Online Store" -> "Themes" -> "Actions" -> "Edit Code".
5. Find the `theme.liquid` file, scroll to the bottom, and paste this right before
   the `</body>` tag:

```html
<script src='https://shopify-add-to-cart.ca.la/add.js'></script>
<script>window.autoAddToCart('12345');</script>
```

Replace `12345` with the ID number you got in step 3 above.

Hit save, and enjoy!
