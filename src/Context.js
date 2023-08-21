import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const values = { 
        count,
        suma() {
            setCount((val) => val + 1 );
        },
        resta() {
            setCount((val) => val - 1 );
        },
        user: {
            status: "Online",
            jwt: "1234",
            theme: "light"
        }
    };


    return ( 
        <CounterContext.Provider value={values}> { children }</CounterContext.Provider>
    )
}