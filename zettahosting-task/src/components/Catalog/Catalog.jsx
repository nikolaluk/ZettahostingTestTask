import { CatalogProvider } from "../../contexts/catalogContext"
import Filter from "../shared/Filter/Filter"
import GameContainer from "../shared/GameContainer/GameContainer"
import "./Catalog.css"

function Catalog() {

  return (
    <CatalogProvider>
      <div className="catalog-wrapper">
        <Filter />
        <GameContainer/>
      </div>
    </CatalogProvider>
  )
}

export default Catalog