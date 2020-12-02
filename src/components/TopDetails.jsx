import React from "react";

const TopDetails = ({name, link, loaded}) => {
    
    // if(!loaded){
    //     return(
    //         <p>Loading...</p>
    //     )
    // }

    return (
        <>
            <ul>
                <li>{name}</li>
            </ul>
        </>
    )
}

export default TopDetails;