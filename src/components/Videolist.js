import React from "react"
import VideoItem from "./VideoItem"
const VideoList = (props) => {
    const videoItem = props.ListVideo.map((item) => {
        return <VideoItem video={item} key={item.id.videoId} onVideoSelect={props.onVideoSelect} />
    })
    return (
        <div className="ui relaxed divided list">
            {videoItem}
        </div>
    )
}
export default VideoList;