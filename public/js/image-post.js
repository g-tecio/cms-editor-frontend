var staged_img = [];
var apiUrl = " https://arivkc4qr0.execute-api.us-west-2.amazonaws.com/dev/posts"

function stageImg(img_url) {
    staged_img.push(img_url);
}

function savePost() {
    let post = {
        guid: new Date().getDate().toString,
        title: document.getElementById('titlePost').value,
        images: staged_img,
        thumbnail: staged_img[0]
    }
    return fetch(apiUrl, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(post), // body data type must match "Content-Type" header
    });
    console.log(post);
}