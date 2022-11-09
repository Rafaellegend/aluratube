import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu"
import Timeline from "../src/components/Timeline"
import Header from "../src/components/Header"
import Favorites from "../src/components/Favorites"
import React from "react";

function HomePage() {
    //console.log(config.playlists)
    const [filterValue, setFilterValue] = React.useState("");

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
                <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
                <Header/>
                <Timeline searchValue={filterValue} playlists={config.playlists}>Conteúdo</Timeline>
                <Favorites favorites={config.favorites}></Favorites>
            </div>
        </>

    )
}

export default HomePage




