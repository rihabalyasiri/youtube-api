import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    console.log(props.videos)
    const videoList = props.videos.map((video) => {
        return (
            <VideoItem video={video} onSelectedVideo={props.onSelectedVideo} 
            key={video.id.videoId}/>
        )
    })
    return (<div className="ui relaxed divided list video-list">
        {videoList}
    </div>);
}

export default VideoList;