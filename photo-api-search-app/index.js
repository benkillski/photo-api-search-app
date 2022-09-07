const apiKey = "563492ad6f917000010000016e91732b17cf466a822cb5f55bf38b06";

$("#search-form").submit(function(e) {
    e.preventDefault();

    let query = $("#search-bar").val();

    $.ajax({
        method: "GET",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", apiKey);
        },
        url: "https://api.pexels.com/v1/search?query=" + query + "&per_page=15&page=1",
        success: function(data) {
            console.log(data);
        },
        error: function(error)
        {
            console.log(error);
        }
    });
});