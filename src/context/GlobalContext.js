import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [name, setName] = useState("usman");
    const [value,SetValue]=useState(0)
    const add = () => {
        alert("addd");
    };
    const increament =()=>{
        SetValue(value+1)

    }
    return (
        <GlobalContext.Provider
            value={{
                add,
                name,
                value,
                increament
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
export { GlobalProvider };