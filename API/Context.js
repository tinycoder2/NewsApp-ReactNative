import axios from 'axios';
import React from 'react';
import { createContext, useState, useEffect } from "react";
import { getNewsAPI } from './api';

export const NewsContext = createContext()

const Context = ({ children }) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("general");
    const [index, setIndex] = useState(0);

    const fetchNews = async () => {
        const { data } = await axios.get(getNewsAPI(category));
        setNews(data);
        setIndex(1);
    }

    useEffect(() => {
        fetchNews();
    }, [category]);


    return (
        <NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;