import { useContext } from "react";
import "./GameContainer.css"
import CatalogContext from "../../../contexts/CatalogContext";
import Game from "../../shared/Game/Game";

function GameContainer() {
    const { changeActiveFilterHandler,
            changeActiveProviderHandler,
            changeActiveGenreHandler,
            changeActiveSearchQueryHandler,
            gamesToShow } = useContext(CatalogContext);

    function resetFilterHandler() {
        changeActiveFilterHandler(null);
        changeActiveProviderHandler(null);
        changeActiveGenreHandler("all");
        changeActiveSearchQueryHandler('');
    }

    const gamesElement = gamesToShow.map(game => {
        return <Game key={game.id} data={game.image} />
    })

    return (
        <div className="games-container">
            {gamesElement.length > 0 ?
                gamesElement :
                <div className="nothing-found">
                    <p className="nothing-found-paragraph">Nothing was found for this query. Please change the query.</p>
                    <p className="nothing-found-reset" onClick={resetFilterHandler}>Reset filter</p>
                </div>}
        </div>
    )
}

export default GameContainer;
