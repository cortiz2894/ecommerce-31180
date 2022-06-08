import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const handleTheme = () => {
        console.log("Se cambio el theme")
        setDarkTheme(!darkTheme)
    }

    const data = {
        darkTheme,
        handleTheme
    }

    return(
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext }
export default ThemeProvider