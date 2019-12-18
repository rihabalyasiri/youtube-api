import axios from 'axios';

const KEY ="AIzaSyDhyEUn8i4Dqh40Y3H7QE6lciFTOyKUV_I";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part:'snippet',
        maxResults:25,
        key:KEY,
        type:'video'
    }
})