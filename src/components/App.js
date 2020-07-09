import React from "react";

import SearchBar from "./SearchBar";

import youtube from "../apis/youtube";

import VideoList from "./VideoList";

import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyBocSYBCS584hx7jcmRu9Bt-9PBl5FOhSE";

class App extends React.Component {
  componentDidMount() {
    this.onTermSubmit("sadhguru life");
  }

  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    // console.log(term);
    // Preconfigured instance of axios
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    // console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log("From the App", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
