import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([])
  const [index, setIndex] = useState(0)
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(data => {
        const augmentedData = data.map(sushi => {
          return  {...sushi, eaten: false}
        })
        setSushiData(augmentedData)
      })
  }, [])

  
  function handleSushiClick(eatenSushi) {
    if (eatenSushi.price <= wallet) {
      const updatdSushi = sushiData.map((sushi) => {
        if (eatenSushi.id === sushi.id) return { ...sushi, eaten: true }
        return sushi
      })
      setSushiData(updatdSushi)
      setWallet(wallet-eatenSushi.price)
    }
  }

  function updateDisplay() {
    setIndex(index+4)
  }
  
  const sushiDisplayed = sushiData.slice(index,index+4)

  const emptyPlates = sushiData.filter(sushi => sushi.eaten)
  
  return (
    <div className="app">
      <SushiContainer 
        sushiDisplayed={sushiDisplayed}
        handleSushiClick={handleSushiClick}
        updateDisplay={updateDisplay}
      />
      <Table balance={wallet} plates={emptyPlates}/>
    </div>
  );
}

export default App;
