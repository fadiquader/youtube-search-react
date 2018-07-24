import React, { Component } from 'react';
import _ from 'lodash';
//
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { SelectedVideo } from './components/SelectedVideo';
import { onSearchChange } from './services/youtube';
import './App.css';

class App extends Component {
  state = {
    loading: false,
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onSearchChange('');

  }
  toggleLoading = () => this.setState(prev => ({
    loading: !prev.loading,
  }));

  onSearchChange = _.debounce(async query => {
    try {
      this.toggleLoading();
      const res = await onSearchChange(query);
      this.setState({
        loading: false,
        videos: res.data.items,
        selectedVideo: res.data.items[0],
      });
    } catch (e) {
      this.toggleLoading();
      console.log('Error: ', e.response)
    }
  }, 300);

  onSelectVideo = video => this.setState({ selectedVideo: video });

  render() {
    const { videos, loading, selectedVideo } = this.state;
    return (
      <div className="App">
        <Header onSearchChange={this.onSearchChange} />
        <div className="app-content">
          {
            loading &&
              <h3 className="text-center">
                loading
              </h3>
          }
          {
            !loading &&
            <React.Fragment>
              <SideBar
                videos={videos}
                onSelectVideo={this.onSelectVideo}
                selected={selectedVideo && selectedVideo.id.videoId}
              />
              {
                selectedVideo &&
                <SelectedVideo
                  video={selectedVideo}
                />
              }
            </React.Fragment>
          }

        </div>
      </div>
    );
  }
}

export default App;
