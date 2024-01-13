import { useContext } from "react";
import "./GameContainer.css"
import CatalogContext from "../../../contexts/catalogContext";
import Game from "../../shared/Game/Game";

function GameContainer() {
    const { gamesToShow } = useContext(CatalogContext);
    
    const gamesElement = gamesToShow.map(game => {
        return <Game key={game.id} data={game.image}/>
    })
    
    return (
        <div className="games-container">
          {gamesElement}
        </div>
    )
}

export default GameContainer;