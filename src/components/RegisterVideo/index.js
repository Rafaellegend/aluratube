import React from "react"
import {StyledRegisterVideo} from "./styles"


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


export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues:{ url: "https://youtube.com/" }
    });
    const [formVisble, setFormVisible] = React.useState(false);
   
    
    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisible(true)}> +</button>
            {formVisble
                ?(                    
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        setFormVisible(false);
                        formCadastro.clearForm();
                        }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>
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
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                ) : false
            }
        </StyledRegisterVideo>
    )
}