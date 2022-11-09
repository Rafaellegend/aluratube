import styled from "styled-components";

export const StyledFavorites = styled.div`

section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;
    display: grid;
    grid-gap: 0px;
    grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
    grid-auto-flow: column;
    grid-auto-columns: minmax(200px,1fr);
}
h2 {
    font-size: 16px;
    padding-left:30px;
    text-transform: capitalize;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
    
}
.favsicons {
    display: grid;
    max-width:100px;
    text-align: center;
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    span {
        text-overflow:ellipsis;
        color: ${({ theme }) => theme.textColorBase || "#222222"};
    }
    
}
`;
export default function Favorites(props) {
    //console.log("Dentro do componente", props.favorites)
    const favoritesList = Object.keys(props.favorites);
    return (
        <StyledFavorites>
            <h2>Favoritos</h2>
            <section>
                {favoritesList.map((favoritesList) => {
                    //console.log(props.favorites);
                    const fav = props.favorites[favoritesList];
                    return (
                        <div key={fav.url} className="favsicons">
                            <a href={fav.url} >
                                <img src={fav.img}></img>
                                <span>{fav.name}</span>
                            </a>
                        </div>
                    )
                })}
            </section>
        </StyledFavorites>
    )
}