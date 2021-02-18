
import './App.css';

import youtube from "../apis/youtube"
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './Videolist';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideo';
const App = () => {
  const [state, search, onVideoSelect] = useVideos('buildings');
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              ListVideo={state.videos}
              onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>

    </div>
  )
}
export default App;
