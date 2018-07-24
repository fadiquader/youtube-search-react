import React from 'react';
//
import './SelectedVideo.css';

export class SelectedVideo extends React.Component {
  render() {
    const { video } = this.props;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className=" ">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} />
        </div>
        <div className="details">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
}
