import TopDetails from "../components/TopDetails";

const TopList = ({songs, loaded}) => {

    if(!loaded){
        return(
            <p>Loading...</p>
        )
    }

    const songList = songs.feed.entry.map( (song, index) => {
        return(
            <TopDetails name={song.title.label} link={song.link[0].href} key={index}/>
        )
    })


    return(
        <>
        <p>Here's where stuff will be listed</p>
        {songList}
        </>
    )
}

export default TopList;