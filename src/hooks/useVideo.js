
import { useEffect, useState } from "react";
import youtube from "../apis/youtube"
const useVideos = (defaultSearchTerm) => {
    const [state, setState] = useState({
        videos: [],
        selectedVideo: null
    })
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm])
    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });
        setState({
            ...state,
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };
    const onVideoSelect = video => {
        setState({
            ...state,
            selectedVideo: video
        })
    }
    return [state, search, onVideoSelect];
};
export default useVideos;