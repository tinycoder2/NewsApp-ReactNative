import axios from 'axios';
import React from 'react';
import { createContext, useState, useEffect } from "react";
import { getNewsAPI } from './api';

export const NewsContext = createContext()

const Context = ({ children }) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("home");
    const [index, setIndex] = useState(0);

    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset));
        setNews(data);
        setIndex(1);
    }


    useEffect(() => {
        fetchNews();
    }, [category]);


    return (
        <NewsContext.Provider value={{ news, index, setIndex, fetchNews, setCategory }}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;