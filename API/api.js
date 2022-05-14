// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d3100f9741
import configData from "../config/config.json";

export const categories = [
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/news.png",
        name: "home",
    },
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/bullish.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/parliament.png",
        name: "politics",
    },
    {
        pic: "https://img.icons8.com/dusk/100/000000/stethoscope.png",
        name: "health",
    },
    {
        pic: "https://img.icons8.com/dusk/100/000000/microscope.png",
        name: "science",
    },
    {
        pic: "https://img.icons8.com/dusk/100/000000/trophy.png",
        name: "sports",
    },
    {
        pic: "https://img.icons8.com/dusk/500/000000/services--v1.png",
        name: "technology",
    },
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/globe--v1.png",
        name: "world",
    },
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/hanger.png",
        name: "fashion",
    },
    {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/food-and-wine.png",
        name: "food",
    }, {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/movie-projector.png",
        name: "movies",
    }, {
        code: "",
        pic: "https://img.icons8.com/dusk/100/000000/airport.png",
        name: "travel",
    },
];




export const BASE_URL_TopStories = "https://api.nytimes.com/svc/topstories/v2";
export const BASE_URL_Search = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

export const API_KEY = configData.API_KEY;

export const getNewsAPI = (category) => {
    return `${BASE_URL_TopStories}/${category}.json?api-key=${API_KEY}`;
};

export const getNewsFromSearchAPI = (query) => {
    return `${BASE_URL_Search}q=${query}&api-key=${API_KEY}`;
};
