
$("#submitBtn").on("click", function(event){
    event.preventDefault();
    let newProduct = {
        name: $("#product-name").val().trim(),
        department: $("#select").val(),
        price: $("#price").val().trim(),
        description: $("#product-description").val().trim(),
        stock: $("#quantity-available").val().trim(),
      }
      $.post("/api/products", newProduct).then(function(response){
          location.href = "/distributors";
      })
})

$("#add-product").click(function(e){
    window.location.href ="localhost:3000/create";
    
});


$('#submit').on('click', function(e){
    e.preventDefault();
    
    if(validate())
    {
        $('form').submit();
    } 
});

function validate(){

    // Remove all error messages and error classes
   $('span.help-block').remove();
   $('.has-error').removeClass('has-error');

   // Validate the name
   var name = $('#name');
   if(name.val()|| '')
   {
       displayError(name, 'Enter the title of the movie.');
       return false;
   }

   // Validate the department
   var department = $('#department');
   if(department.val()|| '')
   {
       displayError(department, 'Enter the genre.');
       return false;
   }

   // Validate the price
   var price = $('#price');
   if(price.val().trim() != "" && !/^\d+[\.]?\d+$/.test(price.val()|| ''))
   {
       displayError(price, 'Price must be a number 0 or greater.');
       return false;
   }

   // Validate the stock for 0 or a whole number greater than 0
   var stock = $('#stock');
   if(stock.val().trim() !== "" && !/^\d+$/.test(stock.val()|| ''))
   {
       displayError(stock, 'Stock must be 0 or a whole number greater than 0.');
       return false;
   }
   return true;
}     

function displayError(el, message){
    // Create a span element with class text-danger
    var $span = $('<span class="help-block">');

    // Add the message passed as argument to the new span
    $span.html('<strong>' + message + '<strong>');

    //Append the span after the input that is not valid
    el.after($span);
   
    // Set the focus 
    el.focus();

    // Add class "has-error to the element's parent"
    el.parent().addClass('has-error');
}



// User authentication
$("#login").on("click", function (event) {
    event.preventDefault();
    let username = $('#username-input').val().trim();

    if (username == "retailer") {
        window.location.href = window.location.origin + "/retailer";
    } else if (username == "distributor") {
        window.location.href = window.location.origin + "/distributors";
    }
    else {
        alert("Not a valid login!");
        location.reload();
    }

});

$("#deleteBtn").on("click", function(){
    // 

    // modal here for confirming delete
    
    let id = $(this).parents("tr").data("id");

    $.ajax({
        method: "DELETE",
        url: `/api/products/${id}`
    }).then(function(response){
        location.reload();
    })
})
