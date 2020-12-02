import React, { useState, useEffect } from "react";
import TopList from "../components/TopList";

const TopContainer = () => {


    const [songs, setSongs] = useState({});
    const [loaded, setloaded] = useState(false);

    const getSongs = async () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data))
        .then(() => setloaded(true));
    }

    useEffect(()=>{
        getSongs();
    }, []);

    return(
        <>
            <TopList songs={songs} loaded={loaded}/>
        </>
    )
}

export default TopContainer;