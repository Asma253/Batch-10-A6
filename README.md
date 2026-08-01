Peddy - pet adoption website


Description :
Peddy is a pet adoption  website that helps connect loving families with pets in need of a home.Users can brows available pets by category(Dogs,Cats,Rabits ,Birds) and view detail information about each pet ,sort listing by price ,save their favourite pets and start the adoption process -all through a clean responsive interface  powered by a live pet adoption API.


key features
1. category based browsing : filter pets by type (Dogs,Cats ,Rabits ,Birds) with a single click ,fetch the live data from the  API.
2. 2.Pet Detailes modal : wth click on "details" on any pet card to open a modal with in-depth information, including breed ,vaccination status ,date-of-birth and full pet description.
3.Favourites /like system: click the like (thumbs-up) button on the pet card to save its image to a dedicated favourites panel,with duplicate prevention.
4.sort by price: instantly reorder the pet listing from highest to lowest price with the "sort by price "button.
5.Adoption Configuration model: clicking the "adopt" button triggers a congratulations modal with a live count before automatically closed.


ES6 Features Used:
1.Arrow Functions – Used throughout for concise function definitions, e.g. `const allPet = async () => { ... }` and `const likeButton = (image) => { ... }`.

2.async` / await – Used to handle asynchronous API calls cleanly, e.g. `const data = await response.json();` inside `allPet()`, `LoadCategory()`, and `detailsBtn()`.
 
3.`fetch()` with Promises – Used to retrieve pet data from the API endpoints.
 
  4.Template Literals – Used extensively to inject dynamic data into HTML strings, e.g. `` `Breed: ${pet.breed}` `` and dynamic API URLs like `` `https://openapi.programming-hero.com/api/peddy/category/${category}` ``.
  
5.setInterval / setTimeout with Arrow Functions – Used to power the loading spinner delay and the adoption countdown modal.


Live Link

https://asma253.github.io/Batch-10-A6/







