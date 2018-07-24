import React from 'react';

export const VideoItem = ({ video }) => {
  return (
    <div className="video-item">
      <div className="thumb">
        <img
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
        />
      </div>
      <div>
        <h5>{video.snippet.title}</h5>
      </div>
    </div>
  )
}
