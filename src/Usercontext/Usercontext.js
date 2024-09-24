import { createContext} from "react";
import { useState } from "react";



export let userContext=createContext();



export function UserContextProvider(props){
    const[userToken,setUserToken]=useState(null);

return<userContext.Provider value={{userToken,setUserToken}}>
{props.children}
</userContext.Provider>


}