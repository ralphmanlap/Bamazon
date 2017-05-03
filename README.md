# Bamazon
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory.

Start Bamazon Customer by running 'node bamazonCustomer.js'

Once run, it will give the list of all available products along with their item id, department, and price.

Prompt will first as for the item id of the product you wish to purchase and then the quantity of said product.

	If the quantity requested is not available, app will give an alert saying exactly how many are actually available.

	If number of requested product is available, it will show how many you purchased along with how much it cost.

Once order goes through, the database will update with how many is left of the specified product and will be logged in the console.