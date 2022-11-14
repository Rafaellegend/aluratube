import React from "react";
import { StyledFavorites, StyledRegisterFav } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(props){
    const [values, setValues] = React.useState(props.initialValues);
    return {
        values,
        handleChange: (e) =>{
            //console.log(e.target);
            const value = e.target.value;
            const name = e.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}
const PROJECT_URL = "https://hphkwdwflbihvmgzcpws.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaGt3ZHdmbGJpaHZtZ3pjcHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA3MTIsImV4cCI6MTk4Mzk2NjcxMn0.pMdeUwvdyOJnFoQKnUcd9oKjcUISjkAzExA-iMozwzo"
const supabase = createClient(PROJECT_URL,PUBLIC_KEY);


export default function Favorites(props) {
    const formCadastro = useForm({
        initialValues:{ nome: "Nome do Canal", url: "url do video", pic: "Foto de perfil" }
    });
    //console.log("Dentro do componente", props.favorites)
    const favoritesList = Object.keys(props.favorites);
    const [formVisble, setFormVisible] = React.useState(false);
    return (
        <StyledFavorites>
            <h2>
                Favoritos
                <button className="addingfav" onClick={() => setFormVisible(true)}>+</button>
            </h2>

            <section>
                {favoritesList.map((favoritesList) => {
                    //console.log(props.favorites);
                    const fav = props.favorites[favoritesList];
                    return (
                        <div key={fav.url} className="favsicons">
                            <a href={fav.url} >
                                <img src={fav.pic}></img>
                                <span>{fav.name}</span>
                            </a>
                        </div>
                    )
                })}
            </section>
            <StyledRegisterFav>
                {formVisble ? (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setFormVisible(false);
                        //console.log(formCadastro.values);
                        supabase.from("favorito").insert({
                            name: formCadastro.values.nome,
                            url: formCadastro.values.url,
                            pic: formCadastro.values.pic
                            
                        })
                        .then((res)=> {
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        formCadastro.clearForm();
                    }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisible(false)}>
                                X
                            </button>
                            <input 
                                name="nome" 
                                placeholder="Nome do Canal" 
                                value={formCadastro.values.nome} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                name="url" 
                                placeholder="url"
                                value={formCadastro.values.url} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                name="pic" 
                                placeholder="pic"
                                value={formCadastro.values.pic} 
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">Cadastrar</button>
                            {/*Preview*/}
                            <div className="favpreview">
                                <a>
                                    <img src={checkurl(formCadastro.values.pic)? formCadastro.values.pic : "https://cdn-icons-png.flaticon.com/512/666/666201.png"}/>
                                    <p>{formCadastro.values.nome}</p>
                                </a>
                            </div>
                            
                        </div>                        
                    </form>
                    
                ) : false
                }
            </StyledRegisterFav>
        </StyledFavorites>
    )
}

//checa se a URL é valida
function checkurl(string){
    try {
        let url = new URL(string)
        console.log("Valid URL!",url)
        return true
    } catch(err) {
        //console.log("Invalid URL!")
        return false
    }
}

