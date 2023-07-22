import { useContext} from "react"
import PointsContext from "../context/PointsContext"
import GameOver from "./GameOver"
import Win from "./Win"

const Points = () => {

    
   const {points}= useContext(PointsContext)

   return (
    <div className="points">
        <h4>POINTS</h4>
        <span>{points}</span>
        {points === 0 ? <GameOver /> : ""} 
         {points === 8 ? <Win /> : ""}
        
         
    </div>
  )
}

export default Points 