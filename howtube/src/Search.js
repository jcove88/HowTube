import React from "react"
import ReactDOM from 'react-dom/client'
import { myfavorites } from './Categories'
import { Favorites } from "./Heart"

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
  console.log(searchResults);
  Home(searchResults);
  return searchResults
};

function ytSearchResponseHandler(results) {
    const searchResults = {};
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

function Home(searchResults){
  const urls = Object.keys(searchResults);
  let componentList = [];
  urls.forEach(url => {
      let embeddedUrl = url.replace("watch?v=","embed/");
      componentList.push(
          <div className="Video">
              <iframe width="300" height="174" src={embeddedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
              <div className="Description-container">
                  <p>
                    {searchResults[url].snippet.title};
                  </p>
                  <div className="Description-text">
                  <p>
                    {searchResults[url]["snippet"]["channelTitle"]}
                  </p>
                  <p>
                    {searchResults[url].snippet.description};
                  </p>
                  <button onClick={()=> url in myfavorites? delete searchResults[url] : myfavorites[url] = searchResults[url]}>
                    heart
                  </button>
              </div>
          </div>
      </div>
      )
  })
  const root = ReactDOM.createRoot(
    document.getElementById("body")
  )
  if(Object.keys(componentList).length === 0){
    const favorites = <Favorites/>
    root.render(favorites);
  }
  else
    root.render(componentList);
}

export { ytSearch, ytSearchResponseHandler, ytSearchBar, Home };