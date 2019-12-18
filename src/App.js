import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './components/apis/youtube'
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo:null
    }
  }

  componentDidMount() {
    this.onSearchSubmit('mops')
  }

  onSearchSubmit = (videoTitle) => {

    youtube.get('/search', {
      params: {
        q: videoTitle
      }
    }).then((response) => {
      this.setState({
         videos: response.data.items ,
         selectedVideo:response.data.items[0]
      })
    })
  }

  onSelectedVideo = (video)=> {
    this.setState({selectedVideo:video})

  }

  render() {
    return (
      <div >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="user-dashboard">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
        </div>

      </div>
    );
  }
}

export default App;


