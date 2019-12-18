import React from 'react';
import './VideoItem.css'


const VideoItem = (props) => {

    return (
        <div className="video-item item" 
            onClick={() => props.onSelectedVideo(props.video)}
        >
            <img className="ui image item-img" src={props.video.snippet.thumbnails.medium.url} 
            alt={props.video.snippet.title} />
            <div className="content">
                <a href="#" className=" video-title" >{props.video.snippet.title}</a>
            </div>
            <div className="hover"></div>
        </div>);
}

export default VideoItem;