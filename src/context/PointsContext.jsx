import React , { createContext , useState} from "react";


const PointsContext = createContext()

export const PointsProvider = ({children}) => {
   
    const [points, setPoints] = useState(4)  //estado 

    const increment = () => {
        if (points < 8) {
          setPoints(points + 1);
        }
      };
    
      const decrement = () => {
        if (points > 1) {
          setPoints(points - 1);
        }
      };
    
    // se colocan todas las funciones que queremos que se comprartan  


    
    return (<PointsContext.Provider value={{points, increment, decrement}}>{children}</PointsContext.Provider> )  //provedor del cvontenido

}

export default  PointsContext