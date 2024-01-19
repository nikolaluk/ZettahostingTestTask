import Filter from "../core/Filter/Filter"
import GameContainer from "../core/GameContainer/GameContainer"

import { CatalogProvider } from "../../contexts/CatalogContext"

import "./Catalog.scss"

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
