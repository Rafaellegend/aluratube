import React from "react"
import {StyledRegisterVideo} from "./styles"
import { createClient } from "@supabase/supabase-js";

// Custom Hook
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

//pega a thumb do link do youtube
function getThumbnail(url){
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}



const PROJECT_URL = "https://hphkwdwflbihvmgzcpws.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaGt3ZHdmbGJpaHZtZ3pjcHdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzOTA3MTIsImV4cCI6MTk4Mzk2NjcxMn0.pMdeUwvdyOJnFoQKnUcd9oKjcUISjkAzExA-iMozwzo"
const supabase = createClient(PROJECT_URL,PUBLIC_KEY);

export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues:{ titulo: "Titulo do video", url: "https://youtube.com/", thumb: "url da Thumbnail", playlist: '3' }
    });
    const [formVisble, setFormVisible] = React.useState(false);
    console.log(supabase.from("video").insert)
    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}> +</button>
            {formVisble
                ?(                    
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setFormVisible(false);
                        console.log(formCadastro.values);
                        supabase.from("video").insert({
                            title: formCadastro.values.titulo,
                            url: formCadastro.values.url,
                            thumb: getThumbnail(formCadastro.values.url),
                            playlist: formCadastro.values.playlist
                        })
                        .then((res)=> {
                            console.log(res);
                        })
                        .catch((err) => {
                            console.log(err);
                        })

                        }}>
                        <div>
                            <button className="close-modal" onClick={() => setFormVisible(false)}>
                                X
                            </button>
                            <input 
                                placeholder="Titulo do video" 
                                name="titulo"
                                value={formCadastro.values.titulo} 
                                onChange={formCadastro.handleChange}
                            />
                            <input 
                                placeholder="URL"
                                name="url" 
                                value={formCadastro.values.url} 
                                onChange={formCadastro.handleChange}
                            />
                            <select name="playlist" onChange={formCadastro.handleChange}>
                                <option value="0" selected disabled>Selecione...</option>
                                <option value="3">Aulas</option>
                                <option value="2">Cifras</option>
                                <option value="1">Musicas</option>
                            </select>
                            <button type="submit">Cadastrar</button>
                            {/*Preview*/}
                            <div className="vidpreview">
                                <a>
                                    <img src={
                                        formCadastro.values.url.indexOf('youtube')?
                                        getThumbnail(formCadastro.values.url)
                                        :
                                        checkurl(formCadastro.values.thumb)? 
                                        formCadastro.values.thumb : 
                                        "https://assets-global.website-files.com/61a0a53beeb118af7ddb4c55/61c32acb80a17f5b05666999_Choose-the-Right-Video-Thumbnail-Size-6-1-1-1024x576.png"
                                        }/>
                                    <p>{formCadastro.values.titulo}</p>
                                </a>
                            </div>

                        </div>
                    </form>
                ) : false
            }
        </StyledRegisterVideo>
    )
}