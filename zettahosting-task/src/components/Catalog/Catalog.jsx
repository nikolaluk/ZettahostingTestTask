import { CatalogProvider } from "../../contexts/catalogContext"
import Filter from "../shared/Filter/Filter"
import Game from "../shared/Game/Game"
import "./Catalog.css"

function Catalog() {


  return (
    <CatalogProvider>
      <div className="catalog-wrapper">
        <Filter />
        <div className="games-container">
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
          <Game></Game>
        </div>
      </div>
    </CatalogProvider>
  )
}

export default Catalog