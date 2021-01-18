import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiDisplayed, handleSushiClick, updateDisplay }) {
  const sushi = sushiDisplayed.map(sushi =>
    <Sushi 
      key={sushi.id} 
      sushi={sushi} 
      handleSushiClick={handleSushiClick} 
    />
  )

  return (
    <div className="belt">
      {sushi}
      <MoreButton updateDisplay={updateDisplay} />
    </div>
  );
}

export default SushiContainer;
