import axios from "axios";
import { createContext, useEffect, useState }  from "react";

export const context = createContext()

export function MyProvider({children}){
        const [data,setData] = useState([])

        const getData =async()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
        }

        useEffect(() =>{
            getData()
        },[]
        )
    return(
        <context.Provider value={{data}}>
            {children}
        </context.Provider>
    )
}