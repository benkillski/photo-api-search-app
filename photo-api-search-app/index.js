const apiKey = "563492ad6f917000010000016e91732b17cf466a822cb5f55bf38b06";
const pexelsUrl = "https://api.pexels.com/v1/search";

$.ajax({
    type: "GET",
    url: pexelsUrl,
    beforeSend: function(xhr) {
        xhr.setRequestHeader("Authorization", apiKey);
    },
    success: function(data) {
        console.log(data);
    }
});