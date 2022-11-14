import config from "../config.json";
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"
import Header from "../src/components/Header"
import Favorites from "../src/components/Favorites"
import React from "react";
import { videoService } from "../src/services/videoService";


function HomePage() {
    //console.log(config.playlists)
    const service = videoService();
    const [filterValue, setFilterValue] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() =>{
        service
            .getAllVideos("videos", "*")
            .then((dados) => {
                console.log(dados.data);
                const newPlaylists = {...playlists};
                dados.data.forEach((videos)=>{
                    if(!newPlaylists[videos.playlist]) newPlaylists[videos.playlist] =[];
                    newPlaylists[videos.playlist] = [
                        videos, ...newPlaylists[videos.playlist]
                    ]
                })
                setPlaylists(newPlaylists);
            });
    }, [])

    return (
        <>
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
                <Header/>
                <Timeline searchValue={filterValue} playlists={playlists}>Conteúdo</Timeline>
                <Favorites favorites={config.favorites}></Favorites>
            </div>
        </>

    )
}

export default HomePage




