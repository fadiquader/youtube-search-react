import React from 'react';
//
import { VideoItem } from './VideoItem';
import './SideBar.css';

export class SideBar extends React.Component {

  render() {
    const { videos, selected, onSelectVideo } = this.props;
    return (
      <div className="sidebar">
        <ul className="videos-list">
          {
            videos.map(video => {
              const id = video.id.videoId;
              const activeClass = selected === id ? 'selected-video' : '';
              return (
                <li
                  className={activeClass}
                  key={id}
                  onClick={() => onSelectVideo(video)}
                >
                  <VideoItem video={video} />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
