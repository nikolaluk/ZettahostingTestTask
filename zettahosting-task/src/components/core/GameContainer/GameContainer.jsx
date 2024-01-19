import { useContext } from "react";
import CatalogContext from "../../../contexts/CatalogContext";
import Game from "../../shared/Game/Game";
import "./GameContainer.scss"

function GameContainer() {
    const { changeActiveFilterHandler,
        changeActiveProviderHandler,
        changeActiveGenreHandler,
        changeActiveSearchQueryHandler,
        gamesToShow } = useContext(CatalogContext);

    function resetFilterHandler() {
        changeActiveFilterHandler(null);
        changeActiveProviderHandler(null);
        changeActiveGenreHandler(null);
        changeActiveSearchQueryHandler('');
    }

    const gamesElement = gamesToShow.map(game => {
        return <Game key={game.id} data={game.image} />
    })

    return (
        <div className="games">
            <div className="games-container">
                {gamesElement.length > 0 && gamesElement}

            </div>

            {gamesElement.length == 0 &&
                <div className="games-nothing-found">
                    <p className="games-nothing-found-paragraph">Nothing was found for this query. Please change the query.</p>
                    <p className="games-nothing-found-reset" onClick={resetFilterHandler}>Reset filter</p>
                </div>}
        </div>
    )
}

export default GameContainer;
