import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <div>
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img
              src={imgUrl}
              alt="thumbnail of video"
              className="media-object"
            />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;
