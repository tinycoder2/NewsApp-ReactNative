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
        pic: "https://img.icons8.com/dusk/64/000000/equity-security.png",
        name: "business",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
        name: "politics",
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
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/news.png",
        name: "world",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "fashion",
    },
    {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "food",
    }, {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "movies",
    }, {
        code: "",
        pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
        name: "travel",
    },
];




export const BASE_URL = "https://api.nytimes.com/svc/topstories/v2";

export const API_KEY = configData.API_KEY;

export const getNewsAPI = (category) => {
    return `${BASE_URL}/${category}.json?api-key=${API_KEY}`;
};
