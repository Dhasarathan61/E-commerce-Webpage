var productscontainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productscontainer.querySelectorAll(".products-box");
var menuToggle = document.querySelector('.navbar-menu-toggle');
var navbarLinks = document.querySelector('.navbar-links');

// menuToggle.addEventListener('click', function() {
//     navbarLinks.classList.toggle('show');
// });

search.addEventListener("keyup", function(event) {
    var enterValue = event.target.value.toUpperCase();

    // If input is empty, show all products
    if (enterValue === "") {
        for (var count = 0; count < productlist.length; count++) {
            productlist[count].style.display = "block";
        }
    } else {
        for (var count = 0; count < productlist.length; count++) {
            var productname = productlist[count].querySelector("p").textContent.toUpperCase();
            
            // Check if the product name matches the search query
            if (productname.indexOf(enterValue) < 0) {
                productlist[count].style.display = "none";
            } else {
                productlist[count].style.display = "block";
            }
        }
    }
});
// Function to show the side navbar
function showNavbar() {
    document.querySelector('.side-navbar').style.display = 'block';
}

// Function to close the side navbar
function closeNavbar() {
    document.querySelector('.side-navbar').style.display = 'none';
}
