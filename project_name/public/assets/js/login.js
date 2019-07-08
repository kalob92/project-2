
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


