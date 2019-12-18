import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return (
            <div>Loading</div>
        )
    } else {
        const videoSrc = "https://www.youtube.com/embed/"
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={`${videoSrc}${props.video.id.videoId}`} ></iframe>
                </div>
                <div className="ui segment">
                    <h2 className="ui header">{props.video.snippet.title}</h2>
                    <p>{props.video.snippet.description}</p>
                </div>

            </div>);
    }

}

export default VideoDetail;