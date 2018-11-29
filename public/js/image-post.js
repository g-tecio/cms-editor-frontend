var staged_img = [];
var apiUrl = "https://sjazup8js9.execute-api.us-west-1.amazonaws.com/dev/posts"

function stageImg(img_url) {
    staged_img.push(img_url);
}

function savePost() {
    let date = new Date().getTime().toString();

    let post = {
        title: document.getElementById('titlePost').value,
        images: staged_img
    }
    console.log(JSON.stringify(post));

    $.ajax({
        type: "POST", 
        url: apiUrl, 
        crossDomain: true,
        data: JSON.stringify(post), 
        contentType: "application/json",
        dataType: "json", 
        success: function(data, status) {
            console.log("Data: " + data + " Status: " + status);
            alert("You're a god!!!");
        }
    });
    
}