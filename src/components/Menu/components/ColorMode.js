import React from "react";

export const ColorModeContext = React.createContext({
    mode: "light",
    setMode: () => {alert("Você precisa me configurar")},
    toggleMode: () => {alert("Você precisa me configurar")}
});


export default function ColorModeProvider(props){
    const [mode, setMode] = React.useState(props.initialMode);
    function toggleMode(){
        if(mode ==="dark") setMode("light");
        if(mode ==="light") setMode("dark");
    }
    return (
        <div>
            <ColorModeContext.Provider value={{mode : mode, setMode, toggleMode}}>
                {props.children}
            </ColorModeContext.Provider>
        </div>
    )
}