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
                            thumb: formCadastro.values.thumb,
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
                            <input 
                                placeholder="Thumbnail"
                                name="thumb" 
                                value={formCadastro.values.thumb} 
                                onChange={formCadastro.handleChange}
                            />
                            <select name="playlist" onChange={formCadastro.handleChange}>
                                <option value="0" selected disabled>Selecione...</option>
                                <option value="3">Aulas</option>
                                <option value="2">Cifras</option>
                                <option value="1">Musicas</option>
                            </select>
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                ) : false
            }
        </StyledRegisterVideo>
    )
}