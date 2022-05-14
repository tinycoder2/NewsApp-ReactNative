import axios from 'axios';
import React from 'react';
import { createContext, useState, useEffect } from "react";
import { getNewsAPI, getNewsFromSearchAPI } from './api';

export const NewsContext = createContext()

const Context = ({ children }) => {
    const [news, setNews] = useState([]);
    const [results, setResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("home");
    const [index, setIndex] = useState(0);

    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset));
        setNews(data);
        setIndex(1);
    }

    const fetchSearchResults = async (searchQuery) => {
        const { data } = await axios.get(getNewsFromSearchAPI(searchQuery));
        setResults(data);
        setIndex(1);
    }

    useEffect(() => {
        fetchNews();
    }, [category]);

    useEffect(() => {
        fetchSearchResults(searchQuery);
    }, [searchQuery]);


    return (
        <NewsContext.Provider value={{ news, index, setIndex, fetchNews, setCategory, fetchSearchResults, searchQuery, setSearchQuery, results }}>
            {children}
        </NewsContext.Provider>
    )
}

export default Context;