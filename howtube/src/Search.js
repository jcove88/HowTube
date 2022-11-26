async function ytSearch(input) {
  input = 'how to ' + input
  console.log(`input: ${input}`)
  const searchResults = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyDEEH7KRtxexg17ArcMO7NqFm1Sqpna1xY`, {
    Accept: 'application/json'
  })
    .then((response) => {
      return response.json()
    })
    .then((results) => {
      return ytSearchResponseHandler(results)
    })
  console.log(searchResults)
  return searchResults
};

function ytSearchResponseHandler(results) {
    const searchResults = {}
    results['items'].forEach(item => {
        if (item !== "snippet") {
            let url = "https://www.youtube.com/watch?v=" + item.id.videoId;
            searchResults[url] = item
        }
    });
    return searchResults
};

function ytSearchBar() {
  const input = document.getElementById('searchBar').value

  return ytSearch(input);
}

export { ytSearch, ytSearchResponseHandler, ytSearchBar};