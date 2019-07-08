$("#add-product").on("click", function(event){
    event.preventDefault();
    let newProduct = {
        name: $("#product-name").val().trim(),
        department: $("#select").val(),
        price: $("#price").val().trim(),
        description: $("#product-description").val().trim(),
        stock: $("#quantity-available").val().trim()
      }
      $.post("/api/products", newProduct).then(function(response){
          location.href = "/discributors";
      })
})




// User authentication
$("#login").on("click", function (event) {
    event.preventDefault();
    let username = $('#username-input').val().trim();

    if (username == "retailer") {
        window.location.href = window.location.origin + "/retailer";
    } else if (username == "distributor") {
        window.location.href = window.location.origin + "/distributor";
    }
    else {
        alert("Not a valid login!");
        location.reload();
    }
});


