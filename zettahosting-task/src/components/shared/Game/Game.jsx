import "./Game.css"

function Game(data) {
  const image = data.data;

  const divStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="game-div" style={divStyle}>

    </div>
  )
}

export default Game;