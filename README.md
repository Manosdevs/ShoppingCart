A super-market inspired shopping cart using the <a href=https://dummyjson.com/ >Dummyjson products API </a>. Has 3 main pages, the landing/categories page, a page with the products of each category and a checkout page. The cart button triggers an offcanvas with the cart's content. Making this project, I learned a lot about CSS, structuring a website, and of course states as well as saving data in local storage.

Technologies used: <ul><li>HTML</li><li>CSS</li><li>React</li></ul>



<h2>TimeLine</h2>

Initially started out using Bootstrap for the Navbar and the offcanvas, however I quickly decided to make the product cards myself, as I thought I'd learn a lot
doing so. Did the same for the product section in the offcanvas, and admittedly the code was (some leftover parts probably still are) very messy. I made a model for the product cards, mapped over the database and rendered everything 

As far as the cart functionality goes, after very quickly realizing the issues with saving everything in a state, I switched to saving it in local storage. I saved the added items as an object with an id and an amount, and added the needed functions to modify those. Some issues arose while passing the props to the product card and updating the in-cart amounts accurately. I fixed those by adding a variable into the product card model that kept a counter for each one. And of course that was also a bad idea because saving a variable in local state for each and every item in the product database is not scaleable. I fixed that by only initializing it for the already in-cart items, and after a review I commited the initial version.

A while later, as I was learning about React's context API, this app came to mind as I realized that the issues I encountered were because I didn't know how to properly pass the needed states in a global scope.
So after a quick revisit, I remade the functionality with a contextProvider as well as added a checkout and a product category page. 
