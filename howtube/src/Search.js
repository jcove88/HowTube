function loadClient() {
    gapi.client.setApiKey("YOUR_API_KEY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }

function ytSearch(keyword) {
    loadClient();
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 5,
      "q": "how to" + keyword
    })
        .then(function(response) {
                return ytSearchResponseHandler(response.json());
              },
              function(err) { console.error("Execute error", err); });
};

function ytSearchResponseHandler(results) {
    const searchResults = []
    results.items.forEach(item => {
        if (item !== "snippet") {
            let url = "https://www.youtube.com/watch?v=" + item.videoId;
            searchResults.push(url)
        }
    });
    return searchResults
}

export {loadClient, ytSearch, ytSearchResponseHandler};