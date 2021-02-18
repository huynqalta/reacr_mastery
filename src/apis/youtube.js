import axios from "axios"
const KEY = 'AIzaSyApLeYuO1jxGkAyaMWPE52xg1HXXjgTl-E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,

    }
});

