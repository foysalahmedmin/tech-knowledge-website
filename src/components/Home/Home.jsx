import Cards from '../Cards/Cards';
import Bookmark from '../Bookmark/Bookmark';
import React, { useEffect, useState } from 'react';


const Home = () => {
    const [cardsData, setCardsData] = useState([])
    const [readTime , setReadTime] = useState(0)
    useEffect(() => {
        fetch("blogs_data.json")
        .then(res => res.json())
        .then(data => setCardsData(data))
    }, [])
    const readTimeHandler = (time) =>{
        setReadTime(readTime + time);
    }
    return (
        <section>
            <div className="container mx-auto px-[2.5%] flex">
                <Cards data={cardsData} readTimeHandler = {readTimeHandler} ></Cards>
                <Bookmark totalTime= {readTime}></Bookmark>
            </div> 
        </section>
    );
};

export default Home;