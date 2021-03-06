import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAX4iDX0i3CnRO0Hc6Rd9jmtFwiQd3xQgw';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos:[],
      selectedVideo : null
    };
    YTSearch({key:API_KEY, term:'Cricket'},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo : videos[0]
      })
    });
  }

  render(){
    return(
      <div className="container">
          <SearchBar/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {(selectedVideo)=> {this.setState(selectedVideo:selectedVideo)}}
            videos={this.state.videos}/>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
