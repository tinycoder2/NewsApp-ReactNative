// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741
import configData from "../config/config.json";

export const categories = [
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/news.png",
        name: "home",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "fashion",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
        name: "health",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
        name: "science",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
        name: "sports",
    },
    {
        pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
        name: "technology",
    },
];


export const sources = [
    {
        id: "bbc-news",
        name: "BBC News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png",
    },
    {
        id: "cnn",
        name: "CNN",
        pic: "https://bankimooncentre.org/wp-content/uploads/2020/06/cnn-logo-square.png",
    },
    {
        id: "fox-news",
        name: "Fox News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fox_News_Channel_logo.svg/768px-Fox_News_Channel_logo.svg.png",
    },
    {
        id: "google-news",
        name: "Google News",
        pic: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png",
    },
];

export const BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

export const API_KEY = configData.API_KEY;

export const getNewsAPI = (category, country = "in") => {
    return `${BASE_URL}/${category}.json?api-key=${API_KEY}`;
};

// export const getNewsAPI = (category, country = "in") => {
//     return `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=jVlrqp0vlux8FbXOHMO8GkA6hg03Wk29`;
// };


// export const getSourceAPI = (source) => {
//     return `${BASE_URL}/everything/${source}.json`;
// };