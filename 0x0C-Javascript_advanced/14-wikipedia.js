function createElement (data) {
    let new_p = document.createElement ("p");
    new_p.textContent = data;
    document.body.appendChild (new_p);
}
function queryWikipedia (callback) {
    let ask_for = new XMLHttpRequest ();
    ask_for.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', false);
    ask_for.send();
    callback(JSON.parse(ask_for.response).query.pages[21721040].extract);
}
queryWikipedia createElement();
